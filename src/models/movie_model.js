const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MovieSchema = new Schema({
    Title: {
        type: String,
        require: false,
        trim: true
    },
    Year: {
        type: String,
        require: false,
        trim: true
    },
    imdbID: {
        type: String,
        require: false,
        trim: true
    },
    Type: {
        type: String,
        require: false,
        trim: true
    },
    Poster: {
        type: String,
        require: false,
        trim: true
    }
})

const MovieModel = mongoose.model("MovieDB", MovieSchema, "movies_col")

module.exports = MovieModel;