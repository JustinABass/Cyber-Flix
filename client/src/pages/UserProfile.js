import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/user'
import { MovieContext } from '../context/movie'
import { ReviewContext } from '../context/review'
import { ReplyContext } from '../context/reply'
import UnauthenticatedMessage from '../components/UnauthenticatedMessage'

export default function UserProfile() {
    const { isAuthenticated, setIsAuthenticated, user, updateUsername, updateUserPassword, updateUserImage, usernameErrors, passwordErrors } = useContext( UserContext )
    const { movies } = useContext( MovieContext )
    const { reviews } = useContext( ReviewContext )
    const { replies } = useContext( ReplyContext )
    const navigate = useNavigate()
    const [ usernameData, setUsernameData ] = useState( { username: '' } )
    const [ userPasswordData, setUserPasswordData ] = useState ({
        password: '',
        password_confirmation: '',
    })
    const [ userImage, setUserImage ] = useState( null )


    const handleUsernameSubmit = (e) => {
        e.preventDefault();
        const update = { ...usernameData }
        updateUsername( update, movies, reviews, replies )
        setUsernameData( { username: '' } )
    }

    const handleUsernameChange = (e) => {
        const name = e.target.name;
        const value = e.target.value
        setUsernameData({
            ...usernameData,
            [name]: value
        });
    };

    const handleUserPasswordSubmit = (e) => {
        e.preventDefault();
        const update = { ...userPasswordData }
        updateUserPassword( update )
        setUserPasswordData( { password: '', password_confirmation: '' } )
    }

    const handleUserPasswordChange = (e) => {
        const name = e.target.name;
        const value = e.target.value
        setUserPasswordData({
            ...userPasswordData,
            [name]: value
        });
    };

    const handleUserImageSubmit = (e) =>{
        e.preventDefault()
        const imageData = new FormData()
        imageData.append('image', userImage)
        updateUserImage( imageData, userImage, movies, reviews, replies )
    }


    const deactivate = () => {
        fetch(`/users/${user.id}`,{
            method: 'DELETE',
            headers: { 'Content-Type' : 'application/json'}
        })
        .then(() =>{
            setIsAuthenticated(false)
            navigate('/')
        })
        }

    if( isAuthenticated ){
        return (
            <div className='userProfileParentDiv'>
                <div className='userProfileGridContainer'>
                    <div className='userProfileChildDiv'>
                        <br/>
                        <h1> UPDATE USERNAME </h1>
                        <br/>
                        <form onSubmit={ handleUsernameSubmit }>
                            <div>
                                <input
                                className='userProfileSettingInputs'
                                name='username'
                                type='text'
                                value={ usernameData.username }
                                onChange={ handleUsernameChange }
                                />
                            </div>

                            <button className='updateBtn' type='submit'> UPDATE </button>
                        </form>
                        <div className='userProfileSettingNameDiv'>
                            <h1> HELLO { user.username.toUpperCase()} </h1>
                            <br/>
                            { usernameErrors }
                        </div>
                    </div>


                    <div className='userProfileChildDiv'>
                        <br/>
                        <h1> UPDATE USER PASSWORD </h1>
                        <br/>
                        <form onSubmit={ handleUserPasswordSubmit }>
                            <input
                            className='userProfileSettingInputs'
                            name='password'
                            type='password'
                            value={ userPasswordData.password }
                            onChange={ handleUserPasswordChange }
                            />

                            <div>
                                <br/>
                                <input
                                className='userProfileSettingInputs'
                                name='password_confirmation'
                                type='password'
                                value={ userPasswordData.password_confirmation }
                                onChange={ handleUserPasswordChange }
                                />
                            </div>
                            <button className='updateBtn' type='submit'> UPDATE </button>
                        </form>
                        <br/>
                        { passwordErrors }
                    </div>

                    <div className='userProfileChildDiv'>
                        <br/>
                        <h1> UPDATE IMAGE </h1>
                        <br/>
                        <form onSubmit={ handleUserImageSubmit }>
                            <input
                            className='signupFormInput'
                            type='file'
                            accept='/image/*'
                            name='image'
                            id='image'
                            onChange={ (e) => setUserImage(e.target.files[0]) }
                            />
                            <br/>
                            <br/>
                            <button type='submit' > UPDATE AVATAR </button>
                        </form>
                    </div>

                    <div className='userProfileChildDiv'>
                        <br/>
                        <h1> DEACTIVATE ACCOUNT </h1>
                        <div className='deactivateBtnDiv'>
                            <button className='deactivateBtn' onClick={ () => deactivate() }> CLICK TO DEACTIVATE</button>
                        </div>
                    </div>
                </div>
                <br/>
            </div>
          )
    } else {
        return(
            <div className='userErrorParentDiv' >
                <center>
                    <div className='userErrorChildDiv'>
                        <UnauthenticatedMessage />
                    </div>
                </center>
            </div>
        )
    }
}