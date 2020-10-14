const express = require('express')
const router = express.Router()
const Author = require('../models/author')
const Book = require('../models/book')

//all books route
router.get('/', async (req, res) => {
    res.send('All books')
  })
  //new books route
  router.get('/new', async (req, res) => {
     try {
         const authors = await Author.find({})
         const book = new Book()
         res.render('books/new', {
             authors: authors,
             book: book
         })
     } catch {
         res.redirect('/books')
     } {

     }
  })
 //create books route
  router.post('/' , async (req, res) => {
      const book = new Book({
          title: req.body.title,
          author: req.body.author,
          publishDate: new Date(req.body.publishDate),
          description: req.body.description
      })
})

  module.exports = router