import React, {useState, useEffect} from "react";

const WatchlistContext = React.createContext()

function WatchlistProvider({ children }) {


    function addToUserWatchlist(newWatchListSave, user, setUser){
        fetch('/archives',{
            method: 'POST',
            headers: { 'Content-Type' : 'application/json'},
            body: JSON.stringify(newWatchListSave)
        })
        .then((r) => r.json())
        .then((newWatchListSave) => {
            const ObjExist = user.unique_movies.find((movie) => movie.id === newWatchListSave.movie_id)

            if( !ObjExist ){
                const updateUser = {...user, unique_movies:[...user.unique_movies, newWatchListSave.movie] }
                setUser(updateUser)
            };
        })
    }

    return(
        <WatchlistContext.Provider
        value={{  addToUserWatchlist }}>
            {children}
        </WatchlistContext.Provider>
    )
}


export { WatchlistContext, WatchlistProvider}