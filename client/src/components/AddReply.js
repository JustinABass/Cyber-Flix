import React, { useContext, useState } from 'react'
import { ReplyContext } from '../context/reply'
import { ReviewContext } from '../context/review'

export default function AddReply({ selectedReview }) {
  const { addReply, replyErrors, setReplyErrors} = useContext( ReplyContext )
  const { reviews, setReviews } = useContext( ReviewContext )
  const [ replyData, setReplyData ] = useState( { reply: '' } )

  const handleSubmit = (e) => {
    e.preventDefault()
    const submitReply = {
      ...replyData,
      review_id: selectedReview.id
    }
    addReply( submitReply, reviews, setReviews)
    setReplyErrors( '' )
    setReplyData( { reply: '' } )
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
    <form className='replyForm' onSubmit={ handleSubmit }>
        <input
        className='addReplyInput'
        name='reply'
        type='text'
        placeholder='Reply...'
        value={ replyData.reply }
        onChange={ handleChange }
        />

        <div>
          <br/>
          <button className='replySubmitBtn' type='submit'> <b> Submit </b> </button>
        </div>
    </form>
    <br/>
    { replyErrors }
    <br/>
    </>
  )
}