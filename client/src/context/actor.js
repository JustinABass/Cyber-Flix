import React, { useState, useEffect } from "react";
import ActorsCard from "../components/ActorsCard"

//this gives me global state
const ActorContext = React.createContext()

function ActorProvider({ children }) {
    const [ actors, setActors ] = useState( [] )
    const [ showSearchActors, setShowSearchActors ] = useState( true )
    const [ searchActors, setSearchActors ] = useState( '' )


    useEffect(() => {
        fetch('/actors')
        .then((r) => r.json())
        .then((actors) => {
            setActors(actors)
        })
    }, [])



    return(
        <ActorContext.Provider
        value={{ actors, showSearchActors, searchActors, setSearchActors}}>
            {children}
        </ActorContext.Provider>
    )
}

export { ActorContext, ActorProvider}