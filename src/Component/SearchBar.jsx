import React from "react";
import "./styles/searchbar.css";
import { FaSearch } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";

const SearchBar = () => {
	return (
		<div className="search flex flex-row bg-white w-96 items-center h-10 shadow-md rounded-full hover:shadow-xl border">
			<BiSearch className="ml-2" size={22} />
			<input 
            className="outline-none ml-2 w-full"
            type="text" placeholder="Search..." />
		</div>
	);
};

export default SearchBar;
