import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "./thunk_action_creators/users";
import "./auth.css";
import logo from "../src/Assets/backgroudImg.png";

const AuthPage = () => {
	const [isLogin, setIsLogin] = useState(true);
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user.data);
	const navigate = useNavigate();

	useEffect(() => {
		if (user) {
			if (user.role === "vendor") {
				navigate("/vendorsPage");
			} else if (user.role === "client") {
				navigate("/client");
			} else {
				navigate("/questions");
			}
		}
	}, [user, navigate]);

	const submitHandler = (event) => {
		event.preventDefault();

		const email = document.getElementById("email").value;
		const password = document.getElementById("password").value;

		if (isLogin) {
			dispatch(loginUser({ email, password }));
		} else {
			const name = document.getElementById("name").value;
			dispatch(registerUser({ name, email, password }));
		}
	};

	return (
		<div className="auth-container">
			<div className="auth-box">
				<div className="form-section">
					<h3>{isLogin ? "Sign In" : "Sign Up"}</h3>
					<form className="form-screen" onSubmit={submitHandler}>
						<div className="inputGroup">
							{!isLogin && (
								<>
									<label htmlFor="name">Name:</label>
									<input
										type="text"
										placeholder="Enter your name"
										autoComplete="off"
										id="name"
									/>
								</>
							)}
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
							<button type="submit" className="btn btn-primary">
								{isLogin ? "Login" : "Sign Up"}
							</button>
						</div>
					</form>
					<div className="toggle-auth">
						<p>
							{isLogin ? "Don't have an account?" : "Already have an account?"}
						</p>
						<button
							onClick={() => setIsLogin(!isLogin)}
							className="btn btn-secondary"
						>
							{isLogin ? "Sign Up" : "Login"}
						</button>
					</div>
				</div>
				<div className="image-section">
					<img src={logo} alt="LoginImg" />
				</div>
			</div>
		</div>
	);
};

export default AuthPage;
