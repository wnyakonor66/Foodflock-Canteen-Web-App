import { place, failed, get, start } from "../features/orders/slice";
import { server_url } from "../static/variables";

export const placeOrder = (form_data) => {
	return async (dispatch) => {
		console.log(form_data);
		dispatch(start());
		try {
			const response = await fetch(`${server_url}/order`, {
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
			dispatch(place(data.orders));
		} catch (error) {
			dispatch(failed(error.message));
		}
	};
};
