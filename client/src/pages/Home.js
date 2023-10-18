import React, { useContext } from 'react'
import { UserContext } from '../context/movie'
import Movies from '../components/Movies'

export default function Home() {
    const { movies } = useContext( UserContext )

    const randomMovieTrailer = Math.floor(Math.random() * movies.length)

    const popularMovies = movies.filter((movie) => movie.popular ? true : false)
    const renderPopularMovies = popularMovies.map((movie) => (
        <Movies
        key={movie.id}
        movie={movie}
        />
    ))
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
                <h1> Check Out { movies[randomMovieTrailer]?.title }</h1>
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
                        {renderPopularMovies}
                    </div>
            </section>
        </div>
    </>
  )
}
