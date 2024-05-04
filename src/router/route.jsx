import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import Sidebar from "../components/Sidebar";
import Dashboard from "../view/dashboard/Dashboard";
import Student from "../view/student/Student";
import Teacher from "../view/teacher/Teacher";
const RouterPath = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/student",
      element: <Student />,
    },
    {
      path: "/teacher",
      element: <Teacher />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default RouterPath;
