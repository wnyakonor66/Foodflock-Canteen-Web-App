import React from "react";
import CatNumber from "../../Component/CatNumber";
import InputText from "../../Component/InputText";
import InputSelect from "../../Component/InputSelect";
import PropValue from "../../Component/PropValue";
import InputTextArea from "../../Component/InputTextArea";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
	getBusiness,
	updateBusiness,
	addBusiness,
} from "../../thunk_action_creators/business";

export default function Profile() {
	const business = useSelector((state) => state.business.data);
	const error = useSelector((state) => state.business.error);
	const loading = useSelector((state) => state.business.isLoading);
	const [businessData, setBusinessData] = useState({
		name: "",
		phone: "",
		email: "",
		description: "",
		makes_delivery: "",
	});

	const dispatch = useDispatch();

	useEffect(() => {
		if (error == null && business == null && !loading) {
			dispatch(getBusiness());
		}
	}, [business, error, loading]);

	useEffect(() => {
		if (business != null) {
			setBusinessData(business);
		}
	}, [business]);

	useEffect(() => {
		if (!loading) dispatch(getBusiness());
	}, []);

	const createOrUpdateBusiness = (event) => {
		event.preventDefault();

		if (business == null) {
			dispatch(addBusiness(businessData));
			return;
		}

		console.log(businessData);
		dispatch(updateBusiness(businessData));
	};

	return (
		<div className="flex flex-row flex-wrap w-full h-full bg-gray-200 p-4 overflow-x-hidden">
			<form
				className="flex flex-col bg-white h-fit p-3 shadow-md mr-5 rounded-sm w-[65%]"
				onSubmit={createOrUpdateBusiness}
			>
				<div className="flex flex-row items-center">
					<CatNumber number={1} />
					<span className="ml-2 font-bold">Business Information</span>
				</div>
				<div className="mt-4 flex flex-row flex-wrap">
					<InputText
						name={"Business Name"}
						id={"name"}
						placeholder={"Enter your business name"}
						value={businessData.name}
						onChange={(e) => {
							setBusinessData({ ...businessData, name: e.target.value });
						}}
					/>

					<InputText
						name={"Business Contact"}
						id={"phone"}
						placeholder={"Enter your Business Contact"}
						value={businessData.phone}
						onChange={(e) => {
							setBusinessData({ ...businessData, phone: e.target.value });
						}}
					/>

					<InputText
						name={"Business Email"}
						id={"email"}
						placeholder={"Enter your Business Email"}
						value={businessData.email}
						onChange={(e) => {
							setBusinessData({ ...businessData, email: e.target.value });
						}}
					/>

					<InputText
						name={"Location"}
						id={"location"}
						placeholder={"Enter your Business Location"}
					/>

					<InputSelect
						name="Makes Delivery"
						id="makes_delivery"
						options={["yes", "no"]}
						value={businessData.makes_delivery ? "yes" : "no"}
						onChange={(e) => {
							setBusinessData({
								...businessData,
								makes_delivery: e.target.value,
							});
						}}
					/>
					<br />
					<InputTextArea
						name={"Description"}
						id={"description"}
						placeholder={"Enter your Business Description"}
						value={businessData.description}
						onChange={(e) => {
							setBusinessData({ ...businessData, description: e.target.value });
						}}
					/>
				</div>

				<div>
					<button
						className="mt-4 bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-2 px-4 rounded mr-5"
						type="submit"
						disabled={loading}
					>
						{business ? "Submit Changes" : "Create Business"}
					</button>
					{error && (
						<button
							className="mt-4 bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded"
							onClick={() => dispatch(getBusiness())}
							disabled={loading}
						>
							Fetch Business
						</button>
					)}
				</div>
			</form>

			<div className="flex flex-col bg-white h-fit p-3 mr-5 shadow-md rounded-sm w-[30%]">
				<div className="flex flex-row items-center">
					<CatNumber number={2} />
					<span className="ml-2 font-bold">Orders Information</span>
				</div>

				<div className="mt-4 flex flex-col">
					<PropValue property={"Processed Orders"} value={"0"} />
					<PropValue property={"Pending Orders"} value={"0"} />
					<PropValue property={"Cancelled Orders"} value={"0"} />

					<hr className="mb-2 mt-3" />

					<PropValue property={"Total Orders"} value={"0"} />
					<PropValue property={"Total Earnings"} value={"0"} />
					<PropValue property={"Potential Earnings"} value={"0"} />
				</div>
			</div>

			<div className="flex flex-col mt-5 bg-white p-3 shadow-md mr-5 rounded-sm w-[32%] h-[40%]">
				<div className="flex flex-row items-center">
					<CatNumber number={3} />
					<span className="ml-2 font-bold">Analytics</span>
				</div>

				<div className="mt-4 flex flex-col">
					<PropValue
						property={"Clients that made you their favorite"}
						value={"0"}
					/>
					<PropValue property={"Daily Orders Number"} value={"0"} />
					<PropValue property={"Weekly Orders Number"} value={"0"} />
				</div>
			</div>

			<div className="flex flex-col mt-5 bg-white p-3 shadow-md rounded-sm w-[32%] h-[40%]">
				<div className="flex flex-row items-center">
					<CatNumber number={4} />
					<span className="ml-2 font-bold">Ratings</span>
				</div>

				<div className="mt-4 flex flex-col">
					<PropValue property={"Ratings 4-5"} value={"0"} />
					<PropValue property={"Ratings 3"} value={"0"} />
					<PropValue property={"Ratings 2"} value={"0"} />
					<PropValue property={"Ratings 1"} value={"0"} />
					<hr className="mb-2 mt-3" />
					<PropValue property={"Average Ratings"} value={"0"} />
					<PropValue property={"Total Reviews"} value={"0"} />
				</div>
			</div>
		</div>
	);
}
