import React, { useState, useEffect } from "react";

const CommentContext = React.createContext()

function CommentProvider({ children }) {

    return(
        <CommentContext.Provider
        value={{ }}>
            {children}
        </CommentContext.Provider>
    )
}

export { CommentContext, CommentProvider}