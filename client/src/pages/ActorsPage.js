import React, { useContext } from 'react'
import { UserContext } from '../context/user'
import { ActorContext } from '../context/actor'
import ActorsCard from '../components/ActorsCard'
import UnauthenticatedMessage from '../components/UnauthenticatedMessage'

export default function ActorsPage() {
  const { isAuthenticated } = useContext( UserContext )
  const { filterActors } = useContext( ActorContext )

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
      <div className='userErrorParentDiv' >
        <center>
            <div className='userErrorChildDiv'>
              <UnauthenticatedMessage />
            </div>
        </center>
    </div>
    )
  }
}
