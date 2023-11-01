import React, { useState, useContext } from 'react'
import { ReplyContext } from '../context/reply'
import CommentCard from './CommentCard'
import AddComment from './AddComment'

export default function ReplyCard({ reply }) {
    const { replies } = useContext(ReplyContext)
    const selectedReply = replies.find((r) => r.id === reply.id)
    const [ showCommentInput, setShowCommentInput ] = useState( true )
    const [ showComments, setShowComments] = useState ( true )

    const renderSelectedReplyComments = selectedReply.comments.map((comment) => (
      <CommentCard
      key={ comment.id }
      comment={ comment }
      />
  ))


  return (
    <>
    <div className='replyCardParentDiv'>
        <img src={ reply.user_avatar } alt='userAvatar' />
        <div className='replyCardChildTextDiv'>
            <h3 className='replyCardText'> { reply.username } </h3>
            <p className='replyCardText'> { reply.reply } </p>
            <br/>
            <div className='replyCardChildCommentBtnDiv'>
                <h5 onClick={ () => setShowCommentInput((show) => !show)}> Comment </h5>
            </div>
            <br/>
            { showCommentInput ? null : <AddComment /> }
            <br/>
            { showComments ?
            <h5 onClick={() => setShowComments((show) => !show)}> View comments </h5>
            :
              <h5 onClick={() => setShowComments((show) => !show)}> Hide comments </h5>
            }
            <hr/>
        </div>
    </div>
    <br/>
    {  showComments ? null : renderSelectedReplyComments }
    </>
  )
}
