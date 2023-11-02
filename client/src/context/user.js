import React, { useState, useEffect } from "react";

const UserContext = React.createContext()

function UserProvider({ children }) {
    const [ isAuthenticated, setIsAuthenticated ] = useState( false )
    const [ user, setUser ] = useState( null )
    const [ userError, setUserError ] = useState( '' )

    const signup = (user) => {
        setUser( user )
        setIsAuthenticated( true )
    }





    useEffect(() => {
        fetch('/user_profile')
        .then((r) => r.json())
        .then((userData) => {
            if( userData.error ){
                setIsAuthenticated( false );
                const errorList = userData.error.map((error) => <>{ error }</>)
                setUserError( errorList );
            } else {
                setUser( userData )
                setIsAuthenticated( true );
            }
        })
    }, [])





    const logout = () => {
        setUser( null )
        setIsAuthenticated( false )
    }





    const updateUsername = (username, movies, reviews) => {
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
                })

                const reviewReplies = reviews.flatMap((review) => review.replies)

                reviewReplies.filter((reply) => {
                    if( reply.user_id === updateUsername.id ){
                        return reply.username = updateUsername.username
                    }
                })

                console.log(movieReviews)

            }
        })
    }



    return(
        <UserContext.Provider
        value={{ isAuthenticated, user, signup, logout, userError, updateUsername }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider}
