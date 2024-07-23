import { createSlice } from "@reduxjs/toolkit";

export const businessSlice = createSlice({
    name: "business",
    initialState: {
        data: null,
        isLoading: false,
        error: null,
    },
    reducers: {
        add: (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
            state.error = null;
        },
        failed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
            state.data = null;
        },
        start: (state) => {
            state.isLoading = true;
        },
        get: (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
            state.error = null;
        },
    },
});

export const { add, failed, start, get } = businessSlice.actions;
export default businessSlice.reducer;
