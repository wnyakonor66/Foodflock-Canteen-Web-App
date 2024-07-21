import "./App.css";
import Login from "./login/Login";
import QuestionPage from "./Questionnaires/QuestionPage";
import Signup from "./signup/Signup";
import VendorForm from "./Vendorform/VendorForm";
import ClientPage from "./ClientPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import VendorsPage from "./vendorsPage/VendorsPage";
import Profile from "./Component/pages/Profile";
import Order from "./ClientPage/Order";
import Meals from "./ClientPage/Meals";


function App() {
	const route = createBrowserRouter([
		{
			path: "/",
			element: <Signup />,
		},
		{
			path: "/login",
			element: <Login />,
		},
		{
			path: "/questions",
			element: <QuestionPage />,
		},
		{
			path: "/vendorForms",
			element: <VendorForm />,
		},
		{
			path: "/client",
			element: <ClientPage />,
			children: [
				{
					path: "order",
					element: <Order />,
				},
				{
					path: "",
					element: <Meals />,
				},
			],
		},
	
		{
			path: "/vendorsPage",
			element: <VendorsPage />,
			children: [
				{
					path: "",
					element: <Profile />,
				},
                {
					path: "profile",
					element: <Profile />,
				},
			],
		},
	]);
	return (
		<div className="App h-full overflow-x-hidden">
			<RouterProvider router={route} />
		</div>
	);
}

export default App;
