import React, { useContext } from 'react'
import { ActorContext } from '../context/actor'

export default function ActorsPage() {

  const { renderActors } = useContext( ActorContext )
  return (
    <div className='actorsPageParentDiv'>
      <br/>
       <div className='actorsGridContainer'>
        { renderActors }
      </div>
      <br/>
    </div>
  )
}
