import React, { useContext } from 'react'
import { UserContext } from '../context/user'
import { ActorContext } from '../context/actor'
import ActorsCard from '../components/ActorsCard'

export default function ActorsPage() {
  const { isAuthenticated, userError } = useContext( UserContext )
  const { actors, searchActors} = useContext( ActorContext )

  const filterActors = actors.filter((actor) => {
    if( actor.actor.toLowerCase().includes(searchActors.toLowerCase()) ){
        return true
    }
})

  if( isAuthenticated ){
    return (
      <div className='actorsPageParentDiv'>
        <br/>
         <div className='actorsGridContainer'>
          {  filterActors.map((actor) => (
             <ActorsCard
             key={ actor.id }
             actor={ actor }
             />
             )) }
        </div>
        <br/>
      </div>
    )
  } else {
    return (
      <div className='actorsPageParentDiv'>
        <h1> { userError } </h1>
      </div>
    )
  }
}
