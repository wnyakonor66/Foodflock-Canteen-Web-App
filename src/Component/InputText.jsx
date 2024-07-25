import React from "react";

export default function InputText({
	id,
	placeholder,
	name,
	value,
	onChange,
	type,
	min,
	max,
}) {
	return (
		<div className="flex flex-col mr-10">
			<label htmlFor={id} className="text-sm font-semibold mb-1">
				{name}
			</label>
			<input
				id={id}
				onChange={onChange}
				value={value}
				placeholder={placeholder}
				className="border border-gray-100 p-1 rounded-md outline-none w-72 mb-10"
				type={type ?? "text"}
				min={min}
				max={max}
			/>
		</div>
	);
}
