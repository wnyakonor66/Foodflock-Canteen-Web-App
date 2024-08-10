import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { placeOrder } from "../thunk_action_creators/order";
import InputSelect from "./InputSelect";

export const OrderModal = ({ showModal, setShowModal, meal }) => {
	const [quantity, setQuantity] = useState(1);
	const [price, setPrice] = useState(parseInt(meal?.price) || 0);
	const [accompaniments, setAccompanients] = useState([]);
	const [deliveryOption, setDeliveryOption] = useState("pickup");

	const calculatePrice = (num) => {
		if (meal?.charge_type === "price") {
			if (num < meal?.price) {
				setPrice(meal?.price);
				return;
			}
			setPrice(num);
		} else {
			console.log(num);
			if (num < 1) {
				setQuantity(1);
				setPrice(meal?.price);
				return;
			}
			setQuantity(num);
		}
	};

	const dispatch = useDispatch();

	const sendOrder = () => {
		const order = {
			meal_id: meal?._id,
			quantity,
			amount: price,
			charge_type: meal?.charge_type,
            delivery_option: deliveryOption,
			accompaniments,
		};

		dispatch(placeOrder(order));

		setShowModal(false);
	};

	useEffect(() => {
		setPrice(parseInt(meal?.price) || 0);
		setQuantity(1);
		setAccompanients([]);
	}, [showModal]);
	return (
		<div
			className={`${
				showModal ? "flex" : "hidden"
			} justify-center items-center absolute top-0 left-0 bg-[#6b7280aa] w-[100vw] h-[100vh] z-50`}
			onClick={() => setShowModal(false)}
		>
			<div
				className="bg-white w-fit h-fit"
				onClick={(e) => e.stopPropagation()}
			>
				<div className="flex w-full justify-center items-center mb-2">
					<span className="font-bold">Place Order</span>
				</div>
				<div className="flex flex-col items-center px-2">
					<div className="w-full h-40 border">
						<img
							src={`${process.env.REACT_APP_SERVER_URL}/${meal?.image}`}
							alt="meal"
							className="h-full w-full object-cover"
						/>
					</div>
					<div className="flex flex-row w-full justify-between mt-1">
						<span className="text-sm font-roboto">
							{meal?.charge_type === "price"
								? ""
								: "Price is based on quantity"}
						</span>
						<span className="text-sm font-roboto font-bold">
							GHc {meal?.price}
						</span>
					</div>

					<div className="flex flex-row w-full justify-between">
						<span className="text-lg font-roboto font-bold">{meal?.name}</span>

						<div className="flex flex-row border items-center">
							{meal?.charge_type === "price" ? (
								<input
									type="number"
									className="w-14 outline-none px-1"
									value={price}
									onChange={(e) => calculatePrice(e.target.value)}
								/>
							) : (
								<input
									type="number"
									className="w-14 outline-none px-1"
									value={quantity}
									onChange={(e) => calculatePrice(e.target.value)}
								/>
							)}
						</div>
					</div>

					<div className="w-full mt-2 font-roboto text-gray-500">
						{meal?.description}
					</div>

					<div className="w-full mt-2">
						{meal?.accompaniments?.map((acc) => (
							<div className="flex flex-row w-full mb-1">
								<input
									type="checkbox"
									className="mr-2"
									onChange={(e) => {
										if (e.target.checked) {
											setAccompanients([...accompaniments, acc]);
										} else {
											setAccompanients(accompaniments.filter((a) => a !== acc));
										}

										console.log(accompaniments);
										if (acc.isFree) return;
										if (e.target.checked) {
											setPrice(price + acc.price);
										} else {
											setPrice(price - acc.price);
										}
									}}
								/>
								<label className="block text-gray-500 font-semibold text-sm">
									{acc.name} - {acc.isFree ? " Free" : "Ghc " + acc.price}
								</label>
							</div>
						))}
					</div>

					{meal?.makes_delivery && (
						<div className="w-full mt-2">
							<InputSelect
								name="Delivery"
								options={["pickup", "delivery"]}
								onChange={(e) => {
									if (e.target.value === "") return setDeliveryOption("pickup");
									setDeliveryOption(e.target.value);
								}}
								value={deliveryOption}
							/>
						</div>
					)}
					<div className="w-full flex flex-row justify-between items-center mb-3">
						<div>
							<span className="text-sm font-bold mr-2">Total: </span>
							<span className="text-sm font-roboto  text-red-500 font-bold">
								GHC{" "}
								{meal?.charge_type === "quantity" ? price * quantity : price}
							</span>
						</div>
						<div>
							<button
								type="submit"
								className="w-full px-4 p-2 bg-blue-500 text-white rounded-md"
								disabled={price === 0}
								onClick={() => {
									if (price === 0) return;
									sendOrder();
									setShowModal(false);
								}}
							>
								Order
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
