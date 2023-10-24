import React, { useState, useContext } from 'react'
import { MovieContext } from '../context/movie'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import SearchCrime from './SearchCrime'


export default function NavBar() {
    const { setTriggerRandomTrailer, showSearchMovies, setShowSearchMovies } = useContext( MovieContext )


  return (
            <div className='navBarParentDivTwo'>
                <img src='https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg' />

                <NavLink to='/'>
                    <button className='navButtons' onClick={ () => {
                         setTriggerRandomTrailer((set) => !set)
                         setShowSearchMovies(false)
                        }}
                    > <b className='navButtonHover'>HOME</b> </button>
                </NavLink>

                <NavLink to='/action_movies'>
                    <button className='navButtons' onClick={ () => setShowSearchMovies(true)}> <b className='navButtonHover'>ACTION</b> </button>
                </NavLink>

                <NavLink to='/comedy_movies'>
                    <button className='navButtons' onClick={ () => setShowSearchMovies(true)}> <b className='navButtonHover'>COMEDY</b> </button>
                </NavLink>

                <NavLink to='/romance_movies'>
                    <button className='navButtons' onClick={ () => setShowSearchMovies(true)}> <b className='navButtonHover'>ROMANCE</b> </button>
                </NavLink>

                <NavLink to='/drama_movies'>
                    <button className='navButtons' onClick={ () => setShowSearchMovies(true)}> <b className='navButtonHover'>DRAMA</b> </button>
                </NavLink>

                <NavLink to='/thriller_movies'>
                    <button className='navButtons' onClick={ () => setShowSearchMovies(true)}> <b className='navButtonHover'>THRILLER</b> </button>
                </NavLink>

                <NavLink to='/adventure_movies'>
                    <button className='navButtons' onClick={ () => setShowSearchMovies(true)}> <b className='navButtonHover'>ADVENTURE</b> </button>
                </NavLink>

                <NavLink to='/crime_movies'>
                    <button className='navButtons' onClick={ () => setShowSearchMovies(true)}> <b className='navButtonHover'>CRIME</b> </button>
                </NavLink>

                <NavLink to='/horror_movies'>
                    <button className='navButtons' onClick={ () => setShowSearchMovies(true)}> <b className='navButtonHover'>HORROR</b> </button>
                </NavLink>

                <NavLink to='/actors_page'>
                    <button className='navButtons' onClick={ () => setShowSearchMovies(true)}> <b className='navButtonHover'>ACTORS</b> </button>
                </NavLink>

                { showSearchMovies ?
                    <div className='searchBarParentDiv'>
                        <SearchCrime/>
                    </div>
                  :
                    null
                }
            </div>
    )
}
