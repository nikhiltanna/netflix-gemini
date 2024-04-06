import React, { useEffect } from 'react'
import Header from './Header';
import  Nowplayingmovies  from '../hooks/useNowplayingmovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import Popularmovies from '../hooks/usePopularmovies';
import Searchgpt from './Searchgpt';
import { useSelector } from 'react-redux';

export const Browse = () => {
  const SHOWGPT=useSelector((store)=>store.gpt.showGptSearch);
  Nowplayingmovies();
  Popularmovies();
  return (
    <>
    <Header/>
    {SHOWGPT?(    <Searchgpt  />)
    :(
      <>
      <MainContainer/>
      <SecondaryContainer/>
      </>)}

    
    </>
  )
}

export default Browse;
