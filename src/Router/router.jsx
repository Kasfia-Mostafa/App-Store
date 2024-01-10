import { createBrowserRouter } from "react-router-dom";
import AdminHome from "../Pages/Admin/AdminHome";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Admin from "../Layout/Admin";
import AuthLayout from "../Layout/AuthLayout";
import Authentication from "../Pages/Authentication";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path:'/',
        element: <Home></Home>
      }
    ]
  },

  
  // Admin Layout
  {
    path:'/admin',
    element: <Admin></Admin>,
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