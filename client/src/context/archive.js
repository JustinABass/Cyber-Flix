import React, {useState, useEffect} from "react";
import swal from 'sweetalert';


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
                swal(`${newArchive.movie.title} has been added to your watchlist!`);
            }
        })
    }


    const handleAddToArchiveOnclick = (movieID, user, setUser) => {
        const newArchiveObj = {
            movie_id: movieID
        }

        addToUserArchive(newArchiveObj, user, setUser)
    }


    const deleteSavedArchive = (savedMovie, user, setUser) => {
        fetch(`/movies/${savedMovie}`,{
            method: 'DELETE',
            headers: { 'Content-Type' : 'application/json'}
        })
        .then(() => {
          const filterUserUniqueMovies = user.unique_movies.filter((movie) => movie.id !== savedMovie)
          if(filterUserUniqueMovies){
            setUser( {...user, unique_movies: filterUserUniqueMovies} )
            swal('The selected movie has been removed from your watchlist.');
          }
        })
      }



    return(
        <ArchiveContext.Provider
        value={{  addToUserArchive, handleAddToArchiveOnclick, deleteSavedArchive }}>
            {children}
        </ArchiveContext.Provider>
    )
}


export { ArchiveContext, ArchiveProvider}