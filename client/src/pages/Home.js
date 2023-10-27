import React, { useContext } from 'react'
import { MovieContext } from '../context/movie'
import { Link } from 'react-router-dom'



export default function Home() {
    const {
            movies,
            randomMovieTrailer,
            triggerRandomTrailer,
            renderPopularMovies,
            renderNewMovies,
            renderTrendingMovies
         } = useContext( MovieContext )


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
        </div>
    </div>
  )
}
