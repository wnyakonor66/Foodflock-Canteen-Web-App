import React, { useEffect, useState } from "react";
import SearchBar from "../Component/SearchBar";
import VendorCard from "../Component/VendorCard";
import { useSelector, useDispatch } from "react-redux";
import {
	getAllBusinesses,
	setFavourite,
} from "../thunk_action_creators/business";

const Vendor = () => {
	const businesses = useSelector((state) => state.business.data);
	const loading = useSelector((state) => state.business.isLoading);
	const error = useSelector((state) => state.business.error);
	const [searchTerm, setSearchTerm] = useState("");
	const dispatch = useDispatch();

	useEffect(() => {
		if (!loading) dispatch(getAllBusinesses());
	}, []);

	return (
		<div className="flex flex-col pt-3 px-3">
			<SearchBar
				onSearch={(e) => setSearchTerm(e.target.value)}
				value={searchTerm}
			/>
			<div className="mt-5 flex flex-row flex-wrap">
				{businesses?.map(
					(business) =>
						business.name.toLowerCase().includes(searchTerm.toLowerCase()) && (
							<VendorCard
								key={business._id}
								name={business.name}
								delivery={business.makes_delivery ? "Yes" : "No"}
								description={business.description}
								email={business.email}
								stars={business.rating}
								phone={business.phone}
								favorites={business.favourites}
								isFav={business.isFavourite}
								onClick={() => {
									dispatch(setFavourite(business._id));
								}}
							/>
						)
				)}
			</div>
		</div>
	);
};

export default Vendor;
