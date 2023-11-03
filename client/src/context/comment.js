import React from "react";

const CommentContext = React.createContext()

function CommentProvider({ children }) {


    const addComment = ( comment, replies, setReplies ) => {
        fetch('/comments', {
            method: 'POST',
            headers: { 'Content-Type' : 'application/json'},
            body: JSON.stringify( comment )
        })
        .then((r) => r.json())
        .then((newComment) => {
            const replyCommentMatch = replies.map((reply) => {
                if( reply.id === newComment.reply_id ){
                    const updateReplyComments = {
                        ...reply,
                        comments: [ ...reply.comments, newComment]
                    }
                    return updateReplyComments
                } else {
                    return reply
                }
            })
            setReplies( replyCommentMatch )
        })
    }

    return(
        <CommentContext.Provider
        value={{ addComment }}>
            {children}
        </CommentContext.Provider>
    )
}


export { CommentContext, CommentProvider}