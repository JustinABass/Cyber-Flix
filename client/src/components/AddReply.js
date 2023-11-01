import React from 'react'

export default function AddReply() {
  return (
    <form>
        <input
        type='text'
        className='addReplyInput'
        placeholder='Reply...'
        />

        <button className='replySubmitBtn' type='submit'> <b> Submit </b> </button>
    </form>
  )
}