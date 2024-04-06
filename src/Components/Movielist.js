import React from 'react'
import Moviecard from './Moviecard'

const Movielist = ({title,movies}) => {
  return (
    <div className='px-6'>
      <h1 className='text-xl font-bold py-5 text-white'>{title}</h1>
    <div className='flex  overflow-x-scroll no-scrollbar'>
        <div className='flex'>
        {movies?.map((movie)=>(<Moviecard key={movie.id} poster_path={movie.poster_path}/>))}
        </div>
        </div>
    </div>
  )
}

export default Movielist