import React from "react";
import CatNumber from "./CatNumber";
import PropValue from "./PropValue";
import { FaHeart, FaStar } from "react-icons/fa6";

export default function VendorCard({
	name,
	email,
	phone,
	delivery,
	description,
	stars = 4.5,
	favorites = 21,
}) {
	return (
		<div className="flex flex-col h-96 w-[400px] border p-2 mr-2 shadow-md hover:shadow-xl">
			<div className="flex flex-row items-center">
				<div className="text-lg font-bold ml-2">Vendor Information</div>
			</div>
			<div className="flex flex-col items-center">
				<PropValue property="Business Name:" value={name} />
				<PropValue property="Business Email:" value={email} />
				<PropValue property="Phone:" value={phone} />
				<PropValue property="Makes Deliveries:" value={delivery} />
			</div>

			<div className="h-full mt-2 ">
				<div className="text-sm font-semibold text-gray-500">Description: </div>
				<div className="text-sm mt-1">{description}</div>
			</div>
			<div className="flex flex-row justify-between justify-self-end">
				<div className="flex flex-row items-center border px-3 py-3 cursor-pointer">
					<FaHeart className={`text-red-500 mr-2`} size={22} />
					<span>{favorites} Favorites</span>
				</div>
				<div className="flex flex-row items-center border px-3 py-3">
					<FaStar className="text-yellow-500 mr-2 " size={22} />
					<span>{stars} Ratings</span>
				</div>
			</div>
		</div>
	);
}
