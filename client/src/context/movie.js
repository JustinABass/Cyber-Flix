import React, { useState, useEffect } from "react";
import Movies from "../components/Movies";

//this gives me global state
const UserContext = React.createContext()

function UserProvider({ children }) {
    const [ movies, setMovies ] = useState( [] )

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
        <Movies
        key={ movie.id }
        movie={ movie }
        />
    ))

    const newMovies = movies.filter((movie) => movie.new_release? true : false)
    const renderNewMovies = newMovies.map((movie) => (
        <Movies
        key={ movie.id }
        movie={ movie }
        />
    ))

    const trendingMovies = movies.filter((movie) => movie.trending_now ? true : false)
    const renderTrendingMovies = trendingMovies.map((movie) => (
        <Movies
        key={ movie.id }
        movie={ movie }
        />
    ))

    const actionMovies = movies.filter((movie) => movie.genre === 'Action')
    const renderActionMovies = actionMovies.map((movie) => (
        <Movies
        key={ movie.id }
        movie={ movie }
        />
    ))

    const comedyMovies = movies.filter((movie) => movie.genre === 'Comedy')
    const renderComedyMovies = comedyMovies.map((movie) => (
        <Movies
        key={ movie.id }
        movie={ movie }
        />
    ))

    const romanceMovies = movies.filter((movie) => movie.genre === 'Romance')
    const renderRomanceMovies = romanceMovies.map((movie) => (
        <Movies
        key={ movie.id }
        movie={ movie }
        />
    ))

    const dramaMovies = movies.filter((movie) => movie.genre === 'Drama')
    const renderDramaMovies = dramaMovies.map((movie) => (
        <Movies
        key={ movie.id }
        movie={ movie }
        />
    ))

    const thrillerMovies = movies.filter((movie) => movie.genre === 'Thriller')
    const renderThrillerMovies = thrillerMovies.map((movie) => (
        <Movies
        key={ movie.id }
        movie={ movie }
        />
    ))

    const adventureMovies = movies.filter((movie) => movie.genre === 'Adventure')
    const renderAdventureMovies = adventureMovies.map((movie) => (
        <Movies
        key={ movie.id }
        movie={ movie }
        />
    ))

    const crimeMovies = movies.filter((movie) => movie.genre === 'Crime')
    const renderCrimeMovies = crimeMovies.map((movie) => (
        <Movies
        key={ movie.id }
        movie={ movie }
        />
    ))

    const horrorMovies = movies.filter((movie) => movie.genre === 'Horror')
    const renderHorrorMovies = horrorMovies.map((movie) => (
        <Movies
        key={ movie.id }
        movie={ movie }
        />
    ))




    return(
        <UserContext.Provider
        value={{
            movies,
            randomMovieTrailer,
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
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider}
