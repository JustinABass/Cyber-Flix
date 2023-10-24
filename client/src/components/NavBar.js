import React, { useState, useContext } from 'react'
import { MovieContext } from '../context/movie'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'

export default function NavBar() {
    const [showNav, setShowNav ] = useState( true )
    const { setTriggerRandomTrailer } = useContext( MovieContext )
  return (
    <>
        { showNav ?
            <div className='navBarParentDiv'>
                <img onClick={ () => setShowNav((show) => !show)} src='https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg' />
            </div>
          :
            <div className='navBarParentDivTwo'>
                <img onClick={ () => setShowNav((show) => !show)} src='https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg' />

                <NavLink to='/'>
                    <button className='navButtons' onClick={ () => setTriggerRandomTrailer((set) => !set)}> <b className='navButtonHover'>HOME</b> </button>
                </NavLink>

                <NavLink to='/action_movies'>
                    <button className='navButtons'> <b className='navButtonHover'>ACTION</b> </button>
                </NavLink>

                <NavLink to='/comedy_movies'>
                    <button className='navButtons'>  <b className='navButtonHover'>COMEDY</b> </button>
                </NavLink>

                <NavLink to='/romance_movies'>
                    <button className='navButtons'> <b className='navButtonHover'>ROMANCE</b> </button>
                </NavLink>

                <NavLink to='/drama_movies'>
                    <button className='navButtons'> <b className='navButtonHover'>DRAMA</b> </button>
                </NavLink>

                <NavLink to='/thriller_movies'>
                    <button className='navButtons'> <b className='navButtonHover'>THRILLER</b> </button>
                </NavLink>

                <NavLink to='/adventure_movies'>
                    <button className='navButtons'> <b className='navButtonHover'>ADVENTURE</b> </button>
                </NavLink>

                <NavLink to='/crime_movies'>
                    <button className='navButtons'> <b className='navButtonHover'>CRIME</b> </button>
                </NavLink>

                <NavLink to='/horror_movies'>
                    <button className='navButtons'> <b className='navButtonHover'>HORROR</b> </button>
                </NavLink>

                <NavLink to='/actors_page'>
                    <button className='navButtons'> <b className='navButtonHover'>ACTORS</b> </button>
                </NavLink>
            </div>
            }

    </>
  )
}
