import React from 'react'
import Videotitle from './Videotitle'
import  Videobackground  from './Videobackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const movie= useSelector((store)=>store.movies?.nowplayingmovies);
    if(!movie)return ;
    const mainMovies=movie[0];
    //console.log(mainMovies);
  return (
    <div className='pt-[30%] bg-black md:p-0'>
    <Videotitle overview={mainMovies.overview} title={mainMovies.title}/>
    <Videobackground mid={mainMovies.id}/>
    </div>
  )
}

export default MainContainer