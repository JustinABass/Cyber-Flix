import React, { useState, useEffect } from "react";

const ReviewContext = React.createContext()

function ReviewProvider({ children }) {
    const [ reviews, setReviews ] = useState( [] )

    useEffect(() => {
        fetch('/reviews')
        .then((r) => r.json())
        .then((reviews) => {
            setReviews(reviews)
        })
    }, [])


    const addReview = ( review, movies, setMovies ) => {
        fetch('/reviews',{
            method: 'POST',
            headers:{ 'Content-Type' : 'application/json'},
            body: JSON.stringify( review )
        })
        .then((r) => r.json())
        .then(( newReview ) => {
            const movieReviewMatch = movies.map((movie) => {
                if( movie.id === newReview.movie_id ){
                    const updateMovieReviews = {
                        ...movie,
                        reviews: [ ...movie.reviews, newReview]
                    };
                    return updateMovieReviews
                } else {
                    return movie
                }
            });
            setMovies(movieReviewMatch)
        })
    }


    return(
        <ReviewContext.Provider
        value={{ reviews, setReviews, addReview }}>
            {children}
        </ReviewContext.Provider>
    )
}

export { ReviewContext, ReviewProvider}