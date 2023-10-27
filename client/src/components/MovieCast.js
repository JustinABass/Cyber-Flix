import React from 'react'
import { Link } from 'react-router-dom'

export default function MovieCast({ cast }) {
  return (
    <div className='movieCastParentDiv'>
      <Link className='castLink' to={`/actors/${cast.actor_id}`}>
        <div className='movieCastImgChildDiv'>
            <img src={ cast.actor_image } alt='actorImg'/>
            <div className='movieCastImgTextDiv'>
                <h6>{ cast.actor.toUpperCase()}</h6>
            </div>
        </div>
        </Link>
    </div>
  )
}
