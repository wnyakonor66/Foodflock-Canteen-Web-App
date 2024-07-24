import React from "react";

export default function PropValue({ property, value }) {
	return (
		<div className="w-full flex flex-row justify-between mt-3">
			<div className="text-sm font-semibold text-gray-500">{property}</div>
			<div className="text-sm font-bold">{value ?? ""}</div>
		</div>
	);
}
