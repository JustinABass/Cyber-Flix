import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'

export default function NavBar() {
  return (
    <div className='navBarParentDiv'>
        <NavLink to='/'>
            <button className='navButtons'> HOME </button>
        </NavLink>

        <NavLink to='/actors_page'>
            <button className='navButtons'> ACTORS </button>
        </NavLink>


    </div>
  )
}
