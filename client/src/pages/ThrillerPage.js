import React, { useContext } from 'react'
import { UserContext } from '../context/user'
import { MovieContext } from '../context/movie'
import MovieCard from '../components/MovieCard'
import UnauthenticatedMessage from '../components/UnauthenticatedMessage'


export default function ThrillerPage() {
    const { isAuthenticated } = useContext( UserContext )
    const { thrillerMovies } = useContext( MovieContext )

    if( isAuthenticated ){
      return (
        <div className='genreMovieListParentDiv'>
          <br/>
          <div className='genreMovieListGridContainer'>
            { thrillerMovies.map((movie) => (
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
        <div className='userErrorParentDiv' >
          <center>
              <div className='userErrorChildDiv'>
                <UnauthenticatedMessage />
              </div>
          </center>
        </div>
      )
    }
}
