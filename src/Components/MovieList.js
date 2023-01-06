import React from 'react'
import MovieCard from './MovieCard'
function MovieList({movieList , search , rate}) {
  return (
    <div className='movieList-container'>{
      movieList.filter(el=>el.Title.toUpperCase().includes(search.toUpperCase().trim()))
       .map((el,key)=> <MovieCard   key = {el.id} movie = {el} />)
    }
      
    </div>
  )
}

export default MovieList
