import React, { useContext } from 'react'
import { UserContext } from '../context/user'
import { Link } from 'react-router-dom'

export default function UnauthenticatedMessage() {
    const { userError } = useContext( UserContext )
  return (
    <>
        <br/>
        <h1>{userError}</h1>
        <hr/>
        <br/>
        <div>
            <Link to='/login'>
                <button className='userErrorButtons'> Login </button>
            </Link>
        </div>
        <br/>
        <div>
            <Link to='/signup'>
                <button className='userErrorButtons'> Signup </button>
            </Link>
        </div>
    </>
  )
}
