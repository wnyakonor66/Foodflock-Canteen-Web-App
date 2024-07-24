import React, { useEffect } from "react";
import SearchBar from "../Component/SearchBar";
import ClientMealCard from "../Component/ClientMealCard";
import { useDispatch, useSelector } from "react-redux";
import { getMeals } from "../thunk_action_creators/meal";

export default function Meals() {
	const meals = useSelector((state) => state.meals.data);
	const loading = useSelector((state) => state.meals.loading);
	const error = useSelector((state) => state.meals.error);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!loading) dispatch(getMeals());
	}, []);

	return (
		<div className="flex flex-col pt-3 px-3">
			<SearchBar />

			<div className="flex flex-row flex-wrap mt-5">
				{meals &&
					meals?.map((meal) => (
						<ClientMealCard
							key={meal._id}
							image={meal.image}
							name={meal.name}
                            price={meal.price}
                            meal_type={meal.meal_type}
                            description={meal.description}
						/>
					))}
			</div>
		</div>
	);
}
