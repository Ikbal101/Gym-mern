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
import InstructorRoute from "./InstructorRoute";
import ManageClasses from "../pages/Dashoard/ManageClasses/ManageClasses";
import AdminRoute from "./AdminRoute";
import Payment from "../pages/Dashoard/Payment/Payment";
import MyEnrollClass from "../pages/Dashoard/MyEnrollCLass/MyEnrollClass";
import PaymentHistory from "../pages/PaymentHistory/PaymentHistory";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import MyCLass from "../pages/Dashoard/MyClass/MyCLass";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<NotFoundPage></NotFoundPage>,
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
          path:'enroll',
          element:<MyEnrollClass></MyEnrollClass>
        },
        {
          path:'payment',
          element:<Payment></Payment>
        },
        {
          path:'history',
          element:<PaymentHistory></PaymentHistory>
        },
        {
          path:'manageusers',
          element:<AdminRoute><AllUser></AllUser></AdminRoute>
        },
        {
          path:'manageclasses',
          element:<ManageClasses></ManageClasses>
        },
        {
          path:'addClass',
          element:<InstructorRoute><AddClasses></AddClasses></InstructorRoute>
        },
        {
          path:'myClass',
          element:<InstructorRoute><MyCLass></MyCLass></InstructorRoute>
        },
      ]
    }
  ]);