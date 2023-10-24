import React, { useContext } from 'react'
import { MovieContext } from '../context/movie'

export default function DramaPage() {
    const {  renderDramaMovies } = useContext( MovieContext )
  return (
    <div className='genreMovieListParentDiv'>
      <br/>
      <div className='genreMovieListGridContainer'>
        { renderDramaMovies }
      </div>
    </div>
  )
}
