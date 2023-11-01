import React from 'react'


export default function CommentCard({ comment }) {

  return (
    <div className='commentCardParentDiv'>
        <img src={ comment.user_avatar } alt='userAvatar' />
        <div className='commentCardChildTextDiv'>
            <h3 className='commentCardText'> { comment.username } </h3>
            <p className='commentCardText'> { comment.comment } </p>
        </div>
    </div>
  )
}
