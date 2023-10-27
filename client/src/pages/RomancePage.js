import React, { useContext } from 'react'
import { MovieContext } from '../context/movie'


export default function RomancePage() {
    const { renderRomanceMovies } = useContext( MovieContext )
  return (
    <div className='genreMovieListParentDiv'>
      <br/>
    <div className='genreMovieListGridContainer'>
      { renderRomanceMovies }
    </div>
  </div>
  )
}
