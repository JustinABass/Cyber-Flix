import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function ActorsCard( {actor} ) {
  return (
    <Link to={ `/actors/${ actor.id }`}>
      <div className='actorGridImgs'>
        <img src={ actor.image } alt='actorImage'/>
        <div className='actorGridImgsFadeBox'>
            <div className='actorGridImgs text'>
              { actor.actor }
            </div>
        </div>
      </div>
    </Link>
  )
}
