import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { server_url } from "../static/variables";

const QuestionPage = () => {
	const navigate = useNavigate();
	const [error, setError] = useState(null);

	const handleChoice = async (choice) => {
		try {
			const response = await fetch(`${server_url}/auth/register/role`, {
				method: "POST",
				body: JSON.stringify({ role: choice }),
				headers: {
					"Content-Type": "application/json",
				},
				credentials: "include",
			});
			if (!response.ok) {
				throw new Error(response.statusText);
			}
			if (choice === "vendor") {
				navigate("/vendorForms");
			} else {
				navigate("/VendorsPage");
			}
		} catch (error) {
			setError(error.message);
		}
	};

	return (
		<div className="container d-flex flex-column justify-content-center align-items-center vh-100">
			<form className="text-center p-4 border rounded">
				{error && <p className="text-danger">{error}</p>}
				<h2 className="mb-4">Are you a vendor or a client?</h2>
				<div className="form-group">
					<button
						type="button"
						className="btn btn-primary me-2"
						onClick={() => handleChoice("vendor")}
					>
						Vendor
					</button>
					<button
						type="button"
						className="btn btn-secondary ms-2"
						onClick={() => handleChoice("client")}
					>
						Client
					</button>
				</div>
			</form>
		</div>
	);
};

export default QuestionPage;
