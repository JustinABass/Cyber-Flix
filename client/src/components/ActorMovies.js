import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function ActorMovies({ movie }) {
  return (
    <div>
      <Link to={ `/movies/${ movie.movie_id }` }>
        <img src={ movie.movie_poster } alt='moviePoster' height='280' width='40'/>
      </Link>
    </div>

  )
}
