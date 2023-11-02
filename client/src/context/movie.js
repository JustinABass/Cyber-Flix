import React, { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

//this gives me global state
const MovieContext = React.createContext()

function MovieProvider({ children }) {
    const [ movies, setMovies ] = useState( [] )
    const [ triggerRandomTrailer, setTriggerRandomTrailer ] = useState( true )
    const [ showSearchMovieInput, setShowSearchMovieInput ] = useState( true )
    const [ searchMovieOnChange, setSearchMovieOnChange ] = useState( '' )


    useEffect(() => {
        fetch('/movies')
        .then((r) => r.json())
        .then((movies) => {
            setMovies( movies )
        })
    }, []);








    return(
        <MovieContext.Provider
        value={{
            movies,
            setMovies,
            showSearchMovieInput,
            searchMovieOnChange,
            setSearchMovieOnChange,
            // randomMovieTrailer,
            triggerRandomTrailer,
            setTriggerRandomTrailer,
            }}>
            {children}
        </MovieContext.Provider>
    )
}

export { MovieContext, MovieProvider}
