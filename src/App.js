import "./App.css";
import Login from "./login/Login";
import QuestionPage from "./Questionnaires/QuestionPage";
import Signup from "./signup/Signup";
import VendorForm from "./Vendorform/VendorForm";
import ClientPage from "./ClientPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import VendorsPage from "./vendorsPage/VendorsPage";
import Profile from "./vendorsPage/pages/Profile";
import Order from "./ClientPage/Order";
import Meals from "./ClientPage/Meals";
import Product from "./Component/pages/Product";
import OrderMenu from "./Component/pages/OrderMenu";
import Settings from "./Component/pages/Settings";
import Support from "./Component/pages/Support";
import { ProductProvider } from "./ClientPage/ProductContext";
import { VendorProvider } from "./ClientPage/VendorContext";
import Vendor from "./ClientPage/Vendor";
import OrderForm from "./ClientPage/Order";
import { PaymentProvider } from "./ClientPage/PaymentContext";

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
        {
          path: "vendors",
          element: <Vendor />
        },
        {
          path: "orders",
          element: <OrderForm/>
        }
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
        {
          path: "product",
          element: <Product />,
        },
        {
          path: "order",
          element: <OrderMenu />,
        },
        {
          path: "settings",
          element: <Settings />,
        },
        {
          path: "support",
          element: <Support />,
        },
      ],
    },
  ]);

  return (
    <div className="App h-full overflow-x-hidden">
     <PaymentProvider>
      <VendorProvider>
        <ProductProvider>
          <RouterProvider router={route} />
        </ProductProvider>
        </VendorProvider> 
      </PaymentProvider> 
    </div>
  );
}

export default App;