import React, { useState, useEffect, useTransition } from "react";

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
        fetch('/user_data')
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



    return(
        <UserContext.Provider
        value={{
            isAuthenticated,
            user,
            userError,
            signup,
            logout
                }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider}
