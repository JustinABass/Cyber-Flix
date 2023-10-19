import React from 'react'

export default function MovieCast({ cast }) {
  return (
    <div className='movieCastParentDiv'>
        <div className='movieCastImgChildDiv'>
            <img src={ cast.actor_image } alt='actorImg'/>
            <div className='movieCastImgTextDiv'>
                <h6>{ cast.actor.toUpperCase()}</h6>
            </div>
        </div>
    </div>
  )
}
