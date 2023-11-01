import React from 'react'

export default function AddComment() {
  return (
    <form>
    <input
    type='text'
    className='addCommentInput'
    placeholder='Comment...'
    />

    <button className='commentSubmitBtn' type='submit'> <b> Submit </b> </button>
</form>
  )
}
