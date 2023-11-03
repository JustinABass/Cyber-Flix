import React, { useState, useContext } from 'react'
import { UserContext } from '../context/user'
import { ReplyContext } from '../context/reply'
import CommentCard from './CommentCard'
import AddComment from './AddComment'

export default function ReplyCard({ reply }) {
    const { isAuthenticated, user } = useContext( UserContext )
    const { replies } = useContext(ReplyContext)
    const [ showCommentInput, setShowCommentInput ] = useState( true )
    const [ showComments, setShowComments] = useState ( true )

  if( isAuthenticated ){
    const selectedReply = replies.find((r) => r.id === reply.id)

    const renderSelectedReplyComments = () => {
        if( reply.comments <= 0 ){
            return <h5> There are no comments </h5>
        } else {
            return selectedReply.comments.map((comment) => (
                <CommentCard
                key={ comment.id }
                comment={ comment }
                />
                ))
            }
        }
    return (
        <>
        <div className='replyCardParentDiv'>
            <img src={ reply.user_avatar } alt='userAvatar' />
            <div className='replyCardChildTextDiv'>
                <h3 className='replyCardText'> { reply.username } </h3>
                <p className='replyCardText'> { reply.reply } </p>
                <br/>
                <div className='replyCardChildCommentBtnDiv'>
                    { user.id === reply.user_id ? null : <h5 onClick={ () => setShowCommentInput((show) => !show)}> Comment </h5>}
                    { showComments ?
                        <h5 onClick={() => setShowComments((show) => !show)}> View comments </h5>
                    :
                        <h5 onClick={() => setShowComments((show) => !show)}> Hide comments </h5>
                    }
                </div>
                { showCommentInput ? null : <AddComment reply={ reply } /> }
                <br/>
            </div>
        </div>
        <hr className='replyHr'/>
        <br/>
        {  showComments ?
            null
        :
            renderSelectedReplyComments()
        }
        </>
      )
  }
}
