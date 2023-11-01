import React, { useContext } from 'react'
import { UserContext } from '../context/user'
import { MovieContext } from '../context/movie'
import MovieCard from '../components/MovieCard'

export default function HorrorPage() {
    const { isAuthenticated, userError} = useContext( UserContext )
    const { movies, searchMovieOnChange } = useContext( MovieContext )

    console.log('m', movies)



    if( isAuthenticated ){
      const horrorMovies = movies.filter((movie) => {
        if( movie.genre === 'Horror' && movie.title.toLowerCase().includes(searchMovieOnChange.toLowerCase()) ){
            return true
        }
    })
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
