import { place, failed, get, start } from "../features/orders/slice";
import { server_url } from "../static/variables";

export const placeOrder = (form_data) => {
	return async (dispatch) => {
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

export const addDeliveryInfo = (form_data, order_id) => {
	return async (dispatch) => {
		dispatch(start());
		try {
			const response = await fetch(`${server_url}/order/delivery/${order_id}`, {
				method: "PUT",
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
			dispatch(getOrders());
		} catch (error) {
			dispatch(failed(error.message));
		}
	};
};

export const getOrders = () => {
	return async (dispatch) => {
		dispatch(start());
		try {
			const response = await fetch(`${server_url}/order`, {
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
			dispatch(get(data.orders));
		} catch (error) {
			dispatch(failed(error.message));
		}
	};
};

export const acceptOrder = (order_id, delivery_fee) => {
	console.log(order_id, delivery_fee);
	return async (dispatch) => {
		dispatch(start());
		try {
			const response = await fetch(`${server_url}/order/accept/${order_id}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ delivery_fee: delivery_fee }),
				credentials: "include",
			});
			if (!response.ok) {
				throw new Error(response.statusText);
			}
			const data = await response.json();
			dispatch(getOrders());
		} catch (error) {
			dispatch(failed(error.message));
		}
	};
};

export const cancelOrder = (order_id) => {
	return async (dispatch) => {
		dispatch(start());
		try {
			const response = await fetch(`${server_url}/order/cancel/${order_id}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				credentials: "include",
			});
			if (!response.ok) {
				throw new Error(response.statusText);
			}
			const data = await response.json();
			dispatch(getOrders());
		} catch (error) {
			dispatch(failed(error.message));
		}
	};
};

export const completeOrder = (order_id) => {
	return async (dispatch) => {
		dispatch(start());
		try {
			const response = await fetch(`${server_url}/order/complete/${order_id}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				credentials: "include",
			});
			if (!response.ok) {
				throw new Error(response.statusText);
			}
			const data = await response.json();
			dispatch(getOrders());
		} catch (error) {
			dispatch(failed(error.message));
		}
	};
};

export const updateRating = (order_id, rating) => {
	return async (dispatch) => {
		dispatch(start());
		try {
			const response = await fetch(`${server_url}/order/rate/${order_id}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ rating: rating }),
				credentials: "include",
			});
			if (!response.ok) {
				throw new Error(response.statusText);
			}
			const data = await response.json();
			dispatch(getOrders());
		} catch (error) {
			dispatch(failed(error.message));
		}
	};
};
