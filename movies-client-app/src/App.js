import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Movie from "./components/Movie";
import Pagination from "./components/Pagination";
import Search from "./components/Search";
import Form from "./components/Form"
import Alert from "./components/Alert"

function App() {

  const [movies, setMovies] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [searched, setSearched] = useState(false)
  const [clickedAddMovie, setClickedAddMovie] = useState(false)
  const [newMovie, setNewMovie] = useState(null)

  useEffect(() => {
    // create a fetch movies function
    const fetchMovies = async () => {
      try {
        const result = await axios({
            method: "GET",
            url: `http://localhost:4000/${currentPage}`,
            headers: {
            "Content-Type": "application/json"
            }
        })
          setMovies(result.data)
      } catch (err) { console.log(err) }
    }

    // run the function
    fetchMovies()
  }, [currentPage, newMovie])
  console.log(movies)
  
  return (
    <div className="App">
      {/* --- Header --- */}
      <Header setClickedAddMovie={setClickedAddMovie} />

      {/* --- Search bar --- */}
      <Search 
        setMovies={setMovies}
        setSearched={setSearched}
      />

      {/* Add new movie form */}
      <br/>
      {clickedAddMovie && <Form setClickedAddMovie={setClickedAddMovie} setNewMovie={setNewMovie}/>}
      
      <p className="App-intro">Sharing a few of our favourite movies</p>

      {/* Display message alert */}
      {newMovie && <Alert newMovie={newMovie} />}


      {/* --- Render Movies --- */}
      <div className="movies">
        {movies.map((movie, index) => (
          <Movie key={`${index}-${movie.Title}`} movie={movie} />
        ))}
      </div>
      
      {/* --- Pagination --- */}
      {/* if user click on search button, the Pagination bar is not displayed */}
      {!searched && 
      <Pagination 
        setCurrentPage={setCurrentPage} 
        currentPage={currentPage}
      />}

    </div>
  );
}

export default App;
