import React, { useContext } from 'react'
import { ActorContext } from '../context/actor';
import { useParams } from 'react-router-dom';
import ActorMovies from '../components/ActorMovies';

export default function ActorPage() {
    const { actors } = useContext( ActorContext )
    const { id } = useParams()

    const selectedActor = actors.find((actor) => actor.id == id)
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
    <div className='actorPageParentDiv'>
        <div className='actorPageChildDiv'>
            <br/>
            <div className='actorPageChildImgDiv'>
                <img src={ selectedActor.image } alt='actorImage'/>
            </div>
            <br/>
            <div className='selectedMovieInfoChildTextDiv'>
                <h1>{ selectedActor.actor }</h1>
            </div>
        </div>

        {selectedActorMovies}
    </div>
  )
}
