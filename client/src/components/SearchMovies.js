import React, { useContext } from 'react'
import { MovieContext } from '../context/movie'

export default function SearchMovies() {
const { searchMovieOnChange, setSearchMovieOnChange } = useContext( MovieContext )

  return (
    <form>
        <input
        type='text'
        className='searchInput'
        placeholder='Search Movies...'
        value={ searchMovieOnChange }
        onChange={ (e) => setSearchMovieOnChange(e.target.value)}
        />
    </form>
  )
}
