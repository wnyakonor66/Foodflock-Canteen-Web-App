import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/slice";
import businessReducer from "../features/business/slice";

export default configureStore({
	reducer: {
        user: userReducer,
        business: businessReducer,
    },
});
