import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
        geminimovies:null,
        moviesnames:null,
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch; // Toggle the value
        },
        addgeminimovies: (state,action) => {
            state.geminimovies = action.payload; // Toggle the value
        },
        addmovienames: (state, action) => { 
            state.moviesnames = action.payload;
        }
    },
});

export const { toggleGptSearchView,addgeminimovies,addmovienames } = gptSlice.actions;
export default gptSlice.reducer;
