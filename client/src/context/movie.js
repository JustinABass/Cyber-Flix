import React, { useState, useEffect, useRef} from "react";
// import { getVideoDuration } from 'react-native-video-duration';

const MovieContext = React.createContext()

function MovieProvider({ children }) {
    const [ movies, setMovies ] = useState( [] )
    const [ random, setRandom ] = useState ( '' )
    const [d, setD ] = useState('')
    const [toggleR, setToggleR ] = useState( true )
    const [ random2, setRandom2 ] = useState ( '' )
    const [toggleR2, setToggleR2 ] = useState( false )
    const [ triggerRandomTrailer, setTriggerRandomTrailer ] = useState( true )
    const [ showSearchMovieInput, setShowSearchMovieInput ] = useState( true )
    const [ searchMovieOnChange, setSearchMovieOnChange ] = useState( '' )
    let trailerDuration = useRef(null)

    console.log('test2', d)



    useEffect(() => {
        fetch('/movies')
        .then((r) => r.json())
        .then((movies) => {
            setMovies( movies )
        })
    }, []);

    useEffect(() => {
        fetch('/trailer')
        .then((r) => r.json())
        .then((randomMovie) => {
            let randomM = randomMovie.map((m) => {
                return m.trailer
            })
            setRandom(randomM)

            // let randomMDuration = getVideoDuration(randomM)
            // setD(randomMDuration)
        })
    }, [triggerRandomTrailer])

    const handleLoadedMetadata = () => {
        const trailer = trailerDuration.current;
        if (!trailer) return;
        setD(trailer.duration)
      };

    // useEffect(() => {
    //     let randomMovieTrailer = Math.floor(Math.random() * movies.length)
    //     setRandom(movies[randomMovieTrailer]?.trailer)
    //     setToggleR2( false )
    //     // setTimeout(() => setRandom(movies[randomMovieTrailer]?.trailer), movies[randomMovieTrailer]?.trailer.duration)
    //     }, [toggleR])

        // useEffect(() => {

        //         let randomMovieTrailer = Math.floor(Math.random() * movies.length)
        //         if( toggleR ){
        //             setRandom(movies[randomMovieTrailer]?.trailer)
        //             setToggleR( false )
        //         } else if( !toggleR ){
        //             setRandom2(movies[randomMovieTrailer]?.trailer)
        //         }

        //     // let randomMovieTrailer = Math.floor(Math.random() * movies.length)
        //     // let randomMovieTrailer2 = Math.floor(Math.random() * movies.length)
        //     }, [])


            // let randomTrailer = () => {
            //     let randomMovieTrailer = Math.floor(Math.random() * movies.length)
            //     if( toggleR ){
            //         setToggleR(false)
            //         setRandom(movies[randomMovieTrailer]?.trailer)
            //         return random
            //     } else if ( !toggleR )
            //     setToggleR2(false)
            //     setRandom2(movies[randomMovieTrailer]?.trailer)
            //     return random2
            // }





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
        return movie
    })

    //filter romance movies
    const romanceMovies = movies.filter((movie) => {
        if( movie.genre === 'Romance' && movie.title.toLowerCase().includes(searchMovieOnChange.toLowerCase()) ){
            return true
        }
        return movie
    })

    //filter horror movies
    const horrorMovies = movies.filter((movie) => {
        if( movie.genre === 'Horror' && movie.title.toLowerCase().includes(searchMovieOnChange.toLowerCase()) ){
            return true
        }
        return movie
    })

    //filter drama movies
    const dramaMovies = movies.filter((movie) => {
        if ( movie.genre === 'Drama' && movie.title.toLowerCase().includes(searchMovieOnChange.toLowerCase()) ){
            return true
        }
        return movie
    })

    //filter crime movies
    const crimeMovies = movies.filter((movie) => {
        if( movie.genre === 'Crime' && movie.title.toLowerCase().includes(searchMovieOnChange.toLowerCase()) ){
            return true
        }
        return movie
    })

    //filter comedy movies
    const comedyMovies = movies.filter((movie) => {
        if( movie.genre === 'Comedy' && movie.title.toLowerCase().includes(searchMovieOnChange.toLowerCase()) ){
            return true
        }
        return movie
      })

      //filter adventure movies
      const adventureMovies = movies.filter((movie) => {
        if( movie.genre === 'Adventure' && movie.title.toLowerCase().includes(searchMovieOnChange.toLowerCase()) ){
            return true
          }
          return movie
       })

       //filter action movies
       const actionMovies = movies.filter((movie) => {
        if( movie.genre === 'Action' && movie.title.toLowerCase().includes(searchMovieOnChange.toLowerCase()) ){
            return true
         }
         return movie
      })

    return(
        <MovieContext.Provider
        value={{ movies, setMovies, showSearchMovieInput, searchMovieOnChange, setSearchMovieOnChange,
            triggerRandomTrailer, setTriggerRandomTrailer, popularMovies, newMovies,
            trendingMovies, thrillerMovies, romanceMovies, horrorMovies, dramaMovies, crimeMovies, comedyMovies,
            adventureMovies, actionMovies, random, toggleR, toggleR2, random2, handleLoadedMetadata, trailerDuration

            }}>
            {children}
        </MovieContext.Provider>
    )
}

export { MovieContext, MovieProvider}
