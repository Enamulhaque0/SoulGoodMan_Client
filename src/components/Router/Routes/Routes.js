import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login//Register/Register";
import NotFound from "../../Pages/NotFound/NotFound";
import Services from "../../Pages/Services/Services";
import ReviewAdd from "../../Pages/Reviews/ReviewAdd";
import Blogs from "../../Pages/Blogs/Blogs";
import ServiceAdd from "../../Pages/Services/ServiceAdd"


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
        element: <ServiceAdd></ServiceAdd>,
      },
      {
        path: "reviews-add",
        element: <ReviewAdd></ReviewAdd>,
      },
      
      {
        path: "blogs",
        element: <Blogs></Blogs>,
      },
      
    ],
  },
]);

export default router;
