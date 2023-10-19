import React from 'react'

export default function ActorsCard( {actor} ) {
  return (
    <div>
      <img src={ actor.image } alt='actorImage' height='250' width='200'/>
      <h3>{ actor.actor }</h3>
    </div>
  )
}
