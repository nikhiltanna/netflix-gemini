import React from 'react'

const Videotitle = ({overview,title}) => {
   
  return (
    <div className='pt-[25%] px-1 md:pt-[10%] md:px-12 absolute  from-black text-white w-screen aspect-video '>
    <h1 className='text-2xl md:text-4xl font-bold'>{title}</h1>
    <p className='hidden md:inline-block text-lg py-6 w-1/4'>{overview}</p>
    <div>
    <button className='py-1 md:py-3 px-6 md:px-14 text-xl text-black m-2 rounded-lg bg-white font-bold hover:bg-opacity-70'>▶Play</button>
    <button className='hidden md:inline-block py-1 md:py-3 px-6 md:px-14 text-xl text-black m-2 rounded-lg bg-white font-bold'>MoreInfo</button>
    </div>
    </div>
  )
}

export default Videotitle