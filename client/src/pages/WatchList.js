import React, { useContext } from 'react'
import { UserContext } from '../context/user'
import WListC from '../components/WListC';


export default function WatchList() {
  const { user, isAuthenticated } = useContext( UserContext )


  const moviesSavedToWatchList = () => {
    return user.unique_movies.map((movie) => (
      <WListC
      key={ movie.id }
      saved={ movie }
      />
    ))
};

  if(isAuthenticated){
    return (
      <div className='userProfileParentDiv'>
        <div>WatchList</div>

        { user.unique_movies.length === 0 && (<div> No movies have been added to your watchlist</div>) }
        {/* {moviesSavedToWatchList()} */}


        <div>
          { user.unique_movies.map((item) => (
            <div key={item.id}>
              <img src={item.poster} hieght='250' width='200' />
              <h2>{item.title}</h2>
            </div>
          ))}
        </div>

      </div>
    )
  }
}
