import React, { useState, useEffect } from "react";
import ActorsCard from "../components/ActorsCard"

//this gives me global state
const ActorContext = React.createContext()

function ActorProvider({ children }) {
    const [ actors, setActors ] = useState( [] )
    const [ showSearchActors, setShowSearchActors ] = useState( true )
    const [ searchActorsOnChange, setSearchActorsOnChange ] = useState( '' )


    useEffect(() => {
        fetch('/actors')
        .then((r) => r.json())
        .then((actors) => {
            setActors(actors)
        })
    }, [])

    const filterActors = actors.filter((actor) => {
        if( actor.actor.toLowerCase().includes(searchActorsOnChange.toLowerCase()) ){
            return true
        }
    })


    return(
        <ActorContext.Provider
        value={{ actors, showSearchActors, filterActors, setSearchActorsOnChange }}>
            {children}
        </ActorContext.Provider>
    )
}

export { ActorContext, ActorProvider}