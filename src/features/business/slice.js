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
        },
        failed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        start: (state) => {
            state.isLoading = true;
        },
    },
});

export const { add, failed, start } = businessSlice.actions;
export default businessSlice.reducer;
