import React from "react";
import MealCard from "../Component/MealCard";

export default function Meals() {
	return (
		<div className="flex flex-col pl-5">
			<div></div>
			<div className="flex flex-row mt-2 flex-wrap">
				<MealCard
					name="Meal 1"
					price="$10"
					business="Business 1"
					description="Best of the best"
					image="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
				/>

				<MealCard
					name="Meal 1"
					price="$10"
					business="Business 1"
					description="Best of the best"
					image="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
				/>

				<MealCard
					name="Meal 1"
					price="$10"
					business="Business 1"
					description="Best of the best"
					image="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
				/>

				<MealCard
					name="Meal 1"
					price="$10"
					business="Business 1"
					description="Best of the best"
					image="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
				/>

				<MealCard
					name="Meal 1"
					price="$10"
					business="Business 1"
					description="Best of the best"
					image="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
				/>
			</div>
		</div>
	);
}
