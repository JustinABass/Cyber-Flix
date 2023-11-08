import React, { useContext } from 'react'
import { ActorContext } from '../context/actor'

export default function SearchActors() {
  const { searchActorsOnChange, setSearchActorsOnChange } = useContext( ActorContext )

  return (
    <form>
    <input
    type='text'
    className='searchInput'
    placeholder='Search Actors...'
    value={ searchActorsOnChange }
    onChange={ (e) => setSearchActorsOnChange(e.target.value) }
    />
    </form>
    )
}
