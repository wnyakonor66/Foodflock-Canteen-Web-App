import React from "react";
import { FaStar } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

// import { useNavigate } from "react-router-dom";
export default function ClientMealCard({
	image,
	name,
	description,
	price,
	meal_type,
	rating = 4.5,
	onClick,
}) {
	return (
		<div className="flex flex-row border w-[450px] h-52 items-center mr-2 rounded-xl shadow-md hover:shadow-xl">
			<div className="w-2/5 flex justify-center  items-center">
				<div className="h-40 w-40 bg-slate-400 rounded-xl">
					<img
						src={`${process.env.REACT_APP_SERVER_URL}/${image}`}
						alt="meal"
						className="h-full w-full object-cover rounded-xl"
					/>
				</div>
			</div>
			<div className="w-3/5 flex flex-col">
				<div className="flex flex-row w-full h-28">
					<div className="flex flex-col w-4/5">
						<div className="font-roboto font-bold text-lg mb-2">{name}</div>
						<div className="text-sm pr-1 text-gray-600">{description}</div>
					</div>
					<div className="flex flex-col w-1/5 text-xl font-roboto font-bold">
                    ₵ {price}
					</div>
				</div>
				<div className="flex flex-row w-full h-12 justify-between pr-2">
					<div className="w-10 h-full border flex items-center justify-center bg-slate-900 rounded-lg font-bold capitalize text-white">
						{meal_type?.substring(0, 2)}
					</div>
					<div className="w-[30%] h-full border flex items-center justify-center bg-slate-900 rounded-lg font-bold capitalize text-white">
						<FaStar className="text-yellow-500 mr-1 " />
						<span>{rating || "N/A"}</span>
					</div>
					<div
						className="w-[40%] h-full border flex items-center justify-center  bg-slate-900 rounded-lg font-bold capitalize text-white cursor-pointer hover:shadow-xl"
						onClick={onClick}
					>
						<FaCartShopping className="mr-1" />
						<span>Order</span>
					</div>
				</div>
			</div>
		</div>
	);
}
