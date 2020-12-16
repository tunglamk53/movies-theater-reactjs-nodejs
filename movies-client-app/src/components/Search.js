import React, { useState } from "react";
import axios from "axios";

const Search = (props) => {
    const [searchText, setSearchText] = useState("");

    const fetchMovies = async () => {
        try {
            const result = await axios({
                method: "POST",
                url: `http://localhost:4000/${searchText}`,
                headers: {
                "Content-Type": "application/json"
                }
            })
            props.setMovies(result.data)
            console.log(result.data);
        } catch (err) { console.log(err) }
    }

    const callSearchFunction = (e) => {
        if(searchText.trim() === '') {
            alert('Please do not leave the search box empty')
        } else {

            e.preventDefault();
    
            // Fetch search data
            fetchMovies()
    
            //set searched = true
            props.setSearched(true)
    
            setSearchText("")
        }

    }

    return (
        <form className="search">
        <input
            value={searchText}
            onChange={ e => setSearchText(e.target.value) }
            type="text"
        />
        <input onClick={ callSearchFunction } type="submit" value="SEARCH" />
        </form>
    );
}

export default Search;