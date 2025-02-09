import { get, failed, start, add, update } from "../features/meals/slice";
import { server_url } from "../static/variables";

export const getMeals = () => {
	return async (dispatch) => {
		dispatch(start());
		try {
			const response = await fetch(`${server_url}/meals`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
				credentials: "include",
			});

			const data = await response.json();
			dispatch(get(data.meals));
		} catch (error) {
			dispatch(failed(error.message));
		}
	};
};

export const getRecommendedMeals = () => {
	return async (dispatch) => {
		dispatch(start());
		try {
			const response = await fetch(`${server_url}/meals/recommended`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
				credentials: "include",
			});

			const data = await response.json();
			dispatch(get(data.meals));
		} catch (error) {
			dispatch(failed(error.message));
		}
	};
};

export const addMeal = (form_data) => {
	console.log(form_data);
	return async (dispatch) => {
		dispatch(start());
		try {
			const response = await fetch(`${server_url}/meals`, {
				method: "POST",
				body: form_data,
				// headers: {
				// 	"Content-Type": "multipart/form-data",
				// },
				credentials: "include",
			});
			if (!response.ok) {
				throw new Error(response.statusText);
			}
			// const data = await response.json();
			// dispatch(add(data.meals));
            dispatch(getMeals());
		} catch (error) {
			dispatch(failed(error.message));
		}
	};
};

export const updateMeal = (updates, meal_id) => {
	return async (dispatch) => {
		dispatch(start());
		try {
			const response = await fetch(`${server_url}/meals/${meal_id}`, {
				method: "PUT",
				body: updates,
				credentials: "include",
			});

			if (!response.ok) {
				throw new Error(response.statusText);
			}
			// const data = await response.json();
			// dispatch(update(data.meals));
            dispatch(getMeals());
		} catch (error) {
			dispatch(failed(error.message));
		}
	};
};

export const deleteMeal = (meal_id) => {
	return async (dispatch) => {
		dispatch(start());
		try {
			const response = await fetch(`${server_url}/meals/${meal_id}`, {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
				},
				credentials: "include",
			});

			const data = await response.json();
			dispatch(getMeals());
		} catch (error) {
			dispatch(failed(error.message));
		}
	};
};
