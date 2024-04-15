import React, {useState, useEffect} from "react";

const ArchiveContext = React.createContext()

function ArchiveProvider({ children }) {
    const [ archives, setArchives ] = useState( [] )
    console.log('arch', archives)

    useEffect(() => {
        fetch('/archives')
        .then((r) => r.json())
        .then((archive) => {
            setArchives(archive)
        })
    }, [])



    function addToUserArchive(newArch, user, setUser){
        fetch('/archives',{
            method: 'POST',
            headers: { 'Content-Type' : 'application/json'},
            body: JSON.stringify(newArch)
        })
        .then((r) => r.json())
        .then((newArchive) => {

            const userMovieExist = user.unique_movies.find((archive) => archive.id === newArchive.movie_id)

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

        addToUserArchive(newArchiveObj, user, setUser)
    }



    return(
        <ArchiveContext.Provider
        value={{  addToUserArchive, handleAddToArchiveOnclick }}>
            {children}
        </ArchiveContext.Provider>
    )
}


export { ArchiveContext, ArchiveProvider}