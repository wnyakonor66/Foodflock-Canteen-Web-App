import React, { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "./vendorform.css";
import { useDispatch, useSelector } from "react-redux";
import { addBusiness } from "../thunk_action_creators/business";

const VendorForm = () => {
	const [phone, setPhone] = useState("");
	const [hasSocialMedia, setHasSocialMedia] = useState(false);
	const dispatch = useDispatch();

	const business = useSelector((state) => state.business.data);

	useEffect(() => {
		if (business) {
			console.log(business);
		}
	}, [business]);

	const handleSubmit = (event) => {
		event.preventDefault();

		const businessName = document.getElementById("businessName").value;
		const contactPhoneNumber =
			document.getElementById("contactPhoneNumber").value;
		const email = document.getElementById("email").value;
		const description = document.getElementById("description").value;
		const makes_delivery = document.getElementById("deliveryOptions").value;

		const data = {
			name: businessName,
			phone: contactPhoneNumber,
			email: email,
			description: description,
			makes_delivery: makes_delivery,
		};

		dispatch(addBusiness(data));
	};
	return (
		<div className="vendorScreen">
			<h2>Vendors Registration Form</h2>
			<form onSubmit={handleSubmit}>
				<div className="inputGroup">
					<h3>Business Information</h3>
					<label htmlFor="businessName" className="required-asterisk">
						Business Name
					</label>
					<input
						type="text"
						placeholder="Enter your Business Name"
						id="businessName"
						autoComplete="off"
						required
					/>

					<h3>Contact Information</h3>
					<label htmlFor="contactPersonName" className="required-asterisk">
						Contact Person Name
					</label>
					<input type="text" id="contactPersonName" required />
					<label htmlFor="contactPhoneNumber" className="required-asterisk">
						Contact Phone number
					</label>
					<PhoneInput
						country={"gh"}
						value={phone}
						onChange={setPhone}
						countryCodeEditable={false}
						inputProps={{
							name: "phone",
							autoFocus: true,
							required: true,
							id: "contactPhoneNumber",
						}}
					/>
					<label htmlFor="email" className="required-asterisk">
						Contact Email
					</label>
					<input type="email" id="email" required />
					<h3>Business Details</h3>
					<label htmlFor="businessDescription" className="required-asterisk">
						Business Description
					</label>
					<textarea
						id="description"
						name="businessDescription"
						required
					></textarea>
					<label htmlFor="deliveryOptions" className="required-asterisk">
						Delivery Options{" "}
					</label>
					<select name="deliveryOptions" id="deliveryOptions" required>
						<option value="">Do you accept delivery</option>
						<option value="Yes">Yes</option>
						<option value="No">No</option>
					</select>

					<h3>Social Media Handles</h3>
					<label htmlFor="socialMediaHandles" className="required-asterisk">
						Do you have any social Media Handles?
					</label>
					<select
						name="hasSocialMedia"
						onChange={(e) => setHasSocialMedia(e.target.value === "Yes")}
						required
					>
						<option value="">Select an option</option>
						<option value="Yes">Yes</option>
						<option value="No">No</option>
					</select>

					{hasSocialMedia && (
						<>
							<label htmlFor="facebookUrl">
								Facebook
								<input type="url" name="facebookUrl" />
							</label>
							<label htmlFor="instagramHandle">
								Instagram Handle:
								<input type="text" name="instagramHandle" />
							</label>
							<label htmlFor="TwitterHandle">
								Twitter Handle:
								<input type="text" name="TwitterHandle" />
							</label>
						</>
					)}
					<button type="submit">Submit</button>
				</div>
			</form>
		</div>
	);
};

export default VendorForm;
