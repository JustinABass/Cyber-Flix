import React from 'react'

export default function ActorCard( {actor} ) {
  return (
    <div className='actorGridImgs'>
      <img src={ actor.image } alt='actorImage'/>
       <div className='actorGridImgsFadeBox'>
          <div className='actorGridImgs text'>
            { actor.actor }
          </div>
       </div>
    </div>
  )
}
