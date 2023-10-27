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



    const filterActors = actors.filter((actor) => {
        if( actor.actor.toLowerCase().includes(searchActors.toLowerCase()) ){
            return true
        } 
    })

    const renderActors = filterActors.map((actor) => (
        <ActorsCard
        key={ actor.id }
        actor={ actor }
        />
    ))


    return(
        <ActorContext.Provider
        value={{ actors, renderActors, showSearchActors, searchActors, setSearchActors}}>
            {children}
        </ActorContext.Provider>
    )
}

export { ActorContext, ActorProvider}