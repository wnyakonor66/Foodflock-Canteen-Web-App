import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/slice";
import businessReducer from "../features/business/slice";
import mealReducer from "../features/meals/slice";
import orderReducer from "../features/orders/slice";

export default configureStore({
	reducer: {
		user: userReducer,
		business: businessReducer,
        meals: mealReducer,
        orders: orderReducer
	},
});
