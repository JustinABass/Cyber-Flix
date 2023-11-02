import React, { useContext, useState } from 'react'
import { UserContext } from '../context/user'
import { MovieContext } from '../context/movie'
import { ReviewContext } from '../context/review'

export default function UserProfile() {
    const { isAuthenticated, user, updateUsername } = useContext( UserContext )
    const { movies } = useContext( MovieContext )
    const { reviews } = useContext( ReviewContext )
    const [ usernameData, setUsernameData ] = useState( { username: '' } )

    const handleUsernameSubmit = (e) => {
        e.preventDefault();
        const update = { ...usernameData }
        updateUsername( update, movies, reviews )
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

                            <button type='submit'> UPDATE </button>
                        </form>
                        <br/>
                        <br/>
                        <h1> HELLO { user.username.toUpperCase()} </h1>
                    </div>

                    <div className='userProfileChildDiv'>
                        <br/>
                        <h1> UPDATE USER AVATAR </h1>
                    </div>

                    {/* <div className='userProfileChildDiv'>
                        <br/>
                        <h1> UPDATE USER PASSWORD </h1>
                        <br/>
                        <form>
                            <input
                            className='userProfileSettingInputs'
                            name='password'
                            type='password'
                            value=''
                            onChange=''
                            />

                            <div>
                                <br/>
                                <br/>
                                <input
                                className='userProfileSettingInputs'
                                name='password_confirmation'
                                type='password'
                                value=''
                                onChange=''
                                />
                            </div>
                            <button type='UPDATE'> UPDATE </button>
                        </form>
                    </div> */}

                    <div className='userProfileChildDiv'>
                        <br/>
                        <h1> DEACTIVATE ACCOUNT </h1>
                    </div>
                </div>

            </div>
          )
    }
}
