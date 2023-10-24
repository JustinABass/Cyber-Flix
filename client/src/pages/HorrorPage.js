import React, { useContext } from 'react'
import { MovieContext } from '../context/movie'

export default function HorrorPage() {
    const { renderHorrorMovies } = useContext( MovieContext )
  return (
    <div className='genreMovieListParentDiv'>
      <br/>
      <div className='genreMovieListGridContainer'>
        { renderHorrorMovies }
      </div>
    </div>
  )
}
