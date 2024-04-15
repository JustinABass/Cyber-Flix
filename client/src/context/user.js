import React, { useState, useEffect } from "react";

const UserContext = React.createContext()

function UserProvider({ children }) {
    const [ isAuthenticated, setIsAuthenticated ] = useState( false )
    const [ user, setUser ] = useState( {} )
    // const [ users, setUsers ] = useState( null )
    const [ userError, setUserError ] = useState( '' )
    const [ usernameErrors, setUsernameErrors ] = useState( '' )
    const [ passwordErrors, setPasswordErrors ] = useState( '' )





    const login = (user) => {
        setUser( user )
        setIsAuthenticated( true )
    };

    const signup = (user) => {
        setUser( user )
        setIsAuthenticated( true )
    };

    useEffect(() => {
        fetch('/user_profile')
        .then((r) => r.json())
        .then((userData) => {
            if( userData.error ){
                setIsAuthenticated( false );
                const errorList = userData.error.map((error) => <>{ error }</>)
                console.log('error', errorList)
                setUserError( errorList );
            } else {
                setUser( userData )
                setIsAuthenticated( true );
            }
        })
    }, []);

    // useEffect(() => {
    //     fetch('/users')
    //     .then((r) => r.json())
    //     .then((users) => setUsers( users ))
    // }, []);



    const logout = () => {
        setUser( null )
        setIsAuthenticated( false )
    };


    const updateUsername = (username, movies, reviews ) => {
        fetch(`/users/${user.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type' : 'application/json'},
            body: JSON.stringify(username)
        })
        .then((r) => r.json())
        .then((updateUsername) => {
            if( !updateUsername.errors ){
                setUser(updateUsername)

                const movieReviews = movies.flatMap((movie) => movie.reviews)

                movieReviews.filter((review) => {
                    if( review.user_id === updateUsername.id ){
                        return review.username = updateUsername.username
                    }
                });

                const reviewReplies = reviews.flatMap((review) => review.replies)

                reviewReplies.filter((reply) => {
                    if( reply.user_id === updateUsername.id ){
                        return reply.username = updateUsername.username
                    }
                });
            } else {
                const errorsList = updateUsername.errors.map((error) => <li> { error }</li>)
                setUsernameErrors( errorsList )
            }
        })
    };


    const updateUserPassword = (password) => {
        fetch(`/users/${user.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type' :'application/json'},
            body: JSON.stringify( password )
        })
        .then((r) => r.json())
        .then((updatedPassword) => {
            if( !updatedPassword.errors ){
                setUser( updatedPassword );
                alert( 'Password updated')
            } else {
                const errorsList = updatedPassword.errors.map((error) => <li> { error }</li>)
                setPasswordErrors( errorsList )
            }
        });
    };


    const updateUserImage = (imageData, userImage, movies, reviews ) => {
        if( !userImage ){
            alert('No image was chosen.')
        } else {
            fetch(`/users/${user.id}`,{
                method: 'PATCH',
                body: imageData
            })
            .then((r) => {
                if(r.ok){
                    r.json().then((imageData) => {
                        setUser( imageData )

                        const movieReviews = movies.flatMap((movie) => movie.reviews)

                        movieReviews.filter((review) => {
                            if( review.user_id === imageData.id ){
                                return review.user_image = imageData.image
                            }
                        });

                        const reviewReplies = reviews.flatMap((review) => review.replies)

                        reviewReplies.filter((reply) => {
                            if( reply.user_id === imageData.id ){
                                return reply.user_image = imageData.image
                            }
                        });
                        alert( 'User image updated')
                    })
                }
            })
        }
    };





    return(
        <UserContext.Provider
        value={{ isAuthenticated, setIsAuthenticated, user, setUser, login, signup, logout, userError, updateUsername, updateUserPassword, updateUserImage,
                 usernameErrors, passwordErrors }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider}
