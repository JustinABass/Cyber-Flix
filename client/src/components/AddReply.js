import React, { useContext, useState } from 'react'
import { ReplyContext } from '../context/reply'
import { ReviewContext } from '../context/review'

export default function AddReply({ review, setShowReplyInput }) {
  const { addReply } = useContext( ReplyContext )
  const { reviews, setReviews } = useContext( ReviewContext )
  const [ replyData, setReplyData ] = useState( { reply: '' } )

  const handleSubmit = (e) => {
    e.preventDefault()
    const submitReply = {
      ...replyData,
      review_id: review.id
    }
    addReply( submitReply, reviews, setReviews)
    setShowReplyInput( true )
  }

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setReplyData({
      ...replyData,
      [name]: value
    })
  }

  return (
    <>
    <form onSubmit={ handleSubmit }>
        <input
        className='addReplyInput'
        name='reply'
        type='text'
        placeholder='Reply...'
        value={ replyData.reply }
        onChange={ handleChange }
        />

        <button className='replySubmitBtn' type='submit'> <b> Submit </b> </button>
    </form>
    <br/>
    </>
  )
}