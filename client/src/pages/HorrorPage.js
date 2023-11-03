import React, { useContext } from 'react'
import { UserContext } from '../context/user'
import { MovieContext } from '../context/movie'
import MovieCard from '../components/MovieCard'

export default function HorrorPage() {
    const { isAuthenticated, userError} = useContext( UserContext )
    const { horrorMovies } = useContext( MovieContext )

    
    if( isAuthenticated ){
      return (
        <div className='genreMovieListParentDiv'>
          <br/>
          <div className='genreMovieListGridContainer'>
            {   horrorMovies.map((movie) => (
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
        <div className='genreMovieListParentDiv' >
          <div>
            <h1> { userError }</h1>
          </div>
        </div>
      )
    }
}
