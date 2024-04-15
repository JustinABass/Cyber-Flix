import React, {useState, useEffect} from "react";

const WatchlistContext = React.createContext()

function WatchlistProvider({ children }) {
    const [ archives, setArchives ] = useState( [] )
    console.log('arch', archives)

    useEffect(() => {
        fetch('/archives')
        .then((r) => r.json())
        .then((archive) => {
            setArchives(archive)
        })
    }, [])



    function addToUserWatchlist(newArch, user, setUser){
        fetch('/archives',{
            method: 'POST',
            headers: { 'Content-Type' : 'application/json'},
            body: JSON.stringify(newArch)
        })
        .then((r) => r.json())
        .then((newArchive) => {




            console.log('new archive movie id', newArchive.movie_id)

            const userMovieExist = user.unique_movies.find((archive) => archive.id === newArchive.movie_id)

            console.log('lll', newArchive)

            if( !userMovieExist ){
                const updateUser = {...user, unique_movies:[...user.unique_movies, newArchive.movie]}
                setUser( updateUser )
            };

        })
    }

    const handleAddToArchiveOnclick = (movieID, user, setUser) => {
        const newArchiveObj = {
            movie_id: movieID
        }

        addToUserWatchlist(newArchiveObj, user, setUser)
    }



    return(
        <WatchlistContext.Provider
        value={{  addToUserWatchlist, handleAddToArchiveOnclick }}>
            {children}
        </WatchlistContext.Provider>
    )
}


export { WatchlistContext, WatchlistProvider}