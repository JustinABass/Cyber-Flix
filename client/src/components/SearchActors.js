import React, { useContext } from 'react'
import { ActorContext } from '../context/actor'

export default function SearchActors() {
  const { searchActors, setSearchActors } = useContext( ActorContext )
  
  return (
    <form>
    <input
    type='text'
    className='searchInput'
    placeholder='Search Actors...'
    value={ searchActors }
    onChange={ (e) => setSearchActors(e.target.value) }
    />
    </form>
    )
}
