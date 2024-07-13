import {
	registerStart,
	registerSuccess,
	registerFailed,
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
			});

			const data = await response.json();
			dispatch(registerSuccess(data.user));
		} catch (error) {
			dispatch(registerFailed(error.message));
		}
	};
};
