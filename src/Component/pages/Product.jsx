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

const Product = () => {
	const { addProduct, products } = useContext(ProductContext);
	const [productName, setProductName] = useState("");
	const [productDescription, setProductDescription] = useState("");
	const [productQuantity, setProductQuantity] = useState(0);
	const [mealType, setMealType] = useState("");
	const [productImage, setProductImage] = useState(null);
	const [productPrice, setProductPrice] = useState(0);
	const [accompaniments, setAccompaniments] = useState([]);
	const [accompanimentData, setAccompanimentData] = useState({
		name: "",
		price: 0,
		isFree: "",
	});

	const handleAddProduct = () => {
		const newProduct = {
			name: productName,
			description: productDescription,
			quantity: productQuantity,
			mealType,
			image: productImage,
			price: productPrice,
		};

		addProduct(newProduct);

		setProductName("");
		setProductDescription("");
		setProductQuantity(0);
		setMealType("");
		setProductImage(null);
		setProductPrice(0);
	};

	const addAccompaniment = () => {
		const newAccompaniment = {
			name: accompanimentData.name,
			price: accompanimentData.price,
			isFree: accompanimentData.isFree,
		};

		setAccompaniments([...accompaniments, newAccompaniment]);
	};

	const handleImageUpload = (e) => {
		setProductImage(URL.createObjectURL(e.target.files[0]));
	};

	return (
		<div className="w-full h-full flex flex-row flex-wrap mt-4 ml-4 overflow-x-hidden">
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
					<InputText
						name={"Quantity"}
						type={"number"}
						id={"productQuantity"}
						placeholder={"Enter your product quantity"}
						onChange={(e) => setProductQuantity(e.target.value)}
						value={productQuantity}
					/>
					<InputTextArea
						name={"Product Description"}
						id={"productDescription"}
						placeholder={"Enter your product description"}
						onChange={(e) => setProductDescription(e.target.value)}
						value={productDescription}
						fixedHeight
						maxLength={250}
					/>
					<InputSelect
						name={"Meal Type"}
						id={"mealType"}
						onChange={(e) => setMealType(e.target.value)}
						value={mealType}
						options={["Breakfast", "Lunch", "Dinner", "Snack", "Others"]}
					/>{" "}
					<InputFile
						name={"Product Image"}
						id={"productImage"}
						onChange={handleImageUpload}
						value={productImage}
					/>
					<InputText
						name={"Price"}
						type={"number"}
						id={"productPrice"}
						placeholder={"Enter your product price"}
						onChange={(e) => setProductPrice(e.target.value)}
						value={productPrice}
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
									<PropValue property="Is Free" value={accompaniment.isFree} />
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
							id={"isFree"}
							options={["Yes", "No"]}
							onChange={(e) =>
								setAccompanimentData({
									...accompanimentData,
									isFree: e.target.value,
								})
							}
							value={accompanimentData.isFree}
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
					className="mt-4 bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-2 px-4 rounded"
					onClick={handleAddProduct}
				>
					Add Product
				</button>
			</div>

			<div className="product-form-container flex flex-col w-[30%] h-fit">
				<div className="flex flex-row items-center mb-3">
					<CatNumber number={2} />
					<span className="ml-2 font-bold">Preview</span>
				</div>

				<div className="flex flex-col">
					<div className="flex flex-col w-full h-52 border justify-center items-center">
						{productImage && (
							<img className="w-full h-full" src={productImage} alt="Product" />
						)}
					</div>
					<div>
						<PropValue property={"Product Name"} value={productName} />
						<PropValue
							property={"Product Description"}
							value={productDescription}
						/>
						<PropValue property={"Quantity"} value={productQuantity} />
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
										<PropValue
											property="Is Free"
											value={accompaniment.isFree}
										/>
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
				</div>
			</div>

			<div className="product-form-container flex flex-col w-[100%] h-fit mr-10 mt-5">
				<div className="flex flex-row items-center mb-3">
					<CatNumber number={3} />
					<span className="ml-2 font-bold">Product Listing</span>
				</div>
				<div className="flex flex-row">
					{products.map((product, index) => (
						<div
							key={index}
							className="product-card w-80 mr-5 shadow-md cursor-pointer hover:shadow-2xl"
						>
							<div className="flex flex-col w-full h-52 border justify-center items-center">
								{product.image && (
									<img
										className="w-full h-full"
										src={product.image}
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
