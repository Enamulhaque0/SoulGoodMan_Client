import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login//Register/Register";
import NotFound from "../../Pages/NotFound/NotFound";
import Services from "../../Pages/Services/Services";
import MyReviews from "../../Pages/Reviews/MyReviews";
import Blogs from "../../Pages/Blogs/Blogs";
import ServiceAdd from "../../Pages/Services/ServiceAdd"
import PrivateRoutes from "../PrivateRoute/PrivateRoutes"


const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "services",
        element: <Services></Services>,
      },
      {
        path: "service-add",
        element: <PrivateRoutes><ServiceAdd></ServiceAdd></PrivateRoutes>,
      },
      {
        path: "reviews",
        element: <PrivateRoutes><MyReviews></MyReviews></PrivateRoutes>,
      },
      
      {
        path: "blogs",
        element: <Blogs></Blogs>,
      },
      
    ],
  },
]);

export default router;
