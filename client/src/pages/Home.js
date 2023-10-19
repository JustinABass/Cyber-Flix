import React, { useContext } from 'react'
import { MovieContext } from '../context/movie'


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
                <h1> Check Out <b>{ movies[randomMovieTrailer]?.title }</b></h1>
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
            <br/>

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
                <br/>

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
                <br/>

                <div className='homepageHeaders'>
                        <h1>Action</h1>
                    </div>
                    <section className='homepageSlideContainer'>
                        <span id="left-arrow" className="arrow">‹</span>
                        <span id="right-arrow" className="arrow">›</span>
                            <div className="slider" id="slider">
                                { renderActionMovies }
                            </div>
                    </section>
                    <br/>

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
                    <br/>

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
                    <br/>

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
                    <br/>

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
                    <br/>

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
                    <br/>

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
                    <br/>

                    <div className='homepageHeaders'>
                        <h1>Horror</h1>
                    </div>
                    <section className='homepageSlideContainer'>
                        <span id="left-arrow" className="arrow">‹</span>
                        <span id="right-arrow" className="arrow">›</span>
                            <div className="slider" id="slider">
                                { renderHorrorMovies }
                            </div>
                    </section>
                    <br/>


        </div>
    </>
  )
}
