import { createBrowserRouter } from "react-router-dom";
import Roots from "./layOut/Roots";
import Login from "./Login";
import Register from "./Register";
import AddCraft from "./AddCraft";
import MyAddCraft from "./MyAddCraft";
import AllCraftItem from "./AllCraftItem";
import Home from "./Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addcraft",
        element: <AddCraft></AddCraft>,
      },
      {
        path: "/my-add-craft",
        element: <MyAddCraft></MyAddCraft>,
      },
      {
        path: "/allcraftanditem",
        element: <AllCraftItem></AllCraftItem>,
        loader: () => fetch("http://localhost:5000/arrtAndcraft"),
      },
    ],
  },
]);
