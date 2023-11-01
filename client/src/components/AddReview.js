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
        <button className='reviewSubmitBtn' type='submit'> <b> Submit </b> </button>
    </form>
  )
}
