import React, { useContext, useEffect, useState } from "react";
import "../styles/product.css";
import { ProductContext } from "../../ClientPage/ProductContext";
import { MdDelete } from "react-icons/md";
import InputText from "../InputText";
import InputTextArea from "../InputTextArea";
import InputSelect from "../InputSelect";
import InputFile from "../InputFile";
import CatNumber from "../CatNumber";
import PropValue from "../PropValue";
import { useSelector, useDispatch } from "react-redux";
import { addMeal, getMeals } from "../../thunk_action_creators/meal";

const Product = () => {
	const { addProduct, products } = useContext(ProductContext);
	const [productName, setProductName] = useState("");
	const [productDescription, setProductDescription] = useState("");
	const [productQuantity, setProductQuantity] = useState(0);
	const [mealType, setMealType] = useState("");
	const [productImage, setProductImage] = useState(null);
	const [productPrice, setProductPrice] = useState(0);
	const [accompaniments, setAccompaniments] = useState([]);
	const [chargeType, setChargeType] = useState("");
	const [accompanimentData, setAccompanimentData] = useState({
		name: "",
		price: 0,
		free: "",
	});
	const [editMode, setEditMode] = useState(false);

	const meals = useSelector((state) => state.meals.data);
	const loading = useSelector((state) => state.meals.isLoading);
	const error = useSelector((state) => state.meals.error);
	const dispatch = useDispatch();

	useEffect(() => {
		console.log(meals);
		if (!loading && meals === null && error === null) dispatch(getMeals());
	}, [meals, loading]);

	useEffect(() => {
		if (!loading) dispatch(getMeals());
	}, []);

	const startEdit = (index) => {
		setEditMode(true);
		setProductName(meals[index].name);
		setProductDescription(meals[index].description);
		setProductQuantity(meals[index].quantity);
		setMealType(meals[index].mealType);
		setProductImage(
			`${process.env.REACT_APP_SERVER_URL}/${meals[index].image}`
		);
		setProductPrice(meals[index].price);

		const accs = [];

		for (let i = 0; i < meals[index].accompaniments.length; i++) {
			const { name, price, isFree } = meals[index].accompaniments[i];

			accs.push({ name, price, free: isFree ? "Yes" : "No" });
		}

		setAccompaniments(accs);
	};

	const cancelEdit = () => {
		setEditMode(false);
		setProductName("");
		setProductDescription("");
		setProductQuantity(0);
		setMealType("");
		setProductImage(null);
		setProductPrice(0);
		setAccompaniments([]);
		setChargeType("");
		setAccompanimentData({ name: "", price: 0, free: "" });
	};

	const addAccompaniment = () => {
		const newAccompaniment = {
			name: accompanimentData.name,
			price: accompanimentData.price,
			free: accompanimentData.free,
		};

		setAccompaniments([...accompaniments, newAccompaniment]);
	};

	const updateProduct = () => {};

	const submitProduct = () => {
		const form_data = new FormData();
		form_data.append("name", productName || "");
		form_data.append("description", productDescription || "");
		form_data.append("meal_type", mealType || "");
		form_data.append("image", productImage || null);
		form_data.append("price", productPrice || 0);
		form_data.append("accompaniments", JSON.stringify(accompaniments));
		form_data.append("charge_type", chargeType || "");

		dispatch(addMeal(form_data));

		setProductName("");
		setProductDescription("");
		setProductQuantity(0);
		setMealType("");
		setProductImage(null);
		setProductPrice(0);
		setAccompaniments([]);
		setChargeType("");
		setAccompanimentData({ name: "", price: 0, free: "" });
	};

	return (
		<div className="w-full h-full flex flex-row flex-wrap mt-4 ml-4 overflow-x-hidden overflow-y-auto">
			<div className="product-form-container w-[65%] h-fit mr-5">
				<div className="flex flex-row items-center mb-3">
					<CatNumber number={1} />
					<span className="ml-2 font-bold">Add Product</span>
				</div>
				<div className="product-form- flex flex-row flex-wrap">
					<InputText
						name={"Product Name"}
						id={"productName"}
						placeholder={"Enter your product name"}
						onChange={(e) => setProductName(e.target.value)}
						value={productName}
					/>
					<InputSelect
						name={"Meal Type"}
						id={"mealType"}
						onChange={(e) => setMealType(e.target.value)}
						value={mealType}
						options={["Breakfast", "Lunch", "Dinner", "Snack", "Others"]}
					/>
					<InputFile
						name={"Product Image"}
						id={"productImage"}
						// onChange={handleImageUpload}
						onChange={(e) => setProductImage(e.target.files[0])}
						value={productImage}
					/>
					<InputText
						name={"Price"}
						type={"number"}
						id={"productPrice"}
						placeholder={"Enter your product price"}
						onChange={(e) => setProductPrice(parseInt(e.target.value))}
						value={productPrice}
					/>
					<InputSelect
						name={"Charge Type"}
						id={"chargeType"}
						onChange={(e) => setChargeType(e.target.value)}
						value={chargeType}
						options={["price", "quantity"]}
					/>
					<InputTextArea
						name={"Product Description"}
						id={"productDescription"}
						placeholder={"Enter your product description"}
						onChange={(e) => setProductDescription(e.target.value)}
						value={productDescription}
						maxLength={250}
					/>
				</div>
				{accompaniments.length > 0 && (
					<div className="flex flex-row flex-wrap border px-3 py-2 mb-1">
						{accompaniments.map((accompaniment, index) => {
							return (
								<div
									key={index}
									className="flex flex-col w-44 border pb-2 pl-2 pr-2 items-center mb-1 mr-1"
								>
									<PropValue property="Name" value={accompaniment.name} />
									<PropValue property="Price" value={accompaniment.price} />
									<PropValue property="Is Free" value={accompaniment.free} />
									<MdDelete
										className="text-red-500 cursor-pointer mt-1"
										size={20}
										onClick={() =>
											setAccompaniments(
												accompaniments.filter((_, i) => i !== index)
											)
										}
									/>
								</div>
							);
						})}
					</div>
				)}

				<div className="flex flex-col border px-3 py-2">
					<div className="flex flex-row flex-wrap">
						<InputText
							name={"Accompaniment Name"}
							id={"accompaniment"}
							placeholder={"Enter your accompaniment name"}
							onChange={(e) =>
								setAccompanimentData({
									...accompanimentData,
									name: e.target.value,
								})
							}
							value={accompanimentData.name}
						/>

						<InputText
							type={"number"}
							name={"Accompaniment Price"}
							id={"accompanimentPrice"}
							placeholder={"Enter your accompaniment price"}
							onChange={(e) =>
								setAccompanimentData({
									...accompanimentData,
									price: e.target.value,
								})
							}
							value={accompanimentData.price}
						/>
						<InputSelect
							name={"Is Free"}
							id={"free"}
							options={["Yes", "No"]}
							onChange={(e) =>
								setAccompanimentData({
									...accompanimentData,
									free: e.target.value,
								})
							}
							value={accompanimentData.free}
						/>
					</div>
					<button
						className="bg-cyan-500 px-2 py-1 w-fit rounded-md text-white font-roboto font-bold"
						onClick={() => addAccompaniment("accompaniment")}
					>
						Add
					</button>
				</div>
				<button
					className="mt-4 bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-2 px-4 rounded mr-2"
					onClick={() => (editMode ? updateProduct() : submitProduct())}
					disabled={loading}
				>
					{editMode ? "Update Product" : "Add Product"}
				</button>

				{/* cancel edit */}
				{editMode && (
					<button
						className="mt-4 bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded"
						onClick={() => cancelEdit()}
					>
						Cancel Edit
					</button>
				)}
			</div>

			<div className="product-form-container flex flex-col w-[30%] h-fit">
				<div className="flex flex-row items-center mb-3">
					<CatNumber number={2} />
					<span className="ml-2 font-bold">Preview</span>
				</div>

				<div className="flex flex-col">
					<div className="flex flex-col w-full h-52 border justify-center items-center">
						{productImage && (
							<img
								className="w-full h-full"
								src={
									editMode && typeof productImage === "string"
										? productImage
										: URL.createObjectURL(productImage)
								}
								alt="Product"
							/>
						)}
					</div>
					<div>
						<PropValue property={"Product Name"} value={productName} />
						<PropValue property={"Description"} value={productDescription} />
						<PropValue property={"Meal Type"} value={mealType} />
						<PropValue property={"Price"} value={productPrice} />
					</div>

					{accompaniments.length > 0 && (
						<div className="flex flex-row flex-wrap border px-3 py-2 mb-1">
							{accompaniments.map((accompaniment, index) => {
								return (
									<div
										key={index}
										className="flex flex-col w-44 border pb-2 pl-2 pr-2 items-center mb-1 mr-1"
									>
										<PropValue property="Name" value={accompaniment.name} />
										<PropValue property="Price" value={accompaniment.price} />
										<PropValue property="Is Free" value={accompaniment.free} />
									</div>
								);
							})}
						</div>
					)}
				</div>
			</div>

			<div className="product-form-container flex flex-col w-[100%] h-fit mr-10 mt-5">
				<div className="flex flex-row items-center mb-3">
					<CatNumber number={3} />
					<span className="ml-2 font-bold">Product Listing</span>
				</div>
				<div className="flex flex-row">
					{meals?.map((product, index) => (
						<div
							key={index}
							className="product-card w-80 mr-5 shadow-md cursor-pointer hover:shadow-2xl"
							onClick={() => startEdit(index)}
						>
							<div className="flex flex-col w-full h-52 border justify-center items-center">
								{product.image && (
									<img
										className="w-full h-full"
										src={`${process.env.REACT_APP_SERVER_URL}/${product.image}`}
										alt={product.name}
									/>
								)}
							</div>

							<div>
								<PropValue property={"Product Name"} value={product.name} />
								<PropValue
									property={"Product Description"}
									value={product.description}
								/>
								<PropValue property={"Price"} value={product.price} />
								<PropValue property={"Meal Type"} value={product.mealType} />
							</div>
							{/* delete button */}
							<button className="bg-red-500 hover:bg-red-400 mt-4 text-white font-bold py-2 px-4 rounded justify-self-end">
								<MdDelete />
							</button>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Product;
