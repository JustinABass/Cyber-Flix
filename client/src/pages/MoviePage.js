import React, { useContext } from 'react'
import { MovieContext } from '../context/movie'
import { useParams } from "react-router-dom";

export default function MoviePage() {
    const { movies } = useContext( MovieContext )
    const { id } = useParams()

    const currentMovie = movies.find((movie) => movie.id === id)
  return (
    <div>MoviePage</div>
  )
}
