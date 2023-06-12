import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Instractors from "../pages/Instractors/Instractors";
import Classes from "../pages/Classes/Classes";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import MySelectedClass from "../pages/Dashoard/MyCart/MySelectedClass";
import PrivateRoute from "./PrivateRoute";
import AllUser from "../pages/Dashoard/AllUser/AllUser";
import AddClasses from "../pages/Dashoard/AddClasses/AddClasses";

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
        {
            path: "login",
            element:<Login></Login>
        },
        {
            path: "signup",
            element:<SignUp></SignUp>
        },
      ]
    },
    {
      path:'dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path:'mycart',
          element:<MySelectedClass></MySelectedClass>
        },
        {
          path:'manageusers',
          element:<AllUser></AllUser>
        },
        {
          path:'addClass',
          element:<AddClasses></AddClasses>
        },
      ]
    }
  ]);