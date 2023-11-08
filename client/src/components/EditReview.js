import React, { useContext, useState } from 'react'
import { MovieContext } from '../context/movie'

export default function EditReview({ review, selectedMovie, setShowEditReviewInput }) {
    const { movies, setMovies } = useContext( MovieContext )
    const [ currentReviewValue, setCurrentReviewValue ] = useState( review.review )
    const [ updateErrors, setUpdateErrors ] = useState( '' )


    const editReview = (e) => {
        e.preventDefault()
            fetch(`/reviews/${review.id}`, {
                method: 'PATCH',
                headers: { 'Content-Type' : 'application/json'},
                body: JSON.stringify({
                    review: currentReviewValue,
                })
            })
            .then((r) => r.json())
            .then((updatedReview) => {
                if( !updatedReview.errors ){
                    const updateSelectedMovieReviews = selectedMovie.reviews.map((review) => {
                        if( review.id === updatedReview.id ){
                            return updatedReview
                        } else {
                            return review
                        }
                    });

                    const setUpdateSelectedMovieReviews = movies.map((movie) => {
                        if( movie.id === updatedReview.movie_id ){
                            return {
                                ...selectedMovie,
                                reviews: updateSelectedMovieReviews
                            }
                        } else {
                            return movie
                        }
                    });

                    setMovies( setUpdateSelectedMovieReviews )
                    setShowEditReviewInput( true )
                } else {
                    const renderReviewErrors = updatedReview.errors.map((error) => <li> { error } </li>)
                    setUpdateErrors( renderReviewErrors )
                }
            })
        };

  return (
    <>
    <form className='reviewForm' onSubmit={ editReview }>
        <input
        className='reviewInput'
        type='text'
        value={ currentReviewValue }
        onChange={ (e) => setCurrentReviewValue(e.target.value) }
        />

        <div>
            <br/>
            <button className='reviewSubmitBtn' type='submit'> <b> Update </b> </button>
        </div>
    </form>
    <br/>
    { updateErrors }
    <br/>
    </>
  )
}
