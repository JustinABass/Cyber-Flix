import React, {useState, useContext } from 'react'
import { UserContext } from '../context/user'
import { useNavigate } from 'react-router-dom'



export default function Signup() {
    const { signup } = useContext( UserContext )
    const navigate = useNavigate()
    const [ username, setUsername ] = useState( '' )
    const [ password, setPassword ] = useState( '' )
    const [ passwordConfirmation, setPasswordConfirmation ] = useState( '' )
    const [ userImage, setUserImage ] = useState( null )
    const [ signUpErrors, setSignUpErrors ] = useState( [] )




  const handleSubmit = (e) => {
    e.preventDefault()
    if( !userImage ){
      alert('Please upload image')
    } else {
      const formData = new FormData()
      formData.append('username', username)
      formData.append('password', password)
      formData.append('password_confirmation', passwordConfirmation)
      formData.append('image', userImage)

      fetch('/signup', {
        method: 'POST',
        body: formData
      })
      .then((r) => {
        if(r.ok) {
          r.json().then((userData) => {
              signup( userData )
              navigate('/')
          })
        } else {
          r.json().then(errorData => {
            const renderErrors = errorData.errors.map((error) => <li> { error }</li>)
            setSignUpErrors( renderErrors )
            console.log('eer', renderErrors)
            setUsername( '' )
            setPassword( '' )
            setPasswordConfirmation( '' )
            setUserImage( null )
          })
        }
      })
    }
  }


  return (
    <div className='signupDiv'>
      <h1> CYBERFLIX SIGNUP 🎬 </h1>
      <br/>
      <form onSubmit={ handleSubmit }>
        <div>
          <input
            className='signupFormInput1'
            type="text"
            id="username"
            placeholder='Username...'
            value={ username }
            onChange={ (e) => setUsername(e.target.value) }
          />
        </div>
        <br/>

        <div>
          <input
            className='signupFormInput2'
            type="password"
            id="password"
            placeholder='Password...'
            value={ password }
            onChange={ (e) => setPassword(e.target.value) }
          />
        </div>
        <br/>

        <div>
          <input
            className='signupFormInput2'
            type="password"
            id="password_confirmation"
            placeholder='Confirm Password...'
            value={ passwordConfirmation }
            onChange={ (e) => setPasswordConfirmation(e.target.value) }
          />
        </div>
        <br/>

        <label>
          <h5> Upload image: </h5>
          <br/>
          <input
          className='signupImgFormInput3'
          type='file'
          accept='/image/*'
          name='image'
          id='image'
          onChange={ (e) => setUserImage(e.target.files[0]) }
        />
        </label>

        <div>
          <br/>
          <input className='signupFormInputButton' type="submit"/>
        </div>
      </form>
      <br/>

      <h1 className='signupErrorText'>{ signUpErrors }</h1>
      <br/>
    </div>
  );
};