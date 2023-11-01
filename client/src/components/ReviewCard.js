import React from 'react'

export default function ReviewCard( { review }) {
  return (
    <div className='reviewCardParentDiv'>
        <img src={ review.user_avatar } alt='user_avatar' />
        <div className='reviewCardChildTextDiv'>
            <h3 className='reviewCardText'> { review.username } </h3>
            <p className='reviewCardText'> { review.review } </p>
            {/* <div className='reviewCardChildReplyBtnDiv'>
                <h5 onClick={ () => setShowReplyInput((show) => !show)}> Reply </h5>
            </div> */}
        </div>
    </div>
  )
}
