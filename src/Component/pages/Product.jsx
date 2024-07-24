import React, { useContext, useState } from "react";
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
	const [productQuantity, setProductQuantity] = useState("");
	const [mealType, setMealType] = useState("");
	const [productImage, setProductImage] = useState(null);
	const [productPrice, setProductPrice] = useState("");

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
		setProductQuantity("");
		setMealType("");
		setProductImage(null);
		setProductPrice("");
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
					/>
					<InputText
						name={"Quantity"}
						type={"number"}
						id={"productQuantity"}
						placeholder={"Enter your product quantity"}
						onChange={(e) => setProductQuantity(e.target.value)}
					/>
					<InputTextArea
						name={"Product Description"}
						id={"productDescription"}
						placeholder={"Enter your product description"}
						onChange={(e) => setProductDescription(e.target.value)}
						fixedHeight
						maxLength={250}
					/>
					<InputSelect
						name={"Meal Type"}
						id={"mealType"}
						onChange={(e) => setMealType(e.target.value)}
						options={["Breakfast", "Lunch", "Dinner", "Snack", "Others"]}
					/>{" "}
					<InputFile
						name={"Product Image"}
						id={"productImage"}
						onChange={handleImageUpload}
					/>
					<InputText
						name={"Price"}
						type={"number"}
						id={"productPrice"}
						placeholder={"Enter your product price"}
						onChange={(e) => setProductPrice(e.target.value)}
					/>
					<button
						className="mt-4 bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-2 px-4 rounded"
						onClick={handleAddProduct}
					>
						Add Product
					</button>
				</div>
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
								src={productImage}
								alt="Product"
							/>
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
