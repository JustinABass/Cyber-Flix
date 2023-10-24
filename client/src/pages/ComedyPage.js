import React, { useContext } from 'react'
import { MovieContext } from '../context/movie'

export default function ComedyPage() {
    const { renderComedyMovies } = useContext( MovieContext )
  return (
    <div className='genreMovieListParentDiv'>
      <br/>
      <div className='genreMovieListGridContainer'>
        { renderComedyMovies }
      </div>
    </div>
  )
}
