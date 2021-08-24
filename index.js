const express = require('express')
const mustacheExpress = require('mustache-express')
const session = require('express-session')
const app = express()
const pgp = require('pg-promise')()

app.use(express.urlencoded())

app.engine('mustache', mustacheExpress())
// the pages are located in the views directory
app.set('views', './views')
// extension for all the pages 
app.set('view engine', 'mustache')

let movies = []

//app.get('/mymovies', (req, res) => {
  //  res.render('index', {allmovies:movies})


app.get('/addmovie', (req, res) => {
    res.render('addmovie', {allmovies:movies})
})
app.post('/addmovie', (req, res) => {
    const title = req.body.title
    const description = req.body.description
    const genre = req.body.genre
    let movie = { title : title ,description:description ,genre:genre }
        movies.push(movie)
        //res.redirect('/mymovies')
        res.render('addmovie', {allmovies:movies})
})




app.listen(3000,() => {
    console.log('Server is running...')
})