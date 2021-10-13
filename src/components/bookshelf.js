module.exports = { getBooks, postBook }
const Book = require('./bookshelf.model')

function getBooks(req, res) {
  const query = Book.find({})
  query.exec((error, books) => {
    if (error) res.send(err)
    res.send(books)
  });
}

function postBook(req, res) {
  const book = new Book(req.body)

  Book.create(book, (error, book) => {
    if(error) {
      res.send(error);
    }
    else {
      res.json({message: "Book successfully added!", book });
    }
  })
}
