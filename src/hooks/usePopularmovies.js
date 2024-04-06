import { api_options } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addPopularMovies } from '../utils/MovieSlice';
import { useEffect } from 'react';

const Popularmovies=()=>{
  const dispatch= useDispatch();
  const pop_playing=useSelector(store=>store.movies.popularmovies)
  const nowplaying= async() =>{
    const data =await fetch('https://api.themoviedb.org/3/movie/popular?page=1', api_options);
    
    const json=await data.json();
    dispatch(addPopularMovies(json.results));
  }
  useEffect(()=>{
    !pop_playing&& nowplaying();
  },[]);
}

  export default Popularmovies;