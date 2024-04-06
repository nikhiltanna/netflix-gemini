import  { configureStore } from '@reduxjs/toolkit';
import  useReducer  from './UserSlice';
import movieReducer from './MovieSlice';
import gptReducer from './gptslice'
import configReducers from './configSlice';

const appStore = configureStore({
    reducer:
    {
        user:useReducer,
        movies:movieReducer,
        gpt:gptReducer,
        config:configReducers,
    }
});

export default appStore;