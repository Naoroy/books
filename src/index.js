const express   = require('express')
const mongoose  = require('mongoose')

const app       = express()
const PORT      = process.env.PORT || 8080
const book      = require('./components/bookshelf')


mongoose.connect('mongodb://localhost:27017/books')
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))

app.use(express.json())
app.get('/', (req, res) => {
    res.json({ message: 'Hello Express!' })
  })
  .route('/book')
    .get(book.getBooks)
    .post(book.postBook)

app.listen(PORT, () => console.log('Listening on ' + PORT))


module.exports = app
