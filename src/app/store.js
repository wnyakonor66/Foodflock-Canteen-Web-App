import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/slice";
import businessReducer from "../features/business/slice";
import mealReducer from "../features/meals/slice";

export default configureStore({
	reducer: {
		user: userReducer,
		business: businessReducer,
        meals: mealReducer,
	},
});
