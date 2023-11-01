import React, { useState, useContext } from 'react'
import { ReviewContext } from '../context/review'
import ReplyCard from './ReplyCard'
import AddReply from './AddReply'

export default function ReviewCard( { review }) {
    const { reviews } = useContext(ReviewContext)
    const selectedReview = reviews.find((r) => r.id === review.id)
    const [ showReplyInput, setShowReplyInput ] = useState( true )
    const [ showReplies, setShowReplies] = useState ( true )

    const renderSelectedReviewReplies = selectedReview.replies.map((reply) => (
        <ReplyCard
        key={ reply.id }
        reply={ reply }
        />
    ))

    
  return (
    <>
    <div className='reviewCardParentDiv'>
        <img src={ review.user_avatar } alt='user_avatar' />
        <div className='reviewCardChildTextDiv'>
            <h3 className='reviewCardText'> { review.username } </h3>
            <p className='reviewCardText'> { review.review } </p>
            <br/>
            <div className='reviewCardChildReplyBtnDiv'>
                <h5 onClick={ () => setShowReplyInput((show) => !show)}> Reply </h5>
            </div>
            <br/>
            { showReplyInput ? null : <AddReply /> }
            <br/>
            { showReplies ?
            <h5 onClick={() => setShowReplies((show) => !show)}> View replies </h5>
            :
              <h5 onClick={() => setShowReplies((show) => !show)}> Hide replies </h5>
            }
            <hr/>
        </div>
    </div>
    <br/>
    {  showReplies ? null : renderSelectedReviewReplies }
    </>
  )
}
