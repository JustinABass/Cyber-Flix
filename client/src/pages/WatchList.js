import React, { useContext } from 'react'
import { UserContext } from '../context/user'
import WListCard from '../components/WListCard';


export default function WatchList() {
  const { user, isAuthenticated } = useContext( UserContext )



  if(isAuthenticated){
    return (
      <div className='userProfileParentDiv'>
        <div>WatchList</div>

        { user.lists.length === 0 && (<div> No movies have been added to your watchlist</div>) }

        { user.lists.map((movieWList) => (
          <WListCard
          key={movieWList.id}
          list={movieWList}
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
