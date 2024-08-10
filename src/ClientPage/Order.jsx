import React, { useEffect, useState } from "react";
import SearchBar from "../Component/SearchBar";
import OrderCard from "../Component/OrderCard";
import { getOrders } from "../thunk_action_creators/order";
import { useSelector, useDispatch } from "react-redux";

const Orders = () => {
	const orders = useSelector((state) => state.orders.data);
	const loading = useSelector((state) => state.orders.isLoading);
	const error = useSelector((state) => state.orders.error);
	const [searchTerm, setSearchTerm] = useState("");
	const dispatch = useDispatch();

	useEffect(() => {
		if (!loading) dispatch(getOrders());
	}, []);

	return (
		<div className="flex flex-col pt-3 px-3 overflow-y-auto ">
			<SearchBar
				onSearch={(e) => setSearchTerm(e.target.value)}
				value={searchTerm}
			/>
			<div className="mt-5 flex flex-row flex-wrap">
				{orders?.length === 0 && <div>No orders available</div>}
				{orders?.map(
					(order) =>
						order?.meal_name
							?.toLowerCase()
							.includes(searchTerm.toLowerCase()) && (
							<OrderCard key={order._id} order={order} />
						)
				)}
			</div>
		</div>
	);
};

export default Orders;
