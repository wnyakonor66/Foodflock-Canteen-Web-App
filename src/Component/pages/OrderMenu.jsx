import React, { useState, useEffect } from "react";
import "../styles/order.css";
import VendorOrderCard from "../VendorOrderCard";
import { useSelector, useDispatch } from "react-redux";
import { getOrders } from "../../thunk_action_creators/order";

const OrderMenu = () => {
	const orders = useSelector((state) => state.orders.data);
	const loading = useSelector((state) => state.orders.isLoading);
	const error = useSelector((state) => state.orders.error);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!loading) dispatch(getOrders());
	}, []);

	return (
		<div className="orders-page overflow-auto">
			<h2>Orders</h2>

			<div className="flex flex-row flex-wrap">
				{orders?.length === 0 && <div>No orders available</div>}
				{orders?.map((order) => (
					<VendorOrderCard key={order._id} order={order} />
				))}
				{/* <VendorOrderCard order={orders} />
				<VendorOrderCard /> */}
			</div>
		</div>
	);
};

export default OrderMenu;
