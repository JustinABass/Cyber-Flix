import React, { useContext } from 'react'
import { MovieContext } from '../context/movie'
import { useLocation } from 'react-router-dom'

export default function SearchMovies() {
const { searchMovieOnChange, setSearchMovieOnChange } = useContext( MovieContext )
const location = useLocation()

if( location.pathname === '/action_movies' ){
  return (
    <form>
        <input
        type='text'
        className='searchInput'
        placeholder='Search Action Movies...'
        value={ searchMovieOnChange }
        onChange={ (e) => setSearchMovieOnChange(e.target.value)}
        />
    </form>
  )
} else if ( location.pathname === '/comedy_movies'){
  return (
    <form>
        <input
        type='text'
        className='searchInput'
        placeholder='Search Comedy Movies...'
        value={ searchMovieOnChange }
        onChange={ (e) => setSearchMovieOnChange(e.target.value)}
        />
    </form>
  )
}
}
