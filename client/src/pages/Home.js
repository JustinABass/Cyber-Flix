import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/user'
import { MovieContext } from '../context/movie'
import MovieCard from '../components/MovieCard'



export default function Home() {
    const { isAuthenticated, userError } = useContext( UserContext )
    const { movies, randomMovieTrailer, triggerRandomTrailer } = useContext( MovieContext )


    console.log(Array.isArray(movies))


         if( isAuthenticated ) {
            const randomMovieTrailer = Math.floor(Math.random() * movies.length)


            const popularMovies = movies.filter((movie) => movie.popular ? true : false)

            const newMovies = movies.filter((movie) => movie.new_release? true : false)


            const trendingMovies = movies.filter((movie) => movie.trending_now ? true : false)

            return (
                <div>
                <div className='homepageTrailerDiv'>
                    { triggerRandomTrailer ?
                        <iframe src={ movies[randomMovieTrailer]?.trailer } width="1425" height="720"  allow="fullscreen" title="A YouTube video" frameBorder="0" allowFullScreen></iframe>
                      :
                        <iframe src={ movies[randomMovieTrailer]?.trailer } width="1425" height="720"  allow="fullscreen" title="A YouTube video" frameBorder="0" allowFullScreen></iframe>
                    }
                </div>

                    <div className='homepageParentDiv'>
                    <br/>
                    <br/>
                    <div>
                        <div className='homepageHeaders'>
                            <h1> Check Out
                                <Link className='checkOutLinkh1' to={ `/movies/${movies[randomMovieTrailer]?.id}`}>
                                    <b className='checkOutLink2'>{ movies[randomMovieTrailer]?.title.toUpperCase() }</b>
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
                <div className='genreMovieListParentDiv' >
                    <h1> { userError } </h1>
                </div>
            )
         }
}
