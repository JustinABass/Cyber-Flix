import React, { useContext } from 'react'
import { UserContext } from '../context/movie'
import Movies from '../components/Movies'

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
        renderHorrorMovies } = useContext( UserContext )


  return (
    <>
    <div className='homepageTrailerDiv'>
        <iframe src={ movies[randomMovieTrailer]?.trailer } width="1425" height="720"  allow="fullscreen" title="A YouTube video" frameborder="0" allowfullscreen></iframe>
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
                <span id="left-arrow" class="arrow">‹</span>
                <span id="right-arrow" class="arrow">›</span>
                    <div class="slider" id="slider">
                        { renderPopularMovies }
                    </div>
            </section>
            <br/>

                <div className='homepageHeaders'>
                    <h1>New Releases On CyberFlix</h1>
                </div>
                <section className='homepageSlideContainer'>
                    <span id="left-arrow" class="arrow">‹</span>
                    <span id="right-arrow" class="arrow">›</span>
                        <div class="slider" id="slider">
                            { renderNewMovies }
                        </div>
                </section>
                <br/>

                <div className='homepageHeaders'>
                    <h1>Trending Now On CyberFlix</h1>
                </div>
                <section className='homepageSlideContainer'>
                    <span id="left-arrow" class="arrow">‹</span>
                    <span id="right-arrow" class="arrow">›</span>
                        <div class="slider" id="slider">
                            { renderTrendingMovies }
                        </div>
                </section>
                <br/>

                <div className='homepageHeaders'>
                        <h1>Action</h1>
                    </div>
                    <section className='homepageSlideContainer'>
                        <span id="left-arrow" class="arrow">‹</span>
                        <span id="right-arrow" class="arrow">›</span>
                            <div class="slider" id="slider">
                                { renderActionMovies }
                            </div>
                    </section>
                    <br/>

                <div className='homepageHeaders'>
                        <h1>Comedy</h1>
                    </div>
                    <section className='homepageSlideContainer'>
                        <span id="left-arrow" class="arrow">‹</span>
                        <span id="right-arrow" class="arrow">›</span>
                            <div class="slider" id="slider">
                                { renderComedyMovies }
                            </div>
                    </section>
                    <br/>

                    <div className='homepageHeaders'>
                        <h1>Romance</h1>
                    </div>
                    <section className='homepageSlideContainer'>
                        <span id="left-arrow" class="arrow">‹</span>
                        <span id="right-arrow" class="arrow">›</span>
                            <div class="slider" id="slider">
                                { renderRomanceMovies }
                            </div>
                    </section>
                    <br/>

                    <div className='homepageHeaders'>
                        <h1>Drama</h1>
                    </div>
                    <section className='homepageSlideContainer'>
                        <span id="left-arrow" class="arrow">‹</span>
                        <span id="right-arrow" class="arrow">›</span>
                            <div class="slider" id="slider">
                                { renderDramaMovies }
                            </div>
                    </section>
                    <br/>

                    <div className='homepageHeaders'>
                        <h1>Adventure</h1>
                    </div>
                    <section className='homepageSlideContainer'>
                        <span id="left-arrow" class="arrow">‹</span>
                        <span id="right-arrow" class="arrow">›</span>
                            <div class="slider" id="slider">
                                { renderAdventureMovies }
                            </div>
                    </section>
                    <br/>

                    <div className='homepageHeaders'>
                        <h1>Thriller</h1>
                    </div>
                    <section className='homepageSlideContainer'>
                        <span id="left-arrow" class="arrow">‹</span>
                        <span id="right-arrow" class="arrow">›</span>
                            <div class="slider" id="slider">
                                { renderThrillerMovies }
                            </div>
                    </section>
                    <br/>

                    <div className='homepageHeaders'>
                        <h1>Crime</h1>
                    </div>
                    <section className='homepageSlideContainer'>
                        <span id="left-arrow" class="arrow">‹</span>
                        <span id="right-arrow" class="arrow">›</span>
                            <div class="slider" id="slider">
                                { renderCrimeMovies }
                            </div>
                    </section>
                    <br/>

                    <div className='homepageHeaders'>
                        <h1>Horror</h1>
                    </div>
                    <section className='homepageSlideContainer'>
                        <span id="left-arrow" class="arrow">‹</span>
                        <span id="right-arrow" class="arrow">›</span>
                            <div class="slider" id="slider">
                                { renderHorrorMovies }
                            </div>
                    </section>
                    <br/>
        </div>
    </>
  )
}
