import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/user'
import { MovieContext } from '../context/movie'
import MovieCard from '../components/MovieCard'
import Signup from './Signup'



export default function Home() {
    const { isAuthenticated } = useContext( UserContext )
    const { movies, randomMovieTrailer, triggerRandomTrailer, popularMovies, newMovies, trendingMovies, randomTest, random, toggleR, random2, randomTrailer, toggleR2, handleLoadedMetadata, trailerDuration } = useContext( MovieContext )


         if( isAuthenticated ){
            return (
                <div>
                <div className='homepageTrailerDiv'>
                    {/* { toggleR || toggleR2 ?
                        <iframe src={ random } width="1425" height="720"  allow="fullscreen" title="A YouTube video" frameBorder="0" allowFullScreen></iframe>
                      :
                        <iframe src={ random2 } width="1425" height="720"  allow="fullscreen" title="A YouTube video" frameBorder="0" allowFullScreen></iframe>
                    } */}
                     <iframe src={random} width="1425" height="720"  allow="fullscreen" title="A YouTube video" frameBorder="0" allowFullScreen ref={trailerDuration} onLoadedMetadata={handleLoadedMetadata()}></iframe>

                </div>

                    <div className='homepageParentDiv'>
                    <br/>
                    <br/>
                    <div>
                        <div className='homepageHeaders'>
                            <h1> Check Out
                                <Link className='checkOutLinkh1' to={ `/movies/${movies[randomMovieTrailer]?.id}`}>
                                    <b className='checkOutLink2'> { movies[randomMovieTrailer]?.title } </b>
                                </Link>
                            </h1>
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
