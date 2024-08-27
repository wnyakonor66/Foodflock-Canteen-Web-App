import {
	registerStart,
	registerSuccess,
	registerFailed,
	login,
	loginFailed,
	loginStart,
} from "../features/users/slice";
import { server_url } from "../static/variables";

export const registerUser = (form_data) => {
	return async (dispatch) => {
		dispatch(registerStart());
		try {
			const response = await fetch(`${server_url}/auth/register`, {
				method: "POST",
				body: JSON.stringify(form_data),
				headers: { "Content-Type": "application/json" },
				credentials: "include",
			});

			const data = await response.json();
			if (!response.ok) {
				throw new Error(data.message);
			}
			dispatch(registerSuccess(data.user));
		} catch (error) {
			dispatch(registerFailed(error.message));
		}
	};
};

export const loginUser = (form_data) => {
	return async (dispatch) => {
		dispatch(loginStart());
		try {
			const response = await fetch(`${server_url}/auth/login`, {
				method: "POST",
				body: JSON.stringify(form_data),
				headers: { "Content-Type": "application/json" },
				credentials: "include",
			});
			const data = await response.json();
			if (!response.ok) {
				throw new Error(data.message);
			}
			dispatch(login(data.user));
		} catch (error) {
			dispatch(loginFailed(error?.message));
		}
	};
};
