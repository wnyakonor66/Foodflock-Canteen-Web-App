import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { loginUser } from "../thunk_action_creators/users";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user.data);
	const navigate = useNavigate();

	useEffect(() => {
		if (user) {
			if (user.role === "vendor") {
				navigate("/vendorForms");
			} else if (user.role === "client") {
				navigate("/client")
			} else {
				navigate("/questions");
			}
		}
	}, [user, navigate]);

	const submitHandler = (event) => {
		event.preventDefault();

		const email = document.getElementById("email").value;
		const password = document.getElementById("password").value;
		dispatch(loginUser({ email, password }));
	};

	return (
		<div className="SignUpPage">
			<h3>Sign In</h3>
			<form className="form-screen" onSubmit={submitHandler}>
				<div className="inputGroup">
					<label htmlFor="email">Email:</label>
					<input
						type="email"
						placeholder="Enter your email"
						autoComplete="off"
						id="email"
					/>
					<label htmlFor="password">Password:</label>
					<input
						type="password"
						placeholder="Enter Password"
						autoComplete="off"
						id="password"
					/>
					<button type="submit" class="btn btn-primary">
						Login
					</button>
				</div>
			</form>
			<div className="login">
				<p>Don't have an Account ?</p>
				<Link to="/" type="submit" class="btn btn-success">
					Sign Up
				</Link>
			</div>
		</div>
	);
};

export default Login;
