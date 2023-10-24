import React, { useContext } from 'react'
import { MovieContext } from '../context/movie'

export default function CrimePage() {
  const { renderCrimeMovies } = useContext( MovieContext )
  return (
    <div className='genreMovieListParentDiv'>
      <br/>
      <div className='genreMovieListGridContainer'>
        { renderCrimeMovies }
      </div>
    </div>
  )
}
