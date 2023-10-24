import React, { useContext } from 'react'
import { MovieContext } from '../context/movie'

export default function ThrillerPage() {
    const { renderThrillerMovies } = useContext( MovieContext )
  return (
    <div className='genreMovieListParentDiv'>
      <br/>
      <div className='genreMovieListGridContainer'>
        { renderThrillerMovies }
      </div>
    </div>
  )
}
