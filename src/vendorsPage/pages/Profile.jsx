import React from "react";
import CatNumber from "../../Component/CatNumber";
import InputText from "../../Component/InputText";
import InputSelect from "../../Component/InputSelect";
import PropValue from "../../Component/PropValue";

export default function Profile() {
	return (
		<div className="flex flex-row flex-wrap w-full h-full bg-gray-200 p-4 justify-between">
			<div className="flex flex-col bg-white h-fit p-3 shadow-md rounded-sm w-[65%]">
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
				</div>

				<div>
					<button className="mt-4 bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-2 px-4 rounded">
						Submit Changes
					</button>
				</div>
			</div>

			<div className="flex flex-col bg-white h-fit p-3 shadow-md rounded-sm w-[30%]">
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

			<div></div>
		</div>
	);
}
