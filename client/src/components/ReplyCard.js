import React, { useState, useContext } from 'react'
import { UserContext } from '../context/user'
import { ReviewContext } from '../context/review'
import EditReply from './EditReply'

export default function ReplyCard({ reply, selectedReview }) {
    const { isAuthenticated, user } = useContext( UserContext )
    const { reviews, setReviews } = useContext( ReviewContext )
    const [ showEditReplyInput, setShowEditReplyInput ] = useState( true )

    const deleteReply = () => {
        fetch(`/replies/${reply.id}`,{
            method: 'DELETE',
            headers: { 'Content-Type' : 'application/json'}
        })
        .then(() =>{
          const filterSelectedReviewReplies = selectedReview.replies.filter((r) => r.id !== reply.id);
          const updateSlectedReviewReplies = reviews.map((review) => {
            if( review.id === selectedReview.id ){
              return {
                ...selectedReview,
                replies: filterSelectedReviewReplies
              }
            } else {
              return review
            }
          });
          setReviews( updateSlectedReviewReplies )
        })
      };


  if( isAuthenticated ){
    return (
        <>
        <br/>
        <div className='replyCardParentDiv'>
            <img src={ reply.user_image } alt='userAvatar' />
            <div className='replyCardChildTextDiv'>
                <h3 className='replyCardText'> { reply.username } </h3>
                <p className='replyCardText'> { reply.reply } </p>
                <br/>
                <div className='replyCardChildCommentBtnDiv'>
                    { user.id !== reply.user_id ? null : <h5 onClick={ () => setShowEditReplyInput( false ) }> Edit Reply </h5> }
                    <br/>
                    { user.id !== reply.user_id ? null : <h5 onClick={ () => deleteReply() }> Delete Reply </h5> }
                </div>
                <br/>
                { showEditReplyInput ? null : <EditReply reply={ reply }  selectedReview={ selectedReview } setShowEditReplyInput={ setShowEditReplyInput } />}
            </div>
        </div>
        <hr className='replyHr'/>
        </>
      )
  }
}
