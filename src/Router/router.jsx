import { createBrowserRouter } from "react-router-dom";
import AdminHome from "../Pages/Admin/AdminHome";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import AuthLayout from "../Layout/AuthLayout";
import Authentication from "../Pages/Authentication";
import Login from "../Containers/Login/Login";
import Register from "../Containers/Registration/Registration";
import AdminLayout from "../Layout/AdminLayout";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'login',
        element: <Login></Login>
      },
      {
        path:'register',
        element: <Register></Register>
      }
    ]
  },

  
  // Admin Layout
  {
    path:'/admin',
    element: <AdminLayout></AdminLayout>,
    children: [
      {
        path: 'adminHome',
        element: <AdminHome></AdminHome>
      }
    ]
  },

  // Auth layout
  {
    path: '/auth',
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: 'authentication',
        element: <Authentication></Authentication>
      }
    ]
  }
]);

export default router;