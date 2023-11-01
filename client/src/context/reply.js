import React, { useState, useEffect } from "react";

const ReplyContext = React.createContext()

function ReplyProvider({ children }) {
    const [ replies, setReplies ] = useState( [] )

    useEffect(() => {
        fetch('/replies')
        .then((r) => r.json())
        .then((replies) => {
            setReplies( replies )
        })
    }, [])


    return(
        <ReplyContext.Provider
        value={{ replies}}>
            {children}
        </ReplyContext.Provider>
    )
}

export { ReplyContext, ReplyProvider}