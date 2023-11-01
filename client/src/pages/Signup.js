import React, {useState, useContext } from 'react'
import { UserContext } from '../context/user'
import { useNavigate } from 'react-router-dom'


export default function Signup() {
    const { signup } = useContext( UserContext )
    const navigate = useNavigate()
    const [ username, setUsername ] = useState( '' )
    const [ userAvatar, setUserAvatar ] = useState( '' )
    const [ password, setPassword ] = useState( '' )
    const [ passwordConfirmation, setPasswordConfirmation ] = useState( '' )
    const [ errorsList, setErrorsList ] = useState( [] )



  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('/signup', {
      method: 'POST',
      headers: { 'Content-Type' : 'application/json'},
      body: JSON.stringify({
        username: username,
        user_avatar: userAvatar,
        password: password,
        password_confirmation: passwordConfirmation
      })
    })
    .then((r) => r.json())
    .then((user) => {
      if(!user.errors) {
        signup( user )
        navigate( '/' )
      } else {
        setUsername('')
        setPassword('')
        setPasswordConfirmation('')
        const errorList = user.errors.map((error) => <li>{error}</li>)
        setErrorsList(errorList)
      }
    })
  }


  return (
    <div className='signupFormParentDiv'>
      <h1 className='homeLogo'> CYBERFLIX</h1>
      <form onSubmit={ handleSubmit }>
        <div>
          <input
            className='signupFormInput'
            type="text"
            id="username"
            placeholder='Username...'
            value={ username }
            onChange={ (e) => setUsername(e.target.value) }
            autoFocus/>
        </div>

        <input
          className='signupFormInput'
          type="text"
          id="avatar"
          placeholder='Avatar url...'
          value={ userAvatar }
          onChange={ (e) => setUserAvatar(e.target.value) }
        />

        <div>
          <input
            className='signupFormInput'
            type="password"
            id="password"
            placeholder='Password...'
            value={ password }
            onChange={ (e) => setPassword(e.target.value) }
          />
        </div>

        <input
          className='signupFormInput'
          type="password"
          id="password_confirmation"
          placeholder='Confirm Password...'
          value={ passwordConfirmation }
          onChange={ (e) => setPasswordConfirmation(e.target.value) }
        />

        <div>
          <br/>
          <input
          className='signupFormInput'
          type="submit"/>
        </div>
      </form>

        <h1 className='signupErrorText'>{ errorsList }</h1>
    </div>
  );
};