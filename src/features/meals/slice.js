import { createSlice } from "@reduxjs/toolkit";

export const mealSlice = createSlice({
	name: "meals",
	initialState: {
		data: null,
		isLoading: false,
		error: null,
	},
	reducers: {
		get: (state, action) => {
			state.isLoading = false;
			state.data = action.payload;
			state.error = null;
		},
		failed: (state, action) => {
			state.error = action.payload;
			state.isLoading = false;
		},
		start: (state) => {
			state.isLoading = true;
		},
		add: (state, action) => {
			state.data = action.payload;
			state.isLoading = false;
			state.error = null;
		},
        update: (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
            state.error = null;
        },
        remove: (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
            state.error = null;
        }
	},
});

export const {get, failed, start, add, update, remove} = mealSlice.actions;
export default mealSlice.reducer;
