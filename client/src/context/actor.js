import React, { useState, useEffect } from "react";

//this gives me global state
const ActorContext = React.createContext()

function ActorProvider({ children }) {

    return(
        <ActorContext.Provider
        value={{}}>
            {children}
        </ActorContext.Provider>
    )
}

export { ActorContext, ActorProvider}