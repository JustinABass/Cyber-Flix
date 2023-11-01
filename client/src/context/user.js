import React, { useState } from "react";

const UserContext = React.createContext()

function UserProvider({ children }) {
    const [ user, setUser ] = useState( [] )

    const signup = (user) => {
        setUser( user )
        setIsAuthenticated( true)
    }

    return(
        <UserContext.Provider
        value={{ user,
                 signup
                }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider}
