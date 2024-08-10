import React, { useState } from "react";
import PropValue from "./PropValue";
import { MdCancel, MdOutlineDone, MdPendingActions } from "react-icons/md";
import {
	cancelOrder,
	completeOrder,
	updateRating,
} from "../thunk_action_creators/order";
import { useDispatch } from "react-redux";
import { IoStarSharp } from "react-icons/io5";

export default function OrderCard({ order }) {
	const [rating, setRating] = useState(order?.rating || 0);
	const [editedRating, setEditedRating] = useState(false);
	const dispatch = useDispatch();

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
				<PropValue property="Type" value={order?.orderType} />
				<PropValue
					property="Delivery Fee:"
					value={"GHC " + order?.deliveryCharge || 0.0}
				/>
				<PropValue property="Status:" value={order?.status} />
			</div>
			{order?.status !== "cancelled" && !order?.markedAsCompleted && (
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
					<div
						className="flex flex-row  ml-3 items-center border px-3 py-3 cursor-pointer hover:shadow-xl hover:bg-red-200"
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
				<div className="flex flex-row items-center border mt-2 px-3 py-3 hover:bg-red-200">
					<MdCancel className={`text-red-500 mr-2`} size={22} />
					<span>This order has been cancelled</span>
				</div>
			)}

			{order.markedAsCompleted && order.status !== "completed" && (
				<div
					className="flex flex-row items-center border mt-2 px-3 py-3 cursor-pointer hover:shadow-xl hover:bg-green-200"
					onClick={() => {
						dispatch(completeOrder(order?._id));
					}}
				>
					<MdOutlineDone className={`text-green-500 mr-2`} size={22} />
					<span>Mark As Order Received</span>
				</div>
			)}

			{order.status === "completed" && (
				<div className="flex flex-row items-center border mt-2 px-3 py-3 hover:bg-green-200">
					<MdOutlineDone className={`text-green-500 mr-2`} size={22} />
					<span>This order has been completed</span>
				</div>
			)}

			{order.status === "completed" && (
				<>
					<div className="flex flex-row items-center border mt-2 px-3 py-3">
						<div className="text-sm font-semibold text-gray-500 mr-4">
							Rating:
						</div>
						<IoStarSharp
							className={`mr-2 ${
								rating >= 1 ? "text-yellow-400" : "text-gray-300"
							}`}
							size={22}
							onClick={() => {
								setRating(1);
								setEditedRating(true);
							}}
						/>
						<IoStarSharp
							className={`mr-2 ${
								rating >= 2 ? "text-yellow-400" : "text-gray-300"
							}`}
							size={22}
							onClick={() => {
								setRating(2);
								setEditedRating(true);
							}}
						/>
						<IoStarSharp
							className={`mr-2 ${
								rating >= 3 ? "text-yellow-400" : "text-gray-300"
							}`}
							size={22}
							onClick={() => {
								setRating(3);
								setEditedRating(true);
							}}
						/>
						<IoStarSharp
							className={`mr-2 ${
								rating >= 4 ? "text-yellow-400" : "text-gray-300"
							}`}
							size={22}
							onClick={() => {
								setRating(4);
								setEditedRating(true);
							}}
						/>
						<IoStarSharp
							className={`mr-2 ${
								rating >= 5 ? "text-yellow-400" : "text-gray-300"
							}`}
							size={22}
							onClick={() => {
								setRating(5);
								setEditedRating(true);
							}}
						/>
					</div>

					{editedRating && (
						<div
							className="flex flex-row items-center border mt-2 px-3 py-3 cursor-pointer hover:shadow-xl hover:bg-green-200"
							onClick={() => {
								dispatch(updateRating(order?._id, rating));
								setEditedRating(false);
							}}
						>
							<MdOutlineDone className={`text-green-500 mr-2`} size={22} />
							<span>Submit Rating</span>
						</div>
					)}
				</>
			)}
		</div>
	);
}
