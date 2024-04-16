import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/user'
import { MovieContext } from '../context/movie'
import { ArchiveContext } from '../context/archive'
import MovieCard from '../components/MovieCard'
import Signup from './Signup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'




export default function Home() {
    const { user, setUser, isAuthenticated } = useContext( UserContext )
    const { movies, popularMovies, newMovies, trendingMovies, isLoaded, toggleTrailerIndex, handlePrevTrailer, handleNextTrailer} = useContext( MovieContext )
    const { handleAddToArchiveOnclick } = useContext( ArchiveContext )
    const [ toggleAddToWatchList, setToggleAddToWatchList ] = useState( true )


    const selectedMovie = movies?.find((movie) => movie.id == movies[toggleTrailerIndex]?.id)

    console.log('this is a selected movie', selectedMovie)
         if( isAuthenticated ){
            return (
                <div>
                <div className='homepageTrailerDiv'>
                     <iframe src={movies[toggleTrailerIndex]?.trailer} width="1425" height="720"  allow="fullscreen" title="A YouTube video" frameBorder="0" allowFullScreen ></iframe>
                </div>

                    <div className='homepageParentDiv'>
                    <br/>
                    <br/>
                    <div>
                        <div className='homepageHeaders'>
                            <h1> Check Out
                                <Link className='checkOutLinkh1' to={`/movies/${movies[toggleTrailerIndex]?.id}` }>
                                    <b className='checkOutLink2'>{movies[toggleTrailerIndex]?.title }</b>
                                </Link>
                            </h1>
                            <div>
                                { selectedMovie ?
                                    <FontAwesomeIcon className='addToWatchListButton' onClick={ () => {
                                        handleAddToArchiveOnclick( movies[toggleTrailerIndex]?.id, user, setUser)
                                        if( selectedMovie ){
                                            setToggleAddToWatchList( false )
                                        }
                                    } } icon={(faPlus)} />
                                :
                                    <FontAwesomeIcon className='addToWatchListButton' onClick={ () => {
                                       if( selectedMovie ){
                                        setToggleAddToWatchList( true )
                                       }
                                    } } icon={faMinus} />
                                }
                            </div>
                            <h1>|</h1>
                            <button className='hompageNxtBttn' onClick={ handlePrevTrailer }> PREVIOUS TRAILER </button>
                            <button className='hompageNxtBttn' onClick={ handleNextTrailer}> NEXT TRAILER </button>
                        </div>
                    </div>
                    <br/>
                    <hr/>
                    <br/>
                    <br/>

                        <div className='homepageHeaders'>
                            <h1>Popular On CyberFlix</h1>
                        </div>
                        <section className='homepageSlideContainer'>
                            <span id="left-arrow" className="arrow">‹</span>
                            <span id="right-arrow" className="arrow">›</span>
                                <div className="slider" id="slider">
                                    { popularMovies.map((movie) => (
                                      <MovieCard
                                      key={ movie.id }
                                      movie={ movie }
                                      />
                                      )) }
                                </div>
                        </section>

                            <div className='homepageHeaders'>
                                <h1>New Releases On CyberFlix</h1>
                            </div>
                            <section className='homepageSlideContainer'>
                                <span id="left-arrow" className="arrow">‹</span>
                                <span id="right-arrow" className="arrow">›</span>
                                    <div className="slider" id="slider">
                                        { newMovies.map((movie) => (
                                          <MovieCard
                                          key={ movie.id }
                                          movie={ movie }
                                          />
                                          )) }
                                    </div>
                            </section>

                            <div className='homepageHeaders'>
                                <h1>Trending Now On CyberFlix</h1>
                            </div>
                            <section className='homepageSlideContainer'>
                                <span id="left-arrow" className="arrow">‹</span>
                                <span id="right-arrow" className="arrow">›</span>
                                    <div className="slider" id="slider">
                                        {  trendingMovies.map((movie) => (
                                            <MovieCard
                                            key={ movie.id }
                                            movie={ movie }
                                            />
                                            )) }
                                    </div>
                            </section>
                    </div>
                </div>
              )
         } else {
            return(
                <div className='homeSignupDiv'>
                    <Signup />
                    <h5> ALREADY HAVE AN ACCOUNT?</h5>
                    <Link to='/login' className='signupLoginLink'> Click to login </Link>
                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d3577343.639749697!2d4.97807490158145!3d47.98092094978232!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1701364324795!5m2!1sen!2sus" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                </div>
            )
         }
}
