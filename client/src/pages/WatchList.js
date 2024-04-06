import React, { useContext } from 'react'
import { UserContext } from '../context/user'
import { WatchlistContext } from '../context/watchlist';
import WListC from '../components/WListC';


export default function WatchList() {
  const { user, isAuthenticated } = useContext( UserContext )



  if(isAuthenticated){
    return (
      <div className='userProfileParentDiv'>
        <div>WatchList</div>

        {/* { user.unique_movies.length === 0 && (<div> No movies have been added to your watchlist</div>) } */}

        { user.archives.map((archive) => (
          <WListC
          key={ archive.id }
          savedArchive={ archive }
          />
        ))}


        {/* <div> */}
          {/* { user.unique_movies.map((item) => (
            <div key={item.id}>
              <img src={item.poster} hieght='250' width='200' />
            </div>
          ))} */}
        {/* </div> */}

      </div>
    )
  }
}
