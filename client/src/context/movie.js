import React, { useState, useEffect, useRef } from "react";
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


    const randomMovieTrailer = Math.floor(Math.random() * movies.length)


    const popularMovies = movies.filter((movie) => movie.popular ? true : false)
    const renderPopularMovies = popularMovies.map((movie) => (
        <MovieCard
        key={ movie.id }
        movie={ movie }
        />
    ))

    const newMovies = movies.filter((movie) => movie.new_release? true : false)
    const renderNewMovies = newMovies.map((movie) => (
        <MovieCard
        key={ movie.id }
        movie={ movie }
        />
    ))

    const trendingMovies = movies.filter((movie) => movie.trending_now ? true : false)
    const renderTrendingMovies = trendingMovies.map((movie) => (
        <MovieCard
        key={ movie.id }
        movie={ movie }
        />
    ))

    //action movie render
    const actionMovies = movies.filter((movie) => {
        if( movie.genre === 'Action' && movie.title.toLowerCase().includes(searchMovieOnChange.toLowerCase()) ){
            return true
        }
    })

    const renderActionMovies = actionMovies.map((movie) => (
        <MovieCard
        key={ movie.id }
        movie={ movie }
        />
    ))


    //comedy movie render
    const comedyMovies = movies.filter((movie) => {
        if( movie.genre === 'Comedy' && movie.title.toLowerCase().includes(searchMovieOnChange.toLowerCase()) ){
            return true
        }
    })

    const renderComedyMovies = comedyMovies.map((movie) => (
        <MovieCard
        key={ movie.id }
        movie={ movie }
        />
    ))


    //romance movie render
    const romanceMovies = movies.filter((movie) => {
        if( movie.genre === 'Romance' && movie.title.toLowerCase().includes(searchMovieOnChange.toLowerCase()) ){
            return true
        }
    })

    const renderRomanceMovies = romanceMovies.map((movie) => (
        <MovieCard
        key={ movie.id }
        movie={ movie }
        />
    ))


    //drama movie render
    const dramaMovies = movies.filter((movie) => {
        if ( movie.genre === 'Drama' && movie.title.toLowerCase().includes(searchMovieOnChange.toLowerCase()) ){
            return true
        }
    })

    const renderDramaMovies = dramaMovies.map((movie) => (
        <MovieCard
        key={ movie.id }
        movie={ movie }
        />
    ))



    //thriller movie render
    const thrillerMovies = movies.filter((movie) => {
        if( movie.genre === 'Thriller' && movie.title.toLowerCase().includes(searchMovieOnChange.toLowerCase()) ){
            return true
        }
    })

    const renderThrillerMovies = thrillerMovies.map((movie) => (
        <MovieCard
        key={ movie.id }
        movie={ movie }
        />
    ))




    //adventure movie render
    const adventureMovies = movies.filter((movie) => {
        if( movie.genre === 'Adventure' && movie.title.toLowerCase().includes(searchMovieOnChange.toLowerCase()) ){
            return true
        }
    })

    const renderAdventureMovies = adventureMovies.map((movie) => (
        <MovieCard
        key={ movie.id }
        movie={ movie }
        />
    ))



    //crime movie render
    const crimeMovies = movies.filter((movie) => {
        if( movie.genre === 'Crime' && movie.title.toLowerCase().includes(searchMovieOnChange.toLowerCase()) ){
            return true
        }
    })

    const renderCrimeMovies = crimeMovies.map((movie) => (
        <MovieCard
        key={ movie.id }
        movie={ movie }
        />
    ))



    //horror movie render
    const horrorMovies = movies.filter((movie) => {
        if( movie.genre === 'Horror' && movie.title.toLowerCase().includes(searchMovieOnChange.toLowerCase()) ){
            return true
        }
    })

    const renderHorrorMovies = horrorMovies.map((movie) => (
        <MovieCard
        key={ movie.id }
        movie={ movie }
        />
    ))


    return(
        <MovieContext.Provider
        value={{
            movies,
            showSearchMovieInput,
            searchMovieOnChange,
            setSearchMovieOnChange,
            randomMovieTrailer,
            triggerRandomTrailer,
            setTriggerRandomTrailer,
            renderPopularMovies,
            renderNewMovies,
            renderTrendingMovies,
            renderActionMovies,
            renderComedyMovies,
            renderRomanceMovies,
            renderDramaMovies,
            renderThrillerMovies,
            renderAdventureMovies,
            renderCrimeMovies,
            renderHorrorMovies
            }}>
            {children}
        </MovieContext.Provider>
    )
}

export { MovieContext, MovieProvider}
