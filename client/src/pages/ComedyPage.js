import React, { useContext } from 'react'
import { UserContext } from '../context/user'
import { MovieContext } from '../context/movie'
import MovieCard from '../components/MovieCard'

export default function ComedyPage() {
    const { isAuthenticated, userError } = useContext( UserContext )
    const { comedyMovies } = useContext( MovieContext )

    if( isAuthenticated ){
      return (
        <div className='genreMovieListParentDiv'>
          <br/>
          <div className='genreMovieListGridContainer'>
            { comedyMovies.map((movie) => (
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
