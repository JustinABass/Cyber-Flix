import React, { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

//this gives me global state
const MovieContext = React.createContext()

function MovieProvider({ children }) {
    const [ movies, setMovies ] = useState( [] )
    const [ triggerRandomTrailer, setTriggerRandomTrailer ] = useState( true )
    const [ showSearchMovies, setShowSearchMovies ] = useState( false )

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

    const actionMovies = movies.filter((movie) => movie.genre === 'Action')
    const renderActionMovies = actionMovies.map((movie) => (
        <MovieCard
        key={ movie.id }
        movie={ movie }
        />
    ))

    const comedyMovies = movies.filter((movie) => movie.genre === 'Comedy')
    const renderComedyMovies = comedyMovies.map((movie) => (
        <MovieCard
        key={ movie.id }
        movie={ movie }
        />
    ))

    const romanceMovies = movies.filter((movie) => movie.genre === 'Romance')
    const renderRomanceMovies = romanceMovies.map((movie) => (
        <MovieCard
        key={ movie.id }
        movie={ movie }
        />
    ))

    const dramaMovies = movies.filter((movie) => movie.genre === 'Drama')
    const renderDramaMovies = dramaMovies.map((movie) => (
        <MovieCard
        key={ movie.id }
        movie={ movie }
        />
    ))

    const thrillerMovies = movies.filter((movie) => movie.genre === 'Thriller')
    const renderThrillerMovies = thrillerMovies.map((movie) => (
        <MovieCard
        key={ movie.id }
        movie={ movie }
        />
    ))

    const adventureMovies = movies.filter((movie) => movie.genre === 'Adventure')
    const renderAdventureMovies = adventureMovies.map((movie) => (
        <MovieCard
        key={ movie.id }
        movie={ movie }
        />
    ))

    const crimeMovies = movies.filter((movie) => movie.genre === 'Crime')
    const renderCrimeMovies = crimeMovies.map((movie) => (
        <MovieCard
        key={ movie.id }
        movie={ movie }
        />
    ))

    const horrorMovies = movies.filter((movie) => movie.genre === 'Horror')
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
            showSearchMovies,
            setShowSearchMovies,
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
            renderHorrorMovies}}>
            {children}
        </MovieContext.Provider>
    )
}

export { MovieContext, MovieProvider}
