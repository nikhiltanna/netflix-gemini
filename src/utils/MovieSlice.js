import { createSlice } from "@reduxjs/toolkit";

const movieSlice= createSlice({
    name:"nowplayingmovies",
    initialState: {
        nowplayingmovies:null,
        trailer:null,
        popularmovies:null,
    },
    reducers:
    {
        addnowplayingMovies:(state,action)=>
        {
            state.nowplayingmovies=action.payload;
        },
        removeMovies:(state,action)=>{
            return null
        },
        addTrailer:(state,action)=>
        {
            state.trailer=action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularmovies=action.payload;
        },
    }
})

export const  {addnowplayingMovies, removeMovies,addTrailer,addPopularMovies}= movieSlice.actions;
export default movieSlice.reducer;