import React from "react";

export default function InputTextArea({
	id,
	placeholder,
	name,
	value,
	onChange,
}) {
	return (
		<div className="flex flex-col mr-10">
			<label htmlFor={id} className="text-sm font-semibold mb-1">
				{name}
			</label>
			<textarea
				id={id}
				onChange={onChange}
				value={value}
				placeholder={placeholder}
				maxLength={250}
				className="border border-gray-100 p-1 rounded-md outline-none w-72 mb-10 resize-y max-h-4"
			/>
		</div>
	);
}
