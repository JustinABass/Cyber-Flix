import React, { useContext } from 'react'
import { UserContext } from '../context/user'

export default function WListC({ savedMovie }) {
  const { user, setUser, isAuthenticated } = useContext( UserContext)


  const deleteSavedArchive = () => {
    fetch(`/movies/${savedMovie.id}`,{
        method: 'DELETE',
        headers: { 'Content-Type' : 'application/json'}
    })
    .then(() => {
      const filterUserUniqueMovies = user.unique_movies.filter((movie) => movie.id !== savedMovie.id)
      if(filterUserUniqueMovies){
        setUser( {...user, unique_movies: filterUserUniqueMovies} )
      }
    })
  }

if( isAuthenticated ){
  return (
          <div>
            <img src={ savedMovie.poster } height='250' width='200'/>
              <div>
                <button onClick={() => deleteSavedArchive()}>REMOVE</button>
              </div>
          </div>
  )
}
}
