import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Instractors from "../pages/Instractors/Instractors";
import Classes from "../pages/Classes/Classes";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: "/",
            element:<Home></Home>
        },
        {
            path: "instructors",
            element:<Instractors></Instractors>
        },
        {
            path: "classes",
            element:<Classes></Classes>
        },
      ]
    },
  ]);