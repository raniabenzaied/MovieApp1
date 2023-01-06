import React from 'react'
import Card from 'react-bootstrap/Card';
import Rate from './Rate'
function MovieCard({movie}) {
    console.log(movie)
  return (
    <div className ='card-container'> 
    <Card style={{ width: '18rem' }}>

      <Card.Img variant="top" src={movie.posterUrl} />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>
         {movie.description}
        </Card.Text>
        <Rate rate = {movie.Rate}/>
      </Card.Body>
    </Card>    
    </div>
  )
}

export default MovieCard
