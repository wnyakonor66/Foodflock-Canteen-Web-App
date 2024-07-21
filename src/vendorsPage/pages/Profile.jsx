import React from "react";
import CatNumber from "../../Component/CatNumber";
import InputText from "../../Component/InputText";

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
				</div>
			</div>

			<div className="flex flex-col bg-white h-fit p-3 shadow-md rounded-sm w-[30%]"></div>
		</div>
	);
}
