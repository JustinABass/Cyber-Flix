import React, { useContext } from 'react'
import { MovieContext } from '../context/movie'

export default function AdventurePage() {
    const { renderAdventureMovies } = useContext( MovieContext )
  return (
    <div className='genreMovieListParentDiv'>
      <br/>
      <div className='genreMovieListGridContainer'>
        { renderAdventureMovies }
      </div>
    </div>
  )
}
