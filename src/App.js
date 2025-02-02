import React, { useState } from "react";
import { useEffect } from "react";
import './app.css'
import SearchIcon from './search.svg'
import MovieCard from "./MovieCard";
//c30f4ca1
const movie1 = {
    "Title": "Shrek in the Swamp Karaoke Dance Party",
    "Year": "2001",
    "imdbID": "tt0307461",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTlmZjQzNmYtMjA1Ny00N2JkLWJhM2ItYTU3ODQ4Zjc2MWE1XkEyXkFqcGdeQXVyNzg5OTk2OA@@._V1_SX300.jpg"
}

const API_URL = "https://www.omdbapi.com?apikey=c30f4ca1"

const App = () => {
    const [movies, setMovies] = useState([])
    const [searchTerm,setsearchTerm]= useState('')

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();
        setMovies(data.Search)
    }
    useEffect(() => {
        searchMovies('Shrek')
    }, [])
    return (
        <div className="app">
            <h1>MovieLand</h1>
            <div className="search">
                <input
                    placeholder="Search For Movies"
                    value={searchTerm}
                    onChange={(e) => {setsearchTerm(e.target.value) }}
                />
                <img
                    src={SearchIcon}
                    alt="Search"
                    onClick={() => {searchMovies(searchTerm)}}
                />
            </div>
            {
                movies?.length > 0
                    ? (
                        <div className="container">
                            {movies.map((movie => (
                                <MovieCard movie={movie} />
                            )))

                            }
                        </div>
                    ) :
                    (
                        <div className="empty">
                            <h2>No Movies Found</h2>
                        </div>
                    )
            }

        </div>
    );
}

export default App