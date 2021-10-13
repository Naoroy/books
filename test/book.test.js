//During the test the env variable is set to test
process.env.NODE_ENV = 'test'

const mongoose = require("mongoose")
const Bookshelf = require('../src/components/bookshelf')

//Require the dev-dependencies
const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../src/index')
const should = chai.should()

chai.use(chaiHttp)
describe('Books', () => {
    beforeEach((done) => { //Before each test we empty the database
        /*Bookshelf.remove({}, (err) => {
           done()
        })
        */
        done()
    })
  /*
  * Test the /GET route
  */
  describe('/GET book', () => {
      it('it should GET all the books', (done) => {
        chai.request(app)
            .get('/book')
            .end((err, res) => {
                  res.should.have.status(200)
                  res.body.should.be.a('array')
                  res.body.length.should.be.eql(0)
              done()
            })
      })
  })
})
