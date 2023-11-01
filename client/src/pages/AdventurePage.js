import React, { useContext } from 'react'
import { UserContext } from '../context/user'
import { MovieContext } from '../context/movie'
import MovieCard from '../components/MovieCard'

export default function AdventurePage() {
    const { isAuthenticated, userError } = useContext( UserContext )
    const { movies, searchMovieOnChange } = useContext( MovieContext )

    if( isAuthenticated ){
      const adventureMovies = movies.filter((movie) => {
        if( movie.genre === 'Adventure' && movie.title.toLowerCase().includes(searchMovieOnChange.toLowerCase()) ){
            return true
          }
       })
      return (
        <div className='genreMovieListParentDiv'>
          <br/>
          <div className='genreMovieListGridContainer'>
            { adventureMovies.map((movie) => (
              <MovieCard
              key={ movie.id }
              movie={ movie }
              />
              )) }
          </div>
        </div>
      )
    } else {
      return (
        <div className='genreMovieListParentDiv'>
          <h1> { userError } </h1>
        </div>
      )
    }
}
