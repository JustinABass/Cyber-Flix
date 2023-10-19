import React, { useContext } from 'react'
import { MovieContext } from '../context/movie'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'


export default function Home() {
    const {
        movies,
        randomMovieTrailer,
        renderPopularMovies,
        renderNewMovies,
        renderTrendingMovies,
        renderActionMovies,
        renderComedyMovies,
        renderRomanceMovies,
        renderDramaMovies,
        renderThrillerMovies,
        renderAdventureMovies,
        renderCrimeMovies,
        renderHorrorMovies } = useContext( MovieContext )


  return (
    <>
    <div className='homepageTrailerDiv'>
        <iframe src={ movies[randomMovieTrailer]?.trailer } width="1425" height="720"  allow="fullscreen" title="A YouTube video" frameBorder="0" allowFullScreen></iframe>
    </div>

        <div className='homepageParentDiv'>
        <br/>
        <br/>
        <div>
            <div className='homepageHeaders'>
                <h1> Check Out<Link className='checkOutLinkh1' to={ `/movies/${movies[randomMovieTrailer]?.id}`}>
                    <b className='checkOutLink2'>{ movies[randomMovieTrailer]?.title.toUpperCase() }</b></Link>
                </h1>
            </div>
        </div>
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
                        { renderPopularMovies }
                    </div>
            </section>

                <div className='homepageHeaders'>
                    <h1>New Releases On CyberFlix</h1>
                </div>
                <section className='homepageSlideContainer'>
                    <span id="left-arrow" className="arrow">‹</span>
                    <span id="right-arrow" className="arrow">›</span>
                        <div className="slider" id="slider">
                            { renderNewMovies }
                        </div>
                </section>

                <div className='homepageHeaders'>
                    <h1>Trending Now On CyberFlix</h1>
                </div>
                <section className='homepageSlideContainer'>
                    <span id="left-arrow" className="arrow">‹</span>
                    <span id="right-arrow" className="arrow">›</span>
                        <div className="slider" id="slider">
                            { renderTrendingMovies }
                        </div>
                </section>

                {/* <div className='homepageHeaders'>
                        <h1>Action</h1>
                    </div>
                    <section className='homepageSlideContainer'>
                        <span id="left-arrow" className="arrow">‹</span>
                        <span id="right-arrow" className="arrow">›</span>
                            <div className="slider" id="slider">
                                { renderActionMovies }
                            </div>
                    </section>

                <div className='homepageHeaders'>
                        <h1>Comedy</h1>
                    </div>
                    <section className='homepageSlideContainer'>
                        <span id="left-arrow" className="arrow">‹</span>
                        <span id="right-arrow" className="arrow">›</span>
                            <div className="slider" id="slider">
                                { renderComedyMovies }
                            </div>
                    </section>

                    <div className='homepageHeaders'>
                        <h1>Romance</h1>
                    </div>
                    <section className='homepageSlideContainer'>
                        <span id="left-arrow" className="arrow">‹</span>
                        <span id="right-arrow" className="arrow">›</span>
                            <div className="slider" id="slider">
                                { renderRomanceMovies }
                            </div>
                    </section>

                    <div className='homepageHeaders'>
                        <h1>Drama</h1>
                    </div>
                    <section className='homepageSlideContainer'>
                        <span id="left-arrow" className="arrow">‹</span>
                        <span id="right-arrow" className="arrow">›</span>
                            <div className="slider" id="slider">
                                { renderDramaMovies }
                            </div>
                    </section>

                    <div className='homepageHeaders'>
                        <h1>Adventure</h1>
                    </div>
                    <section className='homepageSlideContainer'>
                        <span id="left-arrow" className="arrow">‹</span>
                        <span id="right-arrow" className="arrow">›</span>
                            <div className="slider" id="slider">
                                { renderAdventureMovies }
                            </div>
                    </section>

                    <div className='homepageHeaders'>
                        <h1>Thriller</h1>
                    </div>
                    <section className='homepageSlideContainer'>
                        <span id="left-arrow" className="arrow">‹</span>
                        <span id="right-arrow" className="arrow">›</span>
                            <div className="slider" id="slider">
                                { renderThrillerMovies }
                            </div>
                    </section>

                    <div className='homepageHeaders'>
                        <h1>Crime</h1>
                    </div>
                    <section className='homepageSlideContainer'>
                        <span id="left-arrow" className="arrow">‹</span>
                        <span id="right-arrow" className="arrow">›</span>
                            <div className="slider" id="slider">
                                { renderCrimeMovies }
                            </div>
                    </section>

                    <div className='homepageHeaders'>
                        <h1>Horror</h1>
                    </div>
                    <section className='homepageSlideContainer'>
                        <span id="left-arrow" className="arrow">‹</span>
                        <span id="right-arrow" className="arrow">›</span>
                            <div className="slider" id="slider">
                                { renderHorrorMovies }
                            </div>
                    </section> */}
        </div>
    </>
  )
}
