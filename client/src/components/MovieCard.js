import React from 'react'

export default function MovieCard( { movie } ) {
  return (
    <div className='homepageSlideImg'>
        <br/>
        <img src={movie.poster} alt='moviePoster' height='350' width='300'/>
    </div>
  )
}
