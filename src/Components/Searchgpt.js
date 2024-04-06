import React from 'react';
import GptSearchbar from './GptSearchbar';
import GptMoviesSuggestion from './GptMoviesSuggestions'
const Searchgpt = () => {
  return (
    <div>
        <div className='fixed -z-10'>
        <img  className=' h-screen object-cover md:h-full' src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg"
         alt="background">
        </img>
        </div>
        <div className='pt-[20%] md:p-0'>
        <GptSearchbar/>
        <GptMoviesSuggestion/>
        </div>
    </div>
  )
}

export default Searchgpt