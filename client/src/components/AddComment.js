import React, { useContext, useState } from 'react'
import { CommentContext } from '../context/comment'
import { ReplyContext } from '../context/reply'

export default function AddComment({ reply, showCommentInput }) {
  const { addComment } = useContext( CommentContext )
  const { replies, setReplies } = useContext( ReplyContext )
  const [ commentData, setCommentData ] = useState( { comment: '' } )

  const handleSubmit = (e) => {
    e.preventDefault()
    const submitComment = {
      ...commentData,
      reply_id: reply.id
    }
    addComment( submitComment, replies, setReplies )
    
  }

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setCommentData({
      ...commentData,
      [name]: value
    })
  }

  return (
    <>
    <br/>
    <form onSubmit={ handleSubmit }>
      <input
      type='text'
      className='addCommentInput'
      name='comment'
      placeholder='Comment...'
      value={ commentData.comment }
      onChange={ handleChange }
      />

      <button className='commentSubmitBtn' type='submit'> <b> Submit </b> </button>
    </form>
    </>
  )
}
