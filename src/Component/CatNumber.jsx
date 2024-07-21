import React from "react";

export default function CatNumber({ number }) {
	return (
		<div className="text-md bg-cyan-500 px-[8px] py-[5px] rounded-full text-white font-roboto font-bold">
			{number < 10 ? "0" : ""}
			{number}
		</div>
	);
}
