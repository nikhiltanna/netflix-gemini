import { api_options } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addnowplayingMovies } from '../utils/MovieSlice';
import { useEffect } from 'react';

const Nowplayingmovies=()=>{
  const dispatch= useDispatch();
  const now_playing=useSelector((store)=>store.movies.nowplayingmovies);
  const nowplaying= async() =>{
    const data =await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', api_options);
    
    const json=await data.json();
    dispatch(addnowplayingMovies(json.results));
  }
  useEffect(()=>{
     !now_playing && nowplaying();
  },[]);
}

  export default Nowplayingmovies;