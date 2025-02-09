import React, { useState } from "react";
import { GiMeal } from "react-icons/gi";
import { FaShop } from "react-icons/fa6";
import { PiForkKnifeFill } from "react-icons/pi";
import { BiSolidCategory } from "react-icons/bi";
import { FaLock, FaTruck } from "react-icons/fa";
import { Outlet, useNavigate } from "react-router-dom";
import "../ClientPage/clientPage.css";
import "./Vendor";
import { Navbar } from "../Component/Navbar";
import { useDispatch } from "react-redux";
import { logoutUser } from "../thunk_action_creators/users";

const ClientPage = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [active, setActive] = useState("meals");

	return (
		<>
			<Navbar />
			<div className="flex flex-row">
				<nav className="w-1/6 border-solid border-r border-gray-400 px-2 pt-2 bg-[#2f4f4f] text-white">
					<div className="flex flex-row text-base font-semibold font-roboto">
						<PiForkKnifeFill size={20} />
						<span className="ml-2">CANTEEN</span>
					</div>
					<div className="flex flex-col pl-4">
						<div
							className={`h-10 mt-1 border-b border-gray-400 flex items-center ${
								active === "meals" ? "border-l-4" : ""
							} pl-2 cursor-pointer`}
							onClick={() => {
								setActive("meals");
								navigate("/client");
							}}
						>
							<GiMeal size={20} />
							<span className="ml-2">Meals</span>
						</div>
						<div
							className={`h-10 mt-1 border-b border-gray-400 flex items-center ${
								active === "vendors" ? "border-l-4" : ""
							} pl-2 cursor-pointer`}
							onClick={() => {
								setActive("vendors");
								navigate("/client/vendors");
							}}
						>
							<FaShop size={20} />
							<span className="ml-2">Vendors</span>
						</div>
						<div
							className={`h-10 mt-1 border-b border-gray-400 flex items-center ${
								active === "orders" ? "border-l-4" : ""
							} pl-2 cursor-pointer`}
							onClick={() => {
								setActive("orders");
								navigate("/client/orders");
							}}
						>
							<FaTruck size={20} />
							<span className="ml-2">Orders</span>
						</div>

						<div
							className={`h-10 mt-1 border-b border-gray-400 flex items-center ${
								active === "logout" ? "border-l-4" : ""
							} pl-2 cursor-pointer`}
							onClick={() => {
								setActive("logout");
								dispatch((logoutUser()));
								navigate("/login");
							}}
						>
							<FaLock size={20} />
							<span className="ml-2">Logout</span>
						</div>
					</div>
					{/* <div className="flex flex-row text-base font-semibold font-roboto mt-4">
						<BiSolidCategory size={20} />
						<span className="ml-2">CATEGORIES</span>
					</div>
					<div className="flex flex-col pl-4">
						<div className="h-10 flex flex-row items-center">
							<input
								name="category"
								id="breakfast"
								type="checkbox"
								value="breakfast"
							/>
							<label htmlFor="breakfast" className="ml-2">
								Breakfast
							</label>
						</div>
						<div className="h-10 flex flex-row items-center">
							<input name="category" id="lunch" type="checkbox" value="lunch" />
							<label htmlFor="lunch" className="ml-2">
								Lunch
							</label>
						</div>
						<div className="h-10 flex flex-row items-center">
							<input
								name="category"
								id="dinner"
								type="checkbox"
								value="dinner"
							/>
							<label htmlFor="dinner" className="ml-2">
								Dinner
							</label>
						</div>
						<div className="h-10 flex flex-row items-center">
							<input
								name="category"
								id="snacks"
								type="checkbox"
								value="snacks"
							/>
							<label htmlFor="snacks" className="ml-2">
								Snacks
							</label>
						</div>
					</div> */}
					{/* <div className="flex flex-row text-base font-semibold font-roboto mt-4">
						<FaShop size={20} />
						<span className="ml-2">Favorite VENDORS</span>
					</div>
					<div className="flex flex-col pl-4">
						<div className="h-10 flex flex-row items-center">
							<input
								name="category"
								id="vendor1"
								type="checkbox"
								value="vendor1"
							/>
							<label htmlFor="vendor1" className="ml-2">
								Vendor 1
							</label>
						</div>
					</div> */}
				</nav>
				<div className="content-container flex-1 h-[94vh] overflow-auto">
					<Outlet />
				</div>
			</div>
		</>
	);
};

export default ClientPage;
