import React, { useState, useEffect } from "react";

//this gives me global state
const ActorContext = React.createContext()

function ActorProvider({ children }) {
    const [ actors, setActors ] = useState( [] )
    console.log('actors', actors)

    useEffect(() => {
        fetch('/actors')
        .then((r) => r.json())
        .then((actors) => {
            setActors(actors)
        })
    }, [])
    return(
        <ActorContext.Provider
        value={{}}>
            {children}
        </ActorContext.Provider>
    )
}

export { ActorContext, ActorProvider}