const express   = require('express')
const mongoose  = require('mongoose')

const app       = express()
const PORT      = process.env.PORT || 8080
const book      = require('./components/bookshelf')
const config    = require('../config')

/*
const dbOptions = {
  server:   { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
  replset:  { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }
}
*/

//db connection
mongoose.connect(config.DB_URI)
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
