import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import CategoryNews from "../Components/Pages/CategoryNews";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Components/Pages/Login";
import Register from "../Components/Pages/Register";


let router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
        element: <Navigate to={"/category/01"}></Navigate>
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: ({ params }) =>

          fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)

      }
    ]
  },
  {
    path: "/news",
    element: <h1>hello news laytout</h1>
  },
  {
    path: "auth",
    element: <AuthLayout></AuthLayout>,
    children:[
      {
        path:"/auth/login",
        element:<Login></Login>
      },
      {
        path:"/auth/Register",
        element:<Register></Register>
      }
    ]
  },
  {
    path: "*",
    element: <h1>Error</h1>
  }
]);

export default function Routers() {
  return <RouterProvider router={router} />;
}
