import React from 'react'
import { image_url } from '../utils/constants'

const Moviecard = ({poster_path}) => {
  if(!poster_path) return null;
  return (
    <div className='w-36 pr-4 md:w-48 '>
        <img   src={image_url+poster_path}/>
    </div>
  )
}

export default Moviecard