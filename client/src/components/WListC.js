import React, { useContext } from 'react'
import { UserContext } from '../context/user'
import { ArchiveContext } from '../context/archive'

export default function WListC({ savedMovie }) {
  const { user, setUser, isAuthenticated } = useContext( UserContext)
  const { deleteSavedArchive } = useContext( ArchiveContext )


if( isAuthenticated ){
  return (
          <div>
            <img src={ savedMovie.poster } height='250' width='200'/>
              <div>
                <button onClick={() => deleteSavedArchive( savedMovie.id, user, setUser )}>REMOVE</button>
              </div>
          </div>
  )
}
}
