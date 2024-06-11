// styles
import "./App.css";

// components
import ProtectedRoutes from "./components/ProtectedRoutes";
// layout
import MainLayout from "./layout/MainLayout";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Purchased from "./pages/Purchased";
import Login from "./pages/Login";
import Signin from "./pages/Signin";


// react router dom imports
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

// context
import { useContext } from "react";
import { GlobalContext } from "./context/globalContext";

function App() {
  const { user } = useContext(GlobalContext);
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <MainLayout />
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/purchased",
          element: <Purchased />,
        },
        {
          path: "/product/:id",
          element: <Product />,
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/signin",
      element: user ? <Navigate to="/" /> : <Signin />,
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
