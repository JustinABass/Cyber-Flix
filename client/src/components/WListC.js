import React, { useContext } from 'react'
import { UserContext } from '../context/user'
import { WatchlistContext } from '../context/watchlist'

export default function WListC({ savedArchive }) {

  const { user, setUser, isAuthenticated } = useContext( UserContext)
  const { archives, setArchives} = useContext( WatchlistContext )





  const deleteSavedMovie = () => {
    fetch(`/archives/${savedArchive.id}`,{
        method: 'DELETE',
        headers: { 'Content-Type' : 'application/json'}
    })
    .then(() =>{

      const filterUserMovies = user.archives.filter((archive) => archive.id !== savedArchive.id)
      if(filterUserMovies){
        setUser({...user, archives: filterUserMovies})
      }

    })
  };

if( isAuthenticated ){
  return (
    <div>
        <img src={ savedArchive.movie.poster }  height='250' width='200'/>
        <div>
          <button onClick={() => deleteSavedMovie()}>REMOVE</button>
        </div>
    </div>
  )
  }
}
