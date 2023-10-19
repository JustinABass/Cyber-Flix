import React, { useState, useEffect } from "react";

//this gives me global state
const ActorContext = React.createContext()

function ActorProvider({ children }) {

    return(
        <UserContext.Provider
        value={{}}>
            {children}
        </UserContext.Provider>
    )
}

export { ActorContext, ActorProvider}