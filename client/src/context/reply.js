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


    const addReply= ( reply, reviews, setReviews ) => {
        fetch('/replies',{
            method: 'POST',
            headers:{ 'Content-Type' : 'application/json'},
            body: JSON.stringify( reply )
        })
        .then((r) => r.json())
        .then(( newReply ) => {
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
        })
    }


    return(
        <ReplyContext.Provider
        value={{ replies, setReplies, addReply }}>
            {children}
        </ReplyContext.Provider>
    )
}

export { ReplyContext, ReplyProvider}