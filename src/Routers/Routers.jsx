import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import CategoryNews from "../Components/Pages/CategoryNews";


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
    path: "login",
    element: <h1>Welcome to login</h1>
  },
  {
    path: "*",
    element: <h1>Error</h1>
  }
]);

export default function Routers() {
  return <RouterProvider router={router} />;
}
