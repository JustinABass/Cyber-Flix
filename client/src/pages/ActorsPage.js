import React, { useContext } from 'react'
import { ActorContext } from '../context/actor'

export default function ActorsPage() {

  const { renderActors } = useContext( ActorContext )
  return (
    <div className='actorsPageParentDiv'>
      <br/>
       <div className='actorGridContainer'>
        { renderActors }
      </div>
      <br/>
    </div>
  )
}
