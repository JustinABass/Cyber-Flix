import React, { useState, useEffect } from "react";

const CommentContext = React.createContext()

function CommentProvider({ children }) {

    const [ comments, setComments ] = useState( [] )

    useEffect(() => {
        fetch('/comments')
        .then((r) => r.json())
        .then((comments) => {
            setComments( comments )
        })
    }, [])

    return(
        <CommentContext.Provider
        value={{ }}>
            {children}
        </CommentContext.Provider>
    )
}

export { CommentContext, CommentProvider}