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
import ServiceDetails from "../../Pages/Services/ServiceDetails";


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
        loader: ()=> fetch("http://localhost:5000/")
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
        loader: ()=> fetch("http://localhost:5000/services")
      },
      {
        path: "service-add",
        element: <PrivateRoutes><ServiceAdd></ServiceAdd></PrivateRoutes>,
      },
      {
        path: "ServiceDetails",
        element: <ServiceDetails></ServiceDetails>,
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
