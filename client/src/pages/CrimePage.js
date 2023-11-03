import React, { useContext } from 'react'
import { UserContext } from '../context/user'
import { MovieContext } from '../context/movie'
import MovieCard from '../components/MovieCard'

export default function CrimePage() {
  const { isAuthenticated, userError } = useContext( UserContext )
  const { crimeMovies } = useContext( MovieContext )

  if ( isAuthenticated ){
    return (
      <div className='genreMovieListParentDiv'>
        <br/>
        <div className='genreMovieListGridContainer'>
          { crimeMovies.map((movie) => (
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
