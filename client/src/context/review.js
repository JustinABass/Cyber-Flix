import React, { useContext, useState, useEffect } from "react";

const ReviewContext = React.createContext()

function ReviewProvider({ children }) {
    const [ reviews, setReviews ] = useState( [] )
    const [ reviewErrors, setReviewErrors ] = useState( '' )

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
            if( !newReview.errors ){
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
            } else {
                const errorsList = newReview.errors.map((error) => <li> {error} </li>)
                setReviewErrors( errorsList )
            }
        })
    }


    return(
        <ReviewContext.Provider
        value={{ reviews, setReviews, addReview, reviewErrors, setReviewErrors }}>
            {children}
        </ReviewContext.Provider>
    )
}

export { ReviewContext, ReviewProvider}