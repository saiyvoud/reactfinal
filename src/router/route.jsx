import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Dashboard from "../view/dashboard/Dashboard";
import Student from "../view/student/Student";
import AddTeacher from "../view/teacher/components/AddTeacher";
import Teacher from "../view/teacher/Teacher";
import ClassRoom from "../view/class/ClassRoom";
import Year from "../view/year/Year";
import { Major } from "../view/major/Major";
import Part from "../view/part/Part";
import Subject from "../view/subject/Subject";
import Checklist from "../view/checklist/Checklist";
import Report from "../view/report/Report";
import Register from "../view/auth/Register";
import Login from "../view/auth/Login";
import FormsVertfy from "../view/student/components/FormsVertfy";
import FormAddYear from "../view/year/components/FormAddYear";
import FormAddMajor from "../view/major/components/FormAddMajor";
import AccessRight from "../view/accessRight/AccessRight";
import TableAll from "../view/table/TableAll";
import AddTableRoom from "../view/table/components/AddTableRoom";
const RouterPath = () => {
  const router = createBrowserRouter([
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/student",
      element: <Student />,
    },
    {
      path: "/verify_student",
      element: <FormsVertfy />,
    },
    {
      path: "/teacher",
      element: <Teacher />,
    },
    {
      path: "/add_teacher",
      element: <AddTeacher />,
    },
    {
      path: "/class_room",
      element: <ClassRoom />,
    },
    {
      path: "/year",
      element: <Year />,
    },
    {
      path: '/addYear',
      element: <FormAddYear />
    },
    {
      path: "/major",
      element: <Major />,
    }, {
      path: "/addMajor",
      element: <FormAddMajor />
    },
    {
      path: "/part",
      element: <Part />,
    },
    {
      path: "/subject",
      element: <Subject />,
    },
    {
      path: "/table",
      element: <TableAll />
    },
    {
      path: "/addTableRoom",
      element: <AddTableRoom />
    },
    {
      path: "/access_right",
      element: <AccessRight />
    },
    {
      path: "/checklist",
      element: <Checklist />,
    },
    {
      path: "/report",
      element: <Report />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default RouterPath;
