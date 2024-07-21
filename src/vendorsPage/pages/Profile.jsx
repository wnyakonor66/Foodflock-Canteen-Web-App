import React from "react";
import CatNumber from "../../Component/CatNumber";
import InputText from "../../Component/InputText";
import InputSelect from "../../Component/InputSelect";
import PropValue from "../../Component/PropValue";
import InputTextArea from "../../Component/InputTextArea";

export default function Profile() {
	return (
		<div className="flex flex-row flex-wrap w-full h-full bg-gray-200 p-4 overflow-x-hidden">
			<div className="flex flex-col bg-white h-fit p-3 shadow-md mr-5 rounded-sm w-[65%]">
				<div className="flex flex-row items-center">
					<CatNumber number={1} />
					<span className="ml-2 font-bold">Business Information</span>
				</div>
				<div className="mt-4 flex flex-row flex-wrap">
					<InputText
						name={"Business Name"}
						value={"Business Name"}
						id={"businessName"}
						placeholder={"Enter your business name"}
					/>

					<InputText
						name={"Business Contact"}
						value={"Business Contact"}
						id={"contact"}
						placeholder={"Enter your Business Contact"}
					/>

					<InputText
						name={"Business Email"}
						value={"Business Email"}
						id={"email"}
						placeholder={"Enter your Business Email"}
					/>

					<InputText
						name={"Location"}
						value={""}
						id={"email"}
						placeholder={"Enter your Business Location"}
					/>

					<InputSelect
						name="Makes Delivery"
						id="delivery"
						options={["Yes", "No"]}
						value={""}
					/>
					<br />
					<InputTextArea
						name={"Description"}
						value={""}
						id={"description"}
						placeholder={"Enter your Business Description"}
					/>
				</div>

				<div>
					<button className="mt-4 bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-2 px-4 rounded">
						Submit Changes
					</button>
				</div>
			</div>

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
