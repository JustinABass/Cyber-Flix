import React, { useState, useContext } from 'react'
import { UserContext } from '../context/user'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const { login } = useContext( UserContext )
  const navigate = useNavigate()
  const [ username, setUsername ] = useState( '' )
  const [ password, setPassword ] = useState( '' )
  const [ error, setError ] = useState( '' )


  function handleSubmit(e) {
    e.preventDefault();
    fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type' : 'application/json'},
      body: JSON.stringify({
        username: username,
        password: password
      }),
    })
    .then((r) => r.json())
    .then((user) => {
      if(!user.error){
        login(user)
        navigate('/')
      } else {
        setUsername('')
        setPassword('')
        const errorList = user.error.map((error) => <>{ error }</>)
        setError( errorList )
      }

    });
  }

  return (
      <div className='loginDiv'>
        <h1> CYBERFLIX LOGIN 🎬 </h1>
         <form onSubmit={ handleSubmit }>
          <div>
            <input
            className='loginFormInput1'
            type="text"
            id="username"
            placeholder='username...'
            value={ username }
            onChange={ (e) => setUsername(e.target.value) }
            autoFocus/>
          </div>
          <br/>

            <input
              className='loginFormInput2'
              type="password"
              id="password"
              placeholder='password...'
              value={ password }
              onChange={ (e) => setPassword(e.target.value) }
            />

          <div>
            <br/>
            <input className='loginFormInputButton' type="submit" />
          </div>
          </form>
          <br/>

          <h3 className='loginErrors'>{ error }</h3>
      </div>
    );
};
