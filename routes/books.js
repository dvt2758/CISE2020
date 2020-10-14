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
         
     } {

     }
  })
 //create books route
  router.post('/' , async (req, res) => {
      res.send('Create book')
})

  module.exports = router