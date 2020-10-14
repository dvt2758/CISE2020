if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const mongoose = require('mongoose')
const Article = require('./models/article')
const articleRouter = require('./routes/articles')
const methodOverride = require('method-override')
const app = express()
var bodyParser = require('body-parser');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })

const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', error => console.log('Connectect to mongoose'))
//mongoose.connect('mongodb://localhost/blog', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({extended:false})); 


app.get('/', async (req, res) => {
    const articles = await Article.find().sort({createdAt: 'desc'})         //Puts the most recent created articles on top
    res.render('articles/index', { articles: articles })
})

app.use('/articles', articleRouter)
app.listen(5000) 