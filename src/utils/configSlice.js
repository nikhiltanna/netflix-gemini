import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: "language",
    initialState: {
        userlang: "en",
    },
    reducers: {
        changelanguage: (state,action) => {
            state.userlang = action.payload; // Toggle the value
        },
    },
});

export const { changelanguage } = configSlice.actions;
export default configSlice.reducer;
