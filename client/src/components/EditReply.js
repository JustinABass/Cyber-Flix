import React, { useContext, useState } from 'react'
import { ReviewContext } from '../context/review';

export default function EditReply({ reply, selectedReview, setShowEditReplyInput }) {
  const { reviews, setReviews } = useContext( ReviewContext )
  const [ currentReplyValue, setCurrentReplyValue ] = useState( reply.reply )
  const [ updateErrors, setUpdateErrors ] = useState( '' )

  const editReply = (e) => {
    e.preventDefault()
        fetch(`/replies/${reply.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type' : 'application/json'},
            body: JSON.stringify({
              reply: currentReplyValue
            })
        })
        .then((r) => r.json())
        .then((updatedReply) => {
            if( !updatedReply.errors ){
              const updateSelectedReviewReplies = selectedReview.replies.map((reply) => {
                if( reply.id === updatedReply.id ){
                    return updatedReply
                } else {
                    return reply
                }
            });

            const setUpdateSelectedReviewReplies = reviews.map((review) => {
              if( review.id === updatedReply.review_id ){
                  return {
                      ...selectedReview,
                      replies: updateSelectedReviewReplies
                  }
              } else {
                  return review
              }
          });

          setReviews( setUpdateSelectedReviewReplies )
          setShowEditReplyInput( true )
            } else {
              const renderReplyErrors = updatedReply.errors.map((error) => <li> { error } </li>)
              setUpdateErrors( renderReplyErrors )
            }
        })
    };

  return (
    <>
    <form className='replyForm' onSubmit={ editReply }>
        <input
        className='addReplyInput'
        type='text'
        value={ currentReplyValue }
        onChange={ (e) => setCurrentReplyValue( e.target.value )}
        />
        <div>
          <br/>
          <button className='replySubmitBtn' type='submit'> <b> Update </b> </button>
        </div>
    </form>
    <br/>
    { updateErrors }
    <br/>
    </>
  )
}
