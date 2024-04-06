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


            const archiveExist = archives.find((archive) => archive.movie_id === newArchive.movie_id)

            if( !archiveExist ){
                const updateArchive = [...archives, newArchive]
                setArchives( updateArchive )
            }
            
            const userArchiveExist = user.archives.find((archive) => archive.movie_id === newArchive.movie_id)
            console.log('exist', archiveExist)

            if( !userArchiveExist ){
                const updateUser = {...user, archives:[...user.archives, newArchive] }
                setUser( updateUser )
            };

        })
    }



    return(
        <WatchlistContext.Provider
        value={{  addToUserWatchlist, archives, setArchives }}>
            {children}
        </WatchlistContext.Provider>
    )
}


export { WatchlistContext, WatchlistProvider}