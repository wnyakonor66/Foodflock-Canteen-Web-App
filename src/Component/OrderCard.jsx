import React from "react";
import PropValue from "./PropValue";
import { MdCancel, MdOutlineDone, MdPendingActions } from "react-icons/md";

export default function OrderCard({ order }) {
	return (
		<div className="flex flex-col h-fit w-[400px] border p-2 mr-2 mb-5 shadow-md hover:shadow-xl">
			<div className="flex flex-row items-center">
				<div className="text-lg font-bold ml-2">Order Information</div>
			</div>
			<div className="flex flex-col items-center">
				<PropValue property="Meal Name:" value={order?.meal_name} />
				<PropValue
					property="Price:"
					value={"GHC " + (order?.meal?.price * order?.meal?.quantity || "")}
				/>
				<PropValue property="Quantity:" value={order?.meal?.quantity} />
				<PropValue property="Type" value="Pickup" />
				<PropValue property="Delivery Fee:" value="GHC 0.00" />
				<PropValue property="Status:" value={order?.status} />
			</div>
			<div className="flex flex-row mt-2">
				<div className="flex flex-row items-center border px-3 py-3 cursor-pointer hover:shadow-xl hover:bg-green-200">
					{order?.acceptedByVendor ? (
						<>
							<MdOutlineDone className={`text-green-500 mr-2`} size={22} />
							<span>Order Accepted</span>
						</>
					) : (
						<>
							<MdPendingActions className={`text-green-500 mr-2`} size={22} />
							<span>Order Pending</span>
						</>
					)}
				</div>

				{/* cancel order button */}
				<div className="flex flex-row  ml-3 items-center border px-3 py-3 cursor-pointer hover:shadow-xl hover:bg-red-200">
					<MdCancel className={`text-red-500 mr-2`} size={22} />
					<span>Cancel Order</span>
				</div>
			</div>
		</div>
	);
}
