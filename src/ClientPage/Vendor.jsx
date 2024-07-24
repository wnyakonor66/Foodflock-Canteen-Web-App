import React, { useEffect, useState } from "react";
import SearchBar from "../Component/SearchBar";
import VendorCard from "../Component/VendorCard";
import { useSelector, useDispatch } from "react-redux";
import { getAllBusinesses } from "../thunk_action_creators/business";

const Vendor = () => {
	const businesses = useSelector((state) => state.business.data);
	const loading = useSelector((state) => state.business.isLoading);
	const error = useSelector((state) => state.business.error);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!loading) dispatch(getAllBusinesses());
	}, []);

	return (
		<div className="flex flex-col pt-3 px-3">
			<SearchBar />
			<div className="mt-5 flex flex-row">
				{businesses?.map((business) => (
					<VendorCard
						key={business._id}
						name={business.name}
						delivery={business.makes_delivery ? "Yes" : "No"}
						description={business.description}
						email={business.email}
						phone={business.phone}
					/>
				))}
			</div>
		</div>
	);
};

export default Vendor;
