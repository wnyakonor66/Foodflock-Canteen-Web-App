import React, { useEffect } from "react";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../thunk_action_creators/users";
import { useDispatch, useSelector } from "react-redux";

const Signup = () => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user.data);
	const navigate = useNavigate();

	useEffect(() => {
		if (user) {
			navigate("/questions");
		}
	}, [user, navigate]);
	const submitHandler = (event) => {
		event.preventDefault();

		const name = document.getElementById("name").value;
		const email = document.getElementById("email").value;
		const password = document.getElementById("password").value;
		dispatch(registerUser({ name, email, password }));
	};
	return (
		<div className="SignUpPage">
			<h3>Sign Up</h3>
			<form className="form-screen" onSubmit={submitHandler}>
				<div className="inputGroup">
					<label htmlFor="name">Name:</label>
					<input
						type="text"
						placeholder="Enter your name"
						autoComplete="off"
						id="name"
					/>
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
					<button type="submit" class="btn btn-success">
						Sign Up
					</button>
				</div>
			</form>
			<div className="login">
				<p>Already have an account ?</p>
				<Link to="/login" type="submit" class="btn btn-primary">
					Login
				</Link>
			</div>
		</div>
	);
};

export default Signup;
