import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Bookings from "../Pages/Bookings/Bookings";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: 'login',
        element: <Login/>,
      },
      {
        path: 'signup',
        element: <SignUp/>,
      },
      {
        path: 'checkout/:id',
        element: <CheckOut/>,
        loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: 'bookings',
        element: <Bookings/>,
      },
      ]
    },
  ]);

  export default router;