import React, { useState, useContext } from 'react'
import { UserContext } from '../context/user'
import { ReviewContext } from '../context/review'
import { ReplyContext } from '../context/reply'
import { MovieContext } from '../context/movie'
import EditReview from './EditReview'
import ReplyCard from './ReplyCard'
import AddReply from './AddReply'


export default function ReviewCard( { review, selectedMovie }) {
    const  { isAuthenticated, user } = useContext( UserContext )
    const { reviews } = useContext( ReviewContext )
    const { setReplyErrors } = useContext( ReplyContext )
    const { movies, setMovies } = useContext( MovieContext )
    const [ showEditReviewInput, setShowEditReviewInput ] = useState( true )
    const [ showReplyInput, setShowReplyInput ] = useState( true )
    const [ showReplies, setShowReplies] = useState ( true )

    const selectedReview = reviews.find((r) => r.id === review.id)

    const deleteReview = () => {
      fetch(`/reviews/${review.id}`,{
          method: 'DELETE',
          headers: { 'Content-Type' : 'application/json'}
      })
      .then(() =>{
        const filterSelectedMovieReviews = selectedMovie.reviews.filter((r) => r.id !== review.id);
        const updateSlectedMovieReviews = movies.map((movie) => {
          if( movie.id === selectedMovie.id ){
            return {
              ...selectedMovie,
              reviews: filterSelectedMovieReviews
            }
          } else {
            return movie
          }
        });
        setMovies( updateSlectedMovieReviews )
      })
    };

    if( isAuthenticated ){
      return (
        <>
        <br/>
        <div className='reviewCardParentDiv'>
            <img src={ review.user_image } alt='user_avatar' />
            <div className='reviewCardChildTextDiv'>
                <h3 className='reviewCardText'> { review.username } </h3>
                <p className='reviewCardText'> { review.review } </p>
                <br/>
                <div className='reviewCardChildReplyBtnDiv'>
                  { user.id === review.user_id ? null : <h5 onClick={ () => {
                    setShowReplyInput( false )
                    setShowReplies( false )
                  } }> Reply </h5> }


                    { showReplies ?
                      <h5 onClick={() => {
                        setShowReplies((show) => !show)
                        setShowReplyInput( true )
                        setShowEditReviewInput( true )
                        setReplyErrors( '' )
                      }}> View replies </h5>
                    :
                      <h5 onClick={() => {
                        setShowReplies((show) => !show)
                        setShowReplyInput( true )
                        setShowEditReviewInput( true )
                        setReplyErrors( '' )
                      }}> Hide replies </h5>
                    }

                    
                    { user.id !== review.user_id ? null : <h5 onClick={ () => setShowEditReviewInput( false ) }> Edit Review </h5> }
                    { user.id !== review.user_id ? null : <h5 onClick={ () => deleteReview() }> Delete Review </h5> }
                </div>
                <br/>
                { showEditReviewInput ? null : <EditReview review={ review } selectedMovie={ selectedMovie } setShowEditReviewInput={ setShowEditReviewInput } />}
                { showReplyInput ? null : <AddReply selectedReview={ selectedReview } /> }
            </div>
        </div>
        <hr className='reviewHr'/>
        <br/>
        {  showReplies ? null : review.replies <= 0 || selectedReview.replies <= 0 ? <h5> There are no replies <br/> </h5> :
            selectedReview.replies.map((reply) => (
            <ReplyCard
            key={ reply.id }
            reply={ reply }
            selectedReview= { selectedReview }
            />
            ))
        }
        </>
      )
    }
}
