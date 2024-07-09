import {
	registerStart,
	registerSuccess,
	registerFailed,
} from "../features/users/slice";
import { server_url } from "../static/variables";

export const registerUser = (email, password) => {
	return async (dispatch) => {
		dispatch(registerStart());
		try {
			const response = await fetch(`${server_url}/auth/register`, {
				method: "POST",
				body: JSON.stringify({ email, password }),
			});

			const data = await response.json();
			dispatch(registerSuccess(data));
		} catch (error) {
			dispatch(registerFailed(error.message));
		}
	};
};
