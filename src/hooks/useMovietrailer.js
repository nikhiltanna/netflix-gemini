
import { api_options } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import {addTrailer} from '../utils/MovieSlice'
import { useEffect } from 'react';

const useMovietrailer = (mid) => {
    const dispatch = useDispatch();
    const movietrailer= useSelector((store)=>store.movies.trailer)
    const getVideo=async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/'+mid+'/videos?language=en-US', api_options);
        const json= await data.json();
        const filtereddata= json?.results.filter((video)=>video.type=="Trailer");
        const trailer=filtereddata.length?filtereddata[0]:json.results[0];
        dispatch(addTrailer(trailer));
    }
    useEffect(()=>{
       !movietrailer&& getVideo();
    },[])
}

export default useMovietrailer