import React from 'react'
import { Link } from 'react-router-dom'

export default function MovieCard( { movie } ) {
  return (
    <div className='homepageSlideImg'>
        <br/>
        <Link to={`/movies/${ movie.id }`}>
        <img src={movie.poster} alt='moviePoster'/>
        </Link>
    </div>
  )
}
