import React, { useState, useContext } from 'react'
import { UserContext } from '../context/user'

export default function WListC({ savedArchive }) {
  const { user, setUser, isAuthenticated } = useContext( UserContext)


  const deleteSavedArchive = () => {
    fetch(`/movies/${savedArchive.id}`,{
        method: 'DELETE',
        headers: { 'Content-Type' : 'application/json'}
    })
    .then(() => {
      const filterUserArchives = user.unique_movies.filter((m) => m.id !== savedArchive.id)
      if(filterUserArchives){
        setUser({...user, unique_movies: filterUserArchives})
      }
    })
  }

if( isAuthenticated ){
  return (
          <div>
            <img src={ savedArchive.poster } height='250' width='200'/>
              <div>
                <button onClick={() => deleteSavedArchive()}>REMOVE</button>
              </div>
          </div>
  )
}
}
