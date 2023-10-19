import React from 'react'

export default function ActorMovies({ movie }) {
  return (
    <div>
        <img src={ movie.movie_poster } alt='moviePoster' height='280' width='240'/>
    </div>
  )
}
