import React, { useState, useEffect, useRef} from "react";


const MovieContext = React.createContext()

function MovieProvider({ children }) {
    const [ movies, setMovies ] = useState( [] )
    const [ movieShuffle, setMovieShuffle ] = useState ( {
        id: null,
        trailer: '',
        title: '',
    } )
    const [ triggerRandomTrailer, setTriggerRandomTrailer ] = useState( true )
    const [ showSearchMovieInput, setShowSearchMovieInput ] = useState( true )
    const [ searchMovieOnChange, setSearchMovieOnChange ] = useState( '' )



    console.log('test2', movieShuffle)



    useEffect(() => {
        fetch('/movies')
        .then((r) => r.json())
        .then((movies) => {
            setMovies( movies )
        })
    }, []);

    useEffect(() => {
        fetch('/movie_shuffle')
        .then((r) => r.json())
        .then((randomMovie) => {
            randomMovie.map((m) => {
                return setMovieShuffle({
                    id: m.id,
                    trailer: m.trailer,
                    title: m.title
                })
                });
        })
    }, [triggerRandomTrailer])


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
            triggerRandomTrailer, setTriggerRandomTrailer, popularMovies, newMovies,
            trendingMovies, thrillerMovies, romanceMovies, horrorMovies, dramaMovies, crimeMovies, comedyMovies,
            adventureMovies, actionMovies, movieShuffle

            }}>
            {children}
        </MovieContext.Provider>
    )
}

export { MovieContext, MovieProvider}
