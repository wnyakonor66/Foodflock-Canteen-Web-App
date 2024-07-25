import React from "react";
import InputText from "./InputText";
import PropValue from "./PropValue";

export const OrderModal = () => {
	return (
		<div className="flex justify-center items-center absolute top-0 left-0 bg-[#6b7280aa] w-[100vw] h-[100vh] z-50">
			<div className="bg-white w-1/5 h-fit">
				<div className="flex w-full justify-center items-center mb-2">
					<span className="font-bold">Place Order</span>
				</div>
				<div className="flex flex-col items-center px-2">
					<div className="h-40 w-40 bg-slate-400 rounded-xl">
						<img
							// src={`${process.env.REACT_APP_SERVER_URL}/${image}`}
							alt="meal"
							className="h-full w-full object-cover rounded-xl"
						/>
					</div>
					<PropValue property="Meal Name" value="Bread and Egg" />
					<PropValue property="Meal Type" value="Breakfast" />
					<div className="flex flex-row justify-between w-full mt-3">
						<label className="block text-gray-500 font-semibold text-sm">
							Quantity
						</label>
						<input
							type="number"
							className="border-b border-gray-700 outline-none text-right"
							min={20}
						/>
					</div>

					<div className="flex flex-col w-full mt-2">
						<div className="flex flex-row w-full">
							<input type="checkbox" className="mr-2" />
							<label className="block text-gray-500 font-semibold text-sm">
								Fanta - Ghc 19
							</label>
						</div>

						<div className="flex flex-row w-full">
							<input type="checkbox" className="mr-2" />
							<label className="block text-gray-500 font-semibold text-sm">
								Fanta - Ghc 19
							</label>
						</div>
					</div>

					<div className="flex flex-row w-full mt-3 mb-3">
						{/* order and cancel buttons */}
						<button
							type="submit"
							className="w-full sm:w-auto p-2 bg-blue-500 text-white rounded-md mr-5"
						>
							Order
						</button>
						<button
							type="submit"
							className="w-full sm:w-auto p-2 bg-red-500 text-white rounded-md"
						>
							Cancel
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
