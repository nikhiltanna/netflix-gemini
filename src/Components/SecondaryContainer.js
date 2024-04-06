import React from 'react'
import Movielist from './Movielist'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const movies=useSelector(store=>store.movies)
  return (
    movies&& 
    <div className='mt-0 bg-black -mt-80 relative z-20'>
        <Movielist title={"Now Playing"} movies={movies.nowplayingmovies}/>
        <Movielist title={"Trending"} movies={movies.nowplayingmovies}/>
        <Movielist title={"Popular"} movies={movies.popularmovies}/>
        <Movielist title={"Now Playing"} movies={movies.nowplayingmovies}/>
    </div>
  )
}

export default SecondaryContainer