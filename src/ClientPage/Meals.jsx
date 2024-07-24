import React, { useContext } from "react";
import SearchBar from "../Component/SearchBar";
import { ProductContext } from "./ProductContext";
import ClientMealCard from "../Component/ClientMealCard";

export default function Meals() {
	const { products } = useContext(ProductContext);

	return (
		<div className="flex flex-col pt-3 px-3">
			{/* <div></div>
      <div className="flex flex-row mt-2 flex-wrap justify-start">
        <div className="w-full mb-4">
          <SearchBar />
        </div>
        {products.length === 0 ? (
          <p>No Meals Available</p>
        ) : (
          products.map((product, index) => (
            <div
              key={index}
              className="w-80 max-w-xs rounded overflow-hidden shadow-lg m-4"
            >
              <img
                className="w-full h-40 object-cover"
                src={product.image}
                alt={product.name}
              />
              <div className="px-6 py-4">
                <div className="font-bold text-lg mb-2">{product.name}</div>
                <p className="text-gray-700 text-sm">{product.description}</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                  Ghc{product.price}
                </span>
              </div>
            </div>
          ))
        )}
      </div> */}
			<SearchBar />

			<div className="flex flex-row flex-wrap mt-5">
                <ClientMealCard />
                <ClientMealCard />
                <ClientMealCard />
            </div>
		</div>
	);
}
