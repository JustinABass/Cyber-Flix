import React, { useContext } from 'react'
import { UserContext } from '../context/user'
import { ListContext } from '../context/list'

export default function WatchList() {
  const { user, isAuthenticated } = useContext( UserContext )
  const { watchListItms } = useContext( ListContext )


  if(isAuthenticated){
    return (
      <div className='userProfileParentDiv'>
        <div>WatchList</div>

        { watchListItms.length === 0 && (<div> No movies have been added to your watchlist</div>) }

        <div>
          { watchListItms.map((item) => (
            <div key={item.id}>
              <img src={item.poster} hieght='250' width='200' />
            </div>
          ))}
        </div>

      </div>
    )
  }
}
