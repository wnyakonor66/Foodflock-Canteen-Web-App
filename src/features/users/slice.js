import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
	name: "user",
	initialState: {
		data: null,
		isLoading: false,
		error: null,
	},
	reducers: {
		login: (state, action) => {
			state.data = action.payload;
			state.isLoading = false;
		},
		logout: (state) => {
			state.data = null;
			state.isLoading = false;
		},
		loginFailed: (state, action) => {
			state.error = action.payload;
			state.isLoading = false;
		},
		loginStart: (state) => {
			state.isLoading = true;
		},

		registerSuccess: (state, action) => {
			state.data = action.payload;
			state.isLoading = false;
		},

		registerFailed: (state, action) => {
			state.error = action.payload;
			state.isLoading = false;
		},

		registerStart: (state) => {
			state.isLoading = true;
		},
	},
});

export const {
	login,
	logout,
	loginFailed,
	loginStart,
	register,
	registerFailed,
	registerStart,
} = userSlice.actions;
export default userSlice.reducer;
