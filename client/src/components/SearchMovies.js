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
} else if (location.pathname === '/romance_movies'){
  return (
    <form>
        <input
        type='text'
        className='searchInput'
        placeholder='Search Romance Movies...'
        value={ searchMovieOnChange }
        onChange={ (e) => setSearchMovieOnChange(e.target.value)}
        />
    </form>
  )
} else if (location.pathname === '/drama_movies'){
  return (
    <form>
        <input
        type='text'
        className='searchInput'
        placeholder='Search Drama Movies...'
        value={ searchMovieOnChange }
        onChange={ (e) => setSearchMovieOnChange(e.target.value)}
        />
    </form>
  )
} else if (location.pathname === '/thriller_movies'){
  return (
    <form>
        <input
        type='text'
        className='searchInput'
        placeholder='Search Thriller Movies...'
        value={ searchMovieOnChange }
        onChange={ (e) => setSearchMovieOnChange(e.target.value)}
        />
    </form>
  )
} else if (location.pathname === '/adventure_movies'){
  return (
    <form>
        <input
        type='text'
        className='searchInput'
        placeholder='Search Adventure Movies...'
        value={ searchMovieOnChange }
        onChange={ (e) => setSearchMovieOnChange(e.target.value)}
        />
    </form>
  )
} else if (location.pathname === '/crime_movies'){
  return (
    <form>
        <input
        type='text'
        className='searchInput'
        placeholder='Search Crime Movies...'
        value={ searchMovieOnChange }
        onChange={ (e) => setSearchMovieOnChange(e.target.value)}
        />
    </form>
  )
} else if (location.pathname === '/horror_movies'){
  return (
    <form>
        <input
        type='text'
        className='searchInput'
        placeholder='Search Horror Movies...'
        value={ searchMovieOnChange }
        onChange={ (e) => setSearchMovieOnChange(e.target.value)}
        />
    </form>
  )
}
}
