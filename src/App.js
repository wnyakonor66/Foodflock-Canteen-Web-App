import './App.css';
import Login from './login/Login';
import QuestionPage from './Questionnaires/QuestionPage';
import Signup from './signup/Signup';
import VendorForm from './Vendorform/VendorForm';
import {RouterProvider, createBrowserRouter} from "react-router-dom";


function App() {
  const route = createBrowserRouter ([
    {
      path: "/",
      element: <Signup />
    },
     {
      path: "/login",
      element: <Login />
    },
    {
      path: "/questions",
      element: <QuestionPage />
    },
    {
      path: "/vendorForms",
      element: <VendorForm />
    }
  ]);
  return <div className="App">
      <RouterProvider router={route} />
    </div>
    
  
}

export default App;
