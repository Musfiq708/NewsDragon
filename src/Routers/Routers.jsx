import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";   
import HomeLayout from "../Layout/HomeLayout";

let router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
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
