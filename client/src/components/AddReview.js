import React, { useContext, useState } from 'react'
import { ReviewContext } from '../context/review'
import { MovieContext } from '../context/movie'

export default function AddReview({ movie }) {
  const { addReview } = useContext( ReviewContext )
  const { movies, setMovies } = useContext( MovieContext )
  const [ reviewData, setReviewData ] = useState( { review: ''})

  const handleSubmit = (e) => {
    e.preventDefault()
    const submitReview = {
      ...reviewData,
      movie_id: movie.id
    }
    addReview( submitReview, movies, setMovies)
    setReviewData( { review: '' } )
  }

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setReviewData({
      ...reviewData,
      [name]: value
    })
  }

  return (
    <form onSubmit={ handleSubmit }>
        <input
        className='reviewInput'
        name='review'
        type='text'
        placeholder='Leave A Review'
        value={ reviewData.review }
        onChange={ handleChange }
        />

        <br/>
        <button className='reviewSubmitBtn' type='submit'> <b> Submit </b> </button>
    </form>
  )
}
