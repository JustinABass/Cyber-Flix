import React, { useState, useEffect } from "react";
import ActorsCard from "../components/ActorsCard"

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

    const renderActors = actors.map((actor) => (
        <ActorsCard
        key={ actor.id }
        actor={ actor }
        />
    ))
    return(
        <ActorContext.Provider
        value={{ actors, renderActors }}>
            {children}
        </ActorContext.Provider>
    )
}

export { ActorContext, ActorProvider}