import React from "react";

export default function InputSelect({ id, name, onChange, options, value }) {
	return (
		<div className="flex flex-col mr-10">
			<label htmlFor={id} className="text-sm font-semibold mb-1">
				{name}
			</label>
			<select
				id={id}
				onChange={onChange}
				value={value}
				className="border border-gray-100 p-1 rounded-md outline-none w-72 mb-10 bg-transparent"
			>
				<option value="">Select</option>
				{options.map((option) => (
					<option value={option}>{option}</option>
				))}
			</select>
		</div>
	);
}
