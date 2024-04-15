import React, { useState, useContext } from 'react'
import { UserContext } from '../context/user'
import { WatchlistContext } from '../context/watchlist'

export default function WListC({ savedArchive }) {
  const { user, setUser, isAuthenticated } = useContext( UserContext)
  const { archives, setArchives } = useContext( WatchlistContext )

  const selectedArchive = user.archives?.find((a) => a.movie.id == savedArchive.id)
  console.log('selectedArchive', selectedArchive)


  // const fin = user.archives.find((archive) => archive.movie_id === savedArchive.id)
  // const {movieArchive, setMovieArchive} = useState(fin)
  // console.log('archive of movie', movieArchive)


  const deleteSavedArchive = () => {
    fetch(`/movies/${savedArchive.id}`,{
        method: 'DELETE',
        headers: { 'Content-Type' : 'application/json'}
    })
    .then(() =>{

      console.log('repeat?', savedArchive.id)
      // const u = user.archives.filter((archive) => archive.movie_id !== savedArchive.movie_id)

      // console.log('u', u)



      const filterUserArchives = user.unique_movies.filter((m) => m.id !== savedArchive.id)

      if(filterUserArchives){
        setUser({...user, unique_movies: filterUserArchives})
      }

      // const f = user.archives.filter((a) => a.movie_id !== fin?.movie_id)
      // if(f){
      //   setUser({...user, archives: f})
      // }

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
