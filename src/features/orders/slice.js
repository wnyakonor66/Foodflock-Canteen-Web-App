import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
    name: "order",
    initialState: {
        data: null,
        isLoading: false,
        error: null,
    },
    reducers: {
        place: (state, action) => {
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

export const { place, failed, start, get } = orderSlice.actions;
export default orderSlice.reducer;
