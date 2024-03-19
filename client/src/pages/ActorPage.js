import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { UserContext } from '../context/user'
import { ActorContext } from '../context/actor';
import ActorMovies from '../components/ActorMovies';
import UnauthenticatedMessage from '../components/UnauthenticatedMessage';

export default function ActorPage() {
    const { isAuthenticated } = useContext( UserContext )
    const { actors } = useContext( ActorContext )
    const { actor_id } = useParams()


    if( isAuthenticated ){
        const selectedActor = actors.find((actor) => actor.id == actor_id)
        if(!selectedActor){
            return <h1><b>LOADING...</b></h1>
        }

        console.log('acotors', actors)


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
                        { selectedActor.connections.map((movie) => (
                          <ActorMovies
                          key={ movie.id }
                          movie={ movie }
                          />
                          ))}
                    </div>
                    <br/>
                </div>
            </div>
            </>
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
