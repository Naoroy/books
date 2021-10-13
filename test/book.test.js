//During the test the env variable is set to test
process.env.NODE_ENV = 'test'

const mongoose = require("mongoose")
const Book = require('../src/components/bookshelf.model')

//Require the dev-dependencies
const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../src/index')
const should = chai.should()

chai.use(chaiHttp)
describe('Books', () => {
    beforeEach((done) => { //Before each test we empty the database
        Book.deleteMany({}, (err) => {
           done()
        })
    })
  describe('/GET book', () => {
    it('it should GET all the books', (done) => {
      chai
        .request(app)
        .get('/book')
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a('array')
          res.body.length.should.be.eql(0)
          done()
      })
    })
  })
  describe('/POST book', () => {
    it('it should POST one book', (done) => {
      let book = {
        Title:  "Toto and the school of devs",
        author: "Naoroy",
        year: 1954,
      }
      chai
        .request(app)
        .post('/book')
        .send(book)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a('object')
          res.body.should.have.property('errors')
          res.body.errors.should.have.property('pages')
          res.body.errors.pages.should.have.property('kind').eql('required')
          done()
        })
    })
  })
})
