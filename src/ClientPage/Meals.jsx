import React, { useEffect, useState } from "react";
import SearchBar from "../Component/SearchBar";
import ClientMealCard from "../Component/ClientMealCard";
import { useDispatch, useSelector } from "react-redux";
import { getMeals, getRecommendedMeals } from "../thunk_action_creators/meal";
import { OrderModal } from "../Component/OrderModal";

export default function Meals() {
	const [showModal, setShowModal] = useState(false);
	const [selectedMeal, selectMeal] = useState(null);
	const meals = useSelector((state) => state.meals.data);
	const loading = useSelector((state) => state.meals.isLoading);
	const error = useSelector((state) => state.meals.error);
	const [searchTerm, setSearchTerm] = useState("");
	const dispatch = useDispatch();

	useEffect(() => {
		if (!loading) dispatch(getMeals());
	}, []);

	return (
		<div className="flex flex-col pt-3 px-3">
			<OrderModal
				showModal={showModal}
				setShowModal={() => setShowModal(false)}
				meal={selectedMeal}
			/>
			<div className="w-full flex flex-row">
				<SearchBar
					onSearch={(e) => setSearchTerm(e.target.value)}
					value={searchTerm}
				/>
				{/* Recommend button*/}
				<div className="ml-5">
					<button
						className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
						onClick={() => {
							dispatch(getRecommendedMeals());
						}}
                        disabled={loading}
					>
						{loading ? "Recommending..." : "Recommend"}
					</button>
				</div>
			</div>

			<div className="flex flex-row flex-wrap mt-5">
				{meals &&
					meals?.map((meal, index) => {
						if (meal.name.toLowerCase().includes(searchTerm.toLowerCase()))
							return (
								<ClientMealCard
									key={meal._id}
									image={meal.image}
									name={meal.name}
									price={meal.price}
									meal_type={meal.meal_type}
									description={meal.description}
									rating={meal.rating}
									onClick={() => {
										selectMeal(meal);
										setShowModal(true);
									}}
								/>
							);
						return null;
					})}
			</div>
		</div>
	);
}
