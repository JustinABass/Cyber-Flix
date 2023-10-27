import React, { useState, useContext } from 'react'
import { MovieContext } from '../context/movie'
import { ActorContext } from '../context/actor'
import { useLocation } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import SearchMovies from './SearchMovies'
import SearchActors from './SearchActors'


export default function NavBar({ actor_id }) {
    const location = useLocation()
    const { setTriggerRandomTrailer, showSearchMovieInput } = useContext( MovieContext )
    const { showSearchActors } = useContext( ActorContext )
    const [ highlight, setHighlight ] = useState( true )


    const renderHighlight = highlight ? 'navButtonHover' : 'navButtonHoverTwo'
    console.log('path', location.pathname)
    debugger
    if( location.pathname === '/' ){
        return (
            <div className='navBarParentDivTwo'>
                <img src='https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg' />

                <NavLink to='/'>
                    <button className='navButtons' onClick={ () => {
                        setTriggerRandomTrailer((set) => !set)
                        setHighlight((highlight) => !highlight)
                         } }>
                        <b className={ renderHighlight }> HOME </b>
                    </button>
                </NavLink>

                <NavLink to='/action_movies'>
                    <button className='navButtons'> <b className='navButtonHover' > ACTION </b> </button>
                </NavLink>

                <NavLink to='/comedy_movies'>
                    <button className='navButtons'> <b className='navButtonHover'> COMEDY </b> </button>
                </NavLink>

                <NavLink to='/romance_movies'>
                    <button className='navButtons'> <b className='navButtonHover'> ROMANCE </b> </button>
                </NavLink>

                <NavLink to='/drama_movies'>
                    <button className='navButtons'> <b className='navButtonHover'> DRAMA </b> </button>
                </NavLink>

                <NavLink to='/thriller_movies'>
                    <button className='navButtons'> <b className='navButtonHover'> THRILLER </b> </button>
                </NavLink>

                <NavLink to='/adventure_movies'>
                    <button className='navButtons'> <b className='navButtonHover'> ADVENTURE </b> </button>
                </NavLink>

                <NavLink to='/crime_movies'>
                    <button className='navButtons'> <b className='navButtonHover'> CRIME </b> </button>
                </NavLink>

                <NavLink to='/horror_movies'>
                    <button className='navButtons'> <b className='navButtonHover'> HORROR </b> </button>
                </NavLink>

                <NavLink to='/actors_page'>
                    <button className='navButtons'> <b className='navButtonHover'> ACTORS </b> </button>
                </NavLink>

                <div className='navSettings'>
                    <h1>⚙️</h1>
                </div>

            </div>
        )

    } else if( location.pathname === '/actors_page'){
        return (
            <div className='navBarParentDivTwo'>
                <img src='https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg' />

                <NavLink to='/'>
                    <button className='navButtons' onClick={ () => setTriggerRandomTrailer((set) => !set) }>
                        <b className='navButtonHover'> HOME </b>
                    </button>
                </NavLink>

                <NavLink to='/action_movies'>
                    <button className='navButtons'> <b className='navButtonHover' > ACTION </b> </button>
                </NavLink>

                <NavLink to='/comedy_movies'>
                    <button className='navButtons'> <b className='navButtonHover'> COMEDY </b> </button>
                </NavLink>

                <NavLink to='/romance_movies'>
                    <button className='navButtons'> <b className='navButtonHover'> ROMANCE </b> </button>
                </NavLink>

                <NavLink to='/drama_movies'>
                    <button className='navButtons'> <b className='navButtonHover'> DRAMA </b> </button>
                </NavLink>

                <NavLink to='/thriller_movies'>
                    <button className='navButtons'> <b className='navButtonHover'> THRILLER </b> </button>
                </NavLink>

                <NavLink to='/adventure_movies'>
                    <button className='navButtons'> <b className='navButtonHover'> ADVENTURE </b> </button>
                </NavLink>

                <NavLink to='/crime_movies'>
                    <button className='navButtons'> <b className='navButtonHover'> CRIME </b> </button>
                </NavLink>

                <NavLink to='/horror_movies'>
                    <button className='navButtons'> <b className='navButtonHover'> HORROR </b> </button>
                </NavLink>

                <NavLink to='/actors_page'>
                    <button className='navButtons'> <b className='navButtonHover'> ACTORS </b> </button>
                </NavLink>

                { showSearchActors ?
                    <div className='searchBarParentDiv'>
                        <SearchActors/>
                    </div>
                  :
                    null
                }
            </div>
        )
    } else if(
        location.pathname === '/action_movies'
        || location.pathname === '/comedy_movies'
        || location.pathname === '/romance_movies'
        || location.pathname === '/drama_movies'
        || location.pathname === '/thriller_movies'
        || location.pathname === '/adventure_movies'
        || location.pathname === '/crime_movies'
        || location.pathname === '/horror_movies'
        ) {
        return (
            <div className='navBarParentDivTwo'>
                <img src='https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg' />

                <NavLink to='/'>
                    <button className='navButtons' onClick={ () => setTriggerRandomTrailer((set) => !set) }>
                        <b className='navButtonHover'> HOME </b>
                    </button>
                </NavLink>

                <NavLink to='/action_movies'>
                    <button className='navButtons'> <b className='navButtonHover' > ACTION </b> </button>
                </NavLink>

                <NavLink to='/comedy_movies'>
                    <button className='navButtons'> <b className='navButtonHover'> COMEDY </b> </button>
                </NavLink>

                <NavLink to='/romance_movies'>
                    <button className='navButtons'> <b className='navButtonHover'> ROMANCE </b> </button>
                </NavLink>

                <NavLink to='/drama_movies'>
                    <button className='navButtons'> <b className='navButtonHover'> DRAMA </b> </button>
                </NavLink>

                <NavLink to='/thriller_movies'>
                    <button className='navButtons'> <b className='navButtonHover'> THRILLER </b> </button>
                </NavLink>

                <NavLink to='/adventure_movies'>
                    <button className='navButtons'> <b className='navButtonHover'> ADVENTURE </b> </button>
                </NavLink>

                <NavLink to='/crime_movies'>
                    <button className='navButtons'> <b className='navButtonHover'> CRIME </b> </button>
                </NavLink>

                <NavLink to='/horror_movies'>
                    <button className='navButtons'> <b className='navButtonHover'> HORROR </b> </button>
                </NavLink>

                <NavLink to='/actors_page'>
                    <button className='navButtons'> <b className='navButtonHover'> ACTORS </b> </button>
                </NavLink>

                { showSearchMovieInput ?
                    <div className='searchBarParentDiv'>
                        <SearchMovies/>
                    </div>
                  :
                    null
                }
            </div>
        )
    } else {
        return (
            <div className='navBarParentDivTwo'>
                <img src='https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg' />

                <NavLink to='/'>
                    <button className='navButtons' onClick={ () => setTriggerRandomTrailer((set) => !set) }>
                        <b className='navButtonHover'> HOME </b>
                    </button>
                </NavLink>

                <NavLink to='/action_movies'>
                    <button className='navButtons'> <b className='navButtonHover' > ACTION </b> </button>
                </NavLink>

                <NavLink to='/comedy_movies'>
                    <button className='navButtons'> <b className='navButtonHover'> COMEDY </b> </button>
                </NavLink>

                <NavLink to='/romance_movies'>
                    <button className='navButtons'> <b className='navButtonHover'> ROMANCE </b> </button>
                </NavLink>

                <NavLink to='/drama_movies'>
                    <button className='navButtons'> <b className='navButtonHover'> DRAMA </b> </button>
                </NavLink>

                <NavLink to='/thriller_movies'>
                    <button className='navButtons'> <b className='navButtonHover'> THRILLER </b> </button>
                </NavLink>

                <NavLink to='/adventure_movies'>
                    <button className='navButtons'> <b className='navButtonHover'> ADVENTURE </b> </button>
                </NavLink>

                <NavLink to='/crime_movies'>
                    <button className='navButtons'> <b className='navButtonHover'> CRIME </b> </button>
                </NavLink>

                <NavLink to='/horror_movies'>
                    <button className='navButtons'> <b className='navButtonHover'> HORROR </b> </button>
                </NavLink>

                <NavLink to='/actors_page'>
                    <button className='navButtons'> <b className='navButtonHover'> ACTORS </b> </button>
                </NavLink>
            </div>
        )
    }

}
