const express = require("express")
const router = express.Router()
const Movie = require("../models/movie_model")

// get movies by Pagination
router.get("/:currentPage", async (req, res) => {
  try {
    const movies = await Movie.find().sort({$natural: -1}).skip(10*(req.params.currentPage-1)).limit(10)
    //return as JSON
    res.json(movies)
  } catch (err) {
      //if error, report error
    res.status(500).json({message: err.message})
  }
})

// get movies by searching text
router.post("/:searchText", async (req, res) => {
  try {
    const movies = await Movie.find({ 'Title' : { '$regex' : req.params.searchText, '$options' : 'i' } })
    //return as JSON
    res.json(movies)
  } catch (err) {
      //if error, report error
    res.status(500).json({message: err.message})
  }
})

// add a new movie to database
router.post("/", async (req, res) => {
  const movie = new Movie({
    Title: req.body.Title,
    Year: req.body.Year,
    Poster: req.body.Poster
  })

  try {
      const newMovie = await movie.save()
      res.status(201).json({ newMovie: newMovie })
  } catch (err) {
      res.status(400).json({ message: err.message })
  }
})






module.exports = router;

