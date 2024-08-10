import React, { useState } from "react";
import PropValue from "./PropValue";
import { MdCancel, MdOutlineDone } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
	acceptOrder,
	cancelOrder,
	completeOrder,
} from "../thunk_action_creators/order";
import InputText from "./InputText";
import { IoStarSharp } from "react-icons/io5";

export default function VendorOrderCard({ order }) {
	const [rating, setRating] = useState(order?.rating || 0);
	const [deliveryFee, setDeliveryFee] = useState(order?.deliveryCharge || 0);
	const dispatch = useDispatch();

	return (
		<div className="flex flex-col h-fit w-[400px] border p-2 mr-2 mb-5 shadow-md hover:shadow-xl">
			<div className="flex flex-row items-center">
				<div className="text-lg font-bold ml-2">Order Information</div>
			</div>
			<div className="flex flex-col items-center ml-2">
				<PropValue property="Meal Name:" value={order?.meal_name} />
				<PropValue
					property="Price:"
					value={"GHC " + (order?.meal?.price * order?.meal?.quantity || "")}
				/>
				<PropValue property="Quantity:" value={order?.meal?.quantity} />
				<PropValue property="Type" value={order?.orderType} />
				<PropValue
					property="Delivery Fee:"
					value={"GHC " + order?.deliveryCharge}
				/>
				<PropValue property="Status:" value={order?.status} />
			</div>
			{order?.orderType === "delivery" && !order?.acceptedByVendor && (
				<div className="flex flex-row mt-2 ml-2">
					<InputText
						id="deliveryFee"
						name="Delivery Fee"
						value={deliveryFee}
						onChange={(e) => {
							if (e.target.value > 0) {
								setDeliveryFee(e.target.value);
							}
						}}
						type="number"
					/>
				</div>
			)}
			{order?.status !== "cancelled" && !order?.markedAsCompleted && (
				<div className="flex flex-row mt-2">
					{order?.acceptedByVendor ? (
						<div
							className="flex flex-row mr-3 items-center border px-3 py-3 cursor-pointer hover:shadow-xl hover:bg-green-200"
							onClick={() => {
								dispatch(completeOrder(order?._id, 0));
							}}
						>
							<MdOutlineDone className={`text-green-500 mr-2`} size={22} />
							<span>Mark as Completed</span>
						</div>
					) : (
						<div
							className="flex flex-row mr-3 items-center border px-3 py-3 cursor-pointer hover:shadow-xl hover:bg-green-200"
							onClick={() => {
								dispatch(acceptOrder(order?._id, deliveryFee));
							}}
						>
							<MdOutlineDone className={`text-green-500 mr-2`} size={22} />
							<span>Approve Order</span>
						</div>
					)}

					{/* cancel order button */}
					<div
						className="flex flex-row items-center border px-3 py-3 cursor-pointer hover:shadow-xl hover:bg-red-200"
						onClick={() => {
							dispatch(cancelOrder(order?._id));
						}}
					>
						<MdCancel className={`text-red-500 mr-2`} size={22} />
						<span>Cancel Order</span>
					</div>
				</div>
			)}

			{order.status === "cancelled" && (
				<div className="flex flex-row items-center border px-3 py-3 mt-2 hover:bg-red-200">
					<MdCancel className={`text-red-500 mr-2`} size={22} />
					<span>This order has been cancelled</span>
				</div>
			)}

			{order.markedAsCompleted && (
				<div className="flex flex-row items-center border px-3 py-3 mt-2 hover:bg-green-200">
					<MdOutlineDone className={`text-green-500 mr-2`} size={22} />
					{order.status === "completed" ? (
						<span>This order has been received</span>
					) : (
						<span>This order has been marked as completed</span>
					)}
				</div>
			)}

			{order.status === "completed" && (
				<div className="flex flex-row items-center border mt-2 px-3 py-3">
					<div className="text-sm font-semibold text-gray-500 mr-4">
						Rating:
					</div>
					<IoStarSharp
						className={`mr-2 ${
							rating >= 1 ? "text-yellow-400" : "text-gray-300"
						}`}
						size={22}
					/>
					<IoStarSharp
						className={`mr-2 ${
							rating >= 2 ? "text-yellow-400" : "text-gray-300"
						}`}
						size={22}
					/>
					<IoStarSharp
						className={`mr-2 ${
							rating >= 3 ? "text-yellow-400" : "text-gray-300"
						}`}
						size={22}
					/>
					<IoStarSharp
						className={`mr-2 ${
							rating >= 4 ? "text-yellow-400" : "text-gray-300"
						}`}
						size={22}
					/>
					<IoStarSharp
						className={`mr-2 ${
							rating >= 5 ? "text-yellow-400" : "text-gray-300"
						}`}
						size={22}
					/>
				</div>
			)}
		</div>
	);
}
