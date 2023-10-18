import React, { useState, useEffect } from "react";

//this gives me global state
const UserContext = React.createContext()

function UserProvider({ children }) {
    const [ movies, setMovies ] = useState( [] )



    useEffect(() => {
        fetch('/movies')
        .then((r) => r.json())
        .then((movies) => {
            setMovies( movies )
        })
    }, []);


    return(
        <UserContext.Provider
        value={{ movies }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider}
