import React from "react";
import { useNavigate } from "react-router-dom";
export default function MealCard({
	name,
	business,
	price,
	image,
	description,
}) {
	const navigate = useNavigate();
	return (
		<div
			className="flex flex-row m-2 items-center h-40 hover:shadow-xl shadow-md font-roboto border border-gray-400 cursor-pointer"
			onClick={() => {
				navigate("/client/order");
			}}
		>
			<div className="w-36 h-36 ml-2">
				<img src={image} alt="meal" className="w-full h-full" />
			</div>
			<div className="flex flex-col justify-center w-[290px]  pl-1 pt-2 pr-5">
				<div className="flex flex-row justify-between w-full">
					<span className="font-semibold">{name}</span>
					<span className="">{price}</span>
				</div>
				<div>
					<span className="text-sm font-mono hover:underline">{business}</span>
				</div>
				<div className="mt-2">
					<span className="text-xs text-gray-400">{description}</span>
				</div>
			</div>
		</div>
	);
}
