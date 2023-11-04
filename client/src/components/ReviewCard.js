import React, { useState, useContext } from 'react'
import { UserContext } from '../context/user'
import { ReviewContext } from '../context/review'
import ReplyCard from './ReplyCard'
import AddReply from './AddReply'

export default function ReviewCard( { review }) {
    const  { isAuthenticated, user } = useContext( UserContext )
    const { reviews } = useContext( ReviewContext )
    const [ showReplyInput, setShowReplyInput ] = useState( true )
    const [ showReplies, setShowReplies] = useState ( true )

    if( isAuthenticated ){
      const selectedReview = reviews.find((r) => r.id === review.id)

      return (
        <>
        <br/>
        <div className='reviewCardParentDiv'>
            <img src={ review.user_avatar } alt='user_avatar' />
            <div className='reviewCardChildTextDiv'>
                <h3 className='reviewCardText'> { review.username } </h3>
                <p className='reviewCardText'> { review.review } </p>
                <br/>
                <div className='reviewCardChildReplyBtnDiv'>
                  { user.id === review.user_id ? null : <h5 onClick={ () => setShowReplyInput((show) => !show)}> Reply </h5> }
                    { showReplies ?
                      <h5 onClick={() => setShowReplies((show) => !show)}> View replies </h5>
                    :
                      <h5 onClick={() => setShowReplies((show) => !show)}> Hide replies </h5>
                    }
                </div>
                <br/>
                { showReplyInput ? null : <AddReply review={ selectedReview } setShowReplyInput={ setShowReplyInput } /> }
            </div>
        </div>
        <hr className='reviewHr'/>
        <br/>
        {  showReplies ? null : review.replies <= 0 || selectedReview.replies <= 0 ? <h5> There are no replies </h5> :
            selectedReview.replies.map((reply) => (
            <ReplyCard
            key={ reply.id }
            reply={ reply }
            review={ review }
            />
            ))
        }
        </>
      )
    }
}
