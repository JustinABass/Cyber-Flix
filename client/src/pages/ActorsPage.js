import React, { useContext } from 'react'
import { ActorContext } from '../context/actor'

export default function ActorsPage() {

  const { actors, renderActors } = useContext( ActorContext )
  return (
    <div>
      { renderActors }
    </div>
  )
}
