import React, { useContext } from 'react'
import { ActorContext } from '../context/actor';
import { useParams } from 'react-router-dom';
import ActorMovies from '../components/ActorMovies';

export default function ActorPage() {
    const { actors } = useContext( ActorContext )
    const { actor_id } = useParams()

    const selectedActor = actors.find((actor) => actor.id == actor_id)
    if(!selectedActor){
        return <h1><b>LOADING...</b></h1>
    }

    const selectedActorMovies = selectedActor.connections.map((movie) => (
        <ActorMovies
        key={ movie.id }
        movie={ movie }
        />
    ))
  return (
    <>
    <div className='actorPageParentDiv'>
        <div className='actorPageChildDiv'>

            <div className='actorPageChildImgDiv'>
                <img src={ selectedActor.image } alt='actorImage' height='480' width='440'/>
            </div>
        </div>

        <div className='actorPageChildDiv'>
            <br/>
            <div className='actorPageNameDiv'>
                <h1> Movies Starring </h1>
            </div>
            <div className='actorPageNameDivTwo'>
                <h1> { selectedActor.actor }</h1>
                <br/>
                <hr/>
            </div>
        </div>
    </div>

    <div className='actorPageParentDivTwo'>
        <div className='actorPageChildDivTwo'>
            <div className='actorPagePostersDiv'>
                { selectedActorMovies}
            </div>
            <br/>
        </div>
    </div>
    </>
  )
}
