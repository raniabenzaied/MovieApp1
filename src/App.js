import React from 'react'
import NavBar from './Components/NavBar'
import Filter from './Components/Filter'
import '../src/styles.css'
import AddMovie from './Components/AddMovie'
import {useState } from 'react'
import MovieList from './Components/MovieList'
import MovieCard from './Components/MovieCard'
import Rate from './Components/Rate'
const App = () => {
  const moviesData = [{
    id: 1,
    Title: "Taken",
    description: "Taken est une série de films d'action français coécrite et produite par Luc Besson. Elle débute en 2008 avec Taken",
    posterUrl: "https://lumiere-a.akamaihd.net/v1/images/image_efeee89d.jpeg",
    Rate: "4"
},


{
  id: 2,
  Title: "Equalizer",
  description: "Si vous avez un problème et que vous ne savez pas vers qui vous tourner, le mystérieux et insaisissable Robert McCall est le justicier dont vous aurez besoin. Cette fois, le passé de McCall le rattrape lorsque des bandits tuent Susan Plummer - sa meilleure amie et ancienne collègue.",
  posterUrl: "https://m.media-amazon.com/images/M/MV5BMTU2OTYzODQyMF5BMl5BanBnXkFtZTgwNjU3Njk5NTM@._V1_FMjpg_UX1000_.jpg",
  Rate: "4"
},


{
  id: 3,
  Title: "Anna",
  description: "Derrière sa beauté stupéfiante, Anna Poliatova dissimule une force et des aptitudes hors du commun qui font d'elle l'un des assassins les plus redoutés au monde. Sa nouvelle cible étant à Paris, elle entame sa mission sans renforts et avec les autorités internationales à ses trousses.",
  posterUrl: "https://m.media-amazon.com/images/M/MV5BOWUyYTU4NTQtYWQ2Mi00NzE0LTk0OTMtN2MzNjRkZjFkZTU2XkEyXkFqcGdeQXVyNDkzNTM2ODg@._V1_.jpg",
  Rate: "4"
},


{
  id: 4,
  Title: "Red Notice",
  description: "Lorsqu'Interpol déclenche une Alerte Rouge, destinée à traquer et à capturer les criminels les plus recherchés au monde, le FBI fait appel à son meilleur profiler, John Hartley.",
  posterUrl: "https://m.media-amazon.com/images/M/MV5BZmRjODgyMzEtMzIxYS00OWY2LTk4YjUtMGMzZjMzMTZiN2Q0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
  Rate: "5"
},


{
  id: 5,
  Title: 'Sweet Girl',
  description: "Ray Cooper, père de famille dévoué, jure de demander justice contre la société pharmaceutique responsable du retrait du marché d'un médicament qui aurait pu sauver la vie de sa femme. Sa recherche de la vérité bouleverse des forces puissantes et met Ray et sa fille Rachel en danger.",
  posterUrl: "https://www.themoviedb.org/t/p/original/cP7odDzzFBD9ycxj2laTeFWGLjD.jpg",
  Rate: "4"
},


{
  id: 6,
  Title: "Close",
  description: "Une experte en lutte antiterroriste est obligée de devenir garde du corps pour une riche et jeune héritière à Bangkok. L'entente ne règne guère entre les deux femmes, mais suite à une violente tentative d'enlèvement, elles sont obligées de s'unir pour survivre et démasquer leurs assaillants.",
  posterUrl: "https://m.media-amazon.com/images/M/MV5BYzI5OTUzZjktMDE4Zi00YjE3LWIzNWQtNDFjZWQyMDVkY2I1XkEyXkFqcGdeQXVyMTg1MzYyMzQ@._V1_.jpg",
  Rate: "4"
}
,


{
  id: 7,
  Title: "Six Underground",
  description: "Le meilleur avantage d'être mort c'est la liberté qu'elle vous procure. Soudainement, vous n'êtes plus obligé de répondre à quiconque ou d'obéir aux règles de la société. Dans ce film, un mystèrieux milliardaire réunit cinq personnes qui ont simulé leur propre mort afin d'augmenter leur champ d'action pour accomplir une mission. Ils ont pour objectif d'éliminer les plus puissants criminels et dictateurs dans le monde.",
  posterUrl: "https://m.media-amazon.com/images/M/MV5BNzE2ZjQxNjEtNmI2ZS00ZmU0LTg4M2YtYzVhYmRiYWU0YzI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
  Rate: "4"
}
,


{
  id:8,
  Title: "Bright",
  description: "Dans un monde contemporain parallèle, les humains vivent depuis la nuit des temps avec les orcs, les elfes, les centaures, les fées. Si la magie est une réalité, sa pratique est interdite. Daryl Ward, un policier humain du LAPD, est contraint de faire équipe avec Nick Jakoby, le premier policier orc. Lors d'une patrouille nocturne de routine, ils voient leur avenir et leur monde se métamorphoser à jamais.",
  posterUrl: "https://m.media-amazon.com/images/M/MV5BMTcyNzk5NDg1Nl5BMl5BanBnXkFtZTgwNTM5MDQxNDM@._V1_.jpg",
  Rate: "4"
}]


console.log ('moviesData',moviesData)
 


//state movielist

const [movieList,setmovieList] = useState(moviesData)

//

const addHandler = (newMovie)=>
{
  setmovieList(
    [...movieList,newMovie]
  )
}
console.log (movieList)
const [movie,setMovie] = useState('')

//search by title

const [search,setSearch] = useState('')


//search by rate 
const [rate,setRate] = useState('')



  return (
    <div className = 'App'>
     <NavBar/>
     <Filter setSearch ={setSearch} setRate={setRate} rate={rate}/>
     <AddMovie addHandler={addHandler} />
     <MovieList movieList = {movieList} search={search} setRate={setRate} />
     <MovieCard  movie = {movie}/>
     <Rate  />
    </div>
  )
}

export default App
