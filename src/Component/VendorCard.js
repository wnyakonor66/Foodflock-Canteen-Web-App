import React from "react";
import CatNumber from "./CatNumber";
import PropValue from "./PropValue";
import { FaHeart, FaStar } from "react-icons/fa6";

export default function VendorCard() {
	// const navigate = useNavigate();
	return (
		<div className="flex flex-col h-96 w-[400px] border p-2 mr-2">
			<div className="flex flex-row items-center">
				<div className="text-lg font-bold ml-2">Vendor Information</div>
			</div>
			<div className="flex flex-col items-center">
				<PropValue property="Business Name:" value="Vendor Name" />
				<PropValue property="Business Email:" value="a@a.com" />
				<PropValue property="Phone:" value="123-456-7890" />
				<PropValue property="Makes Deliveries:" value="Yes" />
			</div>

			<div className="h-full mt-2 ">
				<div className="text-sm font-semibold text-gray-500">Description: </div>
				<div className="text-sm mt-1">We have the best food at the best price. Make your order now!</div>
			</div>
			<div className="flex flex-row justify-between justify-self-end">
				<div className="flex flex-row items-center border px-3 py-3 cursor-pointer">
					<FaHeart className={`text-red-500 mr-2`} size={22} />
					<span>21 Favorites</span>
				</div>
				<div className="flex flex-row items-center border px-3 py-3">
					<FaStar className="text-yellow-500 mr-2 " size={22} />
					<span>4.5 Ratings</span>
				</div>
			</div>
		</div>
	);
}
