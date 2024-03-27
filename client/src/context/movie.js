import React, { useState, useEffect, useRef} from "react";


const MovieContext = React.createContext()

function MovieProvider({ children }) {
    const [ movies, setMovies ] = useState( [] )
    const [toggleTrailerIndex, setToggleTrailerIndex ] = useState(0)
    const [trailerShuffleObj, setTrailerShuffleObj] = useState({})
    // const [isLoaded, setIsLoaded] = useState(false)
    const [ triggerTrailerNavShuffle, setTriggerTrailerNavShuffle] = useState( null )
    const [ showSearchMovieInput, setShowSearchMovieInput ] = useState( true )
    const [ searchMovieOnChange, setSearchMovieOnChange ] = useState( '' )



    useEffect(() => {
        fetch('/movies')
        .then((r) => r.json())
        .then((movies) => {
            setMovies( movies )
        })
    }, []);


    function navTrailerShuffle(){
        fetch('/movie_shuffle')
        .then((r) => r.json())
        .then((sM) => {
            sM.map((m) => {
                setTrailerShuffleObj({
                    id: m.id,
                    trailer: m.trailer,
                    title: m.title,
                    poster: m.poster
                })
            })
            setTriggerTrailerNavShuffle( true )
        })
    }



    function handlePrevTrailer(){
        if(toggleTrailerIndex > 0){
            setToggleTrailerIndex(toggleTrailerIndex - 1)
        }
        setTriggerTrailerNavShuffle( false )
    }

    function handleNextTrailer(){
        if(toggleTrailerIndex < movies.length - 1){
            setToggleTrailerIndex(toggleTrailerIndex + 1)
        }
        setTriggerTrailerNavShuffle( false )
    }



    //filter popular movies
    const popularMovies = movies.filter((movie) => movie.popular ? true : false)

    //filter new movies
    const newMovies = movies.filter((movie) => movie.new_release? true : false)

    //filter trending movies
    const trendingMovies = movies.filter((movie) => movie.trending_now ? true : false)

    //filter thrill movies
    const thrillerMovies = movies.filter((movie) => {
        if( movie.genre === 'Thriller' && movie.title.toLowerCase().includes(searchMovieOnChange.toLowerCase()) ){
            return true
        }
    })

    //filter romance movies
    const romanceMovies = movies.filter((movie) => {
        if( movie.genre === 'Romance' && movie.title.toLowerCase().includes(searchMovieOnChange.toLowerCase()) ){
            return true
        }
    })

    //filter horror movies
    const horrorMovies = movies.filter((movie) => {
        if( movie.genre === 'Horror' && movie.title.toLowerCase().includes(searchMovieOnChange.toLowerCase()) ){
            return true
        }
    })

    //filter drama movies
    const dramaMovies = movies.filter((movie) => {
        if ( movie.genre === 'Drama' && movie.title.toLowerCase().includes(searchMovieOnChange.toLowerCase()) ){
            return true
        }
    })

    //filter crime movies
    const crimeMovies = movies.filter((movie) => {
        if( movie.genre === 'Crime' && movie.title.toLowerCase().includes(searchMovieOnChange.toLowerCase()) ){
            return true
        }
    })

    //filter comedy movies
    const comedyMovies = movies.filter((movie) => {
        if( movie.genre === 'Comedy' && movie.title.toLowerCase().includes(searchMovieOnChange.toLowerCase()) ){
            return true
        }
      })

      //filter adventure movies
      const adventureMovies = movies.filter((movie) => {
        if( movie.genre === 'Adventure' && movie.title.toLowerCase().includes(searchMovieOnChange.toLowerCase()) ){
            return true
          }
       })

       //filter action movies
       const actionMovies = movies.filter((movie) => {
        if( movie.genre === 'Action' && movie.title.toLowerCase().includes(searchMovieOnChange.toLowerCase()) ){
            return true
         }
      })

    return(
        <MovieContext.Provider
        value={{ movies, setMovies, showSearchMovieInput, searchMovieOnChange, setSearchMovieOnChange,
            popularMovies, newMovies, trendingMovies, thrillerMovies, romanceMovies, horrorMovies, dramaMovies,
            crimeMovies, comedyMovies, adventureMovies, actionMovies, toggleTrailerIndex, handlePrevTrailer,
            handleNextTrailer, navTrailerShuffle, triggerTrailerNavShuffle, trailerShuffleObj
             }}>
            {children}
        </MovieContext.Provider>
    )
}

export { MovieContext, MovieProvider}
