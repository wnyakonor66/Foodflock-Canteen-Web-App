import { add, failed, start, get } from "../features/business/slice";
import { server_url } from "../static/variables";

export const addBusiness = (form_data) => {
	return async (dispatch) => {
		dispatch(start());
		try {
			const response = await fetch(`${server_url}/auth/register/business`, {
				method: "POST",
				body: JSON.stringify(form_data),
				headers: {
					"Content-Type": "application/json",
				},
				credentials: "include",
			});
			if (!response.ok) {
				throw new Error(response.statusText);
			}
			const data = await response.json();
			dispatch(add(data.business));
		} catch (error) {
			dispatch(failed(error.message));
		}
	};
};

export const getBusiness = () => {
	return async (dispatch) => {
		dispatch(start());

		try {
			const response = await fetch(`${server_url}/business`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
				credentials: "include",
			});
			if (!response.ok) {
				throw new Error(response.statusText);
			}
			const data = await response.json();

			dispatch(get(data.business));
		} catch (error) {
			dispatch(failed(error.message));
		}
	};
};

export const updateBusiness = (form_data) => {
	return async (dispatch) => {
		dispatch(start());
		try {
			const response = await fetch(`${server_url}/business`, {
				method: "PUT",
				body: JSON.stringify({updates: form_data}),
				headers: {
					"Content-Type": "application/json",
				},
				credentials: "include",
			});
			if (!response.ok) {
				throw new Error(response.statusText);
			}
			const data = await response.json();
			dispatch(get(data.business));
		} catch (error) {
			dispatch(failed(error.message));
		}
	};
};

export const getAllBusinesses = () => {
	return async (dispatch) => {
		dispatch(start());

		try {
			const response = await fetch(`${server_url}/business/all`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
				credentials: "include",
			});
			if (!response.ok) {
				throw new Error(response.statusText);
			}
			const data = await response.json();

			dispatch(get(data.businesses));
		} catch (error) {
			dispatch(failed(error.message));
		}
	};
};