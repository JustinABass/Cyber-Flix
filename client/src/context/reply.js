import React, { useState, useEffect } from "react";

const ReplyContext = React.createContext()

function ReplyProvider({ children }) {
    const [ replies, setReplies ] = useState( [] )
    const [ replyErrors, setReplyErrors ] = useState( '' )

    useEffect(() => {
        fetch('/replies')
        .then((r) => r.json())
        .then((replies) => {
            setReplies( replies )
        })
    }, [])


    const addReply = ( reply, reviews, setReviews ) => {
        fetch('/replies',{
            method: 'POST',
            headers:{ 'Content-Type' : 'application/json'},
            body: JSON.stringify( reply )
        })
        .then((r) => r.json())
        .then(( newReply ) => {
            if( !newReply.errors ){
                const reviewReplyMatch = reviews.map((review) => {
                    if( review.id === newReply.review_id ){
                        const updateReviewReplies = {
                            ...review,
                            replies: [ ...review.replies, newReply]
                        };
                        return updateReviewReplies
                    } else {
                        return review
                    }
                });
                setReviews( reviewReplyMatch )
            } else {
                const errorsList = newReply.errors.map((error) => <li> { error } </li>)
                setReplyErrors( errorsList )
            }
        })
    }


    return(
        <ReplyContext.Provider
        value={{ replies, setReplies, addReply, replyErrors, setReplyErrors }}>
            {children}
        </ReplyContext.Provider>
    )
}

export { ReplyContext, ReplyProvider}