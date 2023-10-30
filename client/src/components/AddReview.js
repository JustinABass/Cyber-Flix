import React from 'react'

export default function AddReview() {
  return (
    <form>
        <input
        className='reviewInput'
        type='text'
        placeholder='Leave A Review'
        />

        <br/>
        <button className='reviewSubmitBtn' type='submit'> Submit </button>
    </form>
  )
}
