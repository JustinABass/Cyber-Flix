import React from 'react'

export default function ActorsCard( {actor} ) {
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
