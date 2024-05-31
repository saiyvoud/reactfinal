import React from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
  useNavigate,
} from "react-router-dom";

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
import FormAddMajor from "../view/major/components/FormAddMajor";
import AccessRight from "../view/accessRight/AccessRight";
import TableAll from "../view/table/TableAll";
import AddTableRoom from "../view/table/components/AddTableRoom";
import Authentication from "../components/Authentication";
import AddStudent from "../view/student/components/AddStudent";
import EditStudent from "../view/student/components/EditStudent";
import EditTeacher from "../view/teacher/components/EditTeacher";
import AddYear from "../view/year/components/AddYear";
import EditYear from "../view/year/components/EditYear";
import AddPart from "../view/part/components/AddPart";
import AddSubject from "../view/subject/components/AddSubject";
import EditSubject from "../view/subject/components/EditSubject";
import EditPart from "../view/part/components/EditPart";
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
      element: (
        <Authentication>
          <Dashboard />
        </Authentication>
      ),
    },
    {
      path: "/student",
      element: (
        <Authentication>
          <Student />
        </Authentication>
      ),
    },
    {
      path: "/student/add",
      element: (
        <Authentication>
          <AddStudent />
        </Authentication>
      ),
    },
    {
      path: "/student/edit/:id",
      element: (
        <Authentication>
          <EditStudent />
        </Authentication>
      ),
    },
    {
      path: "/verify_student",
      element: (
        <Authentication>
          <FormsVertfy />
        </Authentication>
      ),
    },
    {
      path: "/teacher",
      element: (
        <Authentication>
          <Teacher />
        </Authentication>
      ),
    },
    {
      path: "/teacher/add",
      element: (
        <Authentication>
          <AddTeacher />
        </Authentication>
      ),
    },
    {
      path: "/teacher/edit/:id",
      element: (
        <Authentication>
          <EditTeacher />
        </Authentication>
      ),
    },
    {
      path: "/class_room",
      element: (
        <Authentication>
          <ClassRoom />
        </Authentication>
      ),
    },
    {
      path: "/year",
      element: (
        <Authentication>
          <Year />
        </Authentication>
      ),
    },
    {
      path: "/year/add",
      element: (
        <Authentication>
          <AddYear />
        </Authentication>
      ),
    },
    {
      path: "/year/edit/:id",
      element: (
        <Authentication>
          <EditYear />
        </Authentication>
      ),
    },
    {
      path: "/major",
      element: (
        <Authentication>
          <Major />
        </Authentication>
      ),
    },
    {
      path: "/addMajor",
      element: (
        <Authentication>
          <FormAddMajor />
        </Authentication>
      ),
    },
    {
      path: "/part",
      element: (
        <Authentication>
          <Part />
        </Authentication>
      ),
    },
    {
      path: "/part/add",
      element: (
        <Authentication>
          <AddPart />
        </Authentication>
      ),
    },
    {
      path: "/part/edit/:id",
      element: (
        <Authentication>
          <EditPart />
        </Authentication>
      ),
    },
    {
      path: "/subject",
      element: (
        <Authentication>
          <Subject />
        </Authentication>
      ),
    },
    {
      path: "/subject/add",
      element: (
        <Authentication>
          <AddSubject />
        </Authentication>
      ),
    },
    {
      path: "/subject/edit/:id",
      element: (
        <Authentication>
          <EditSubject />
        </Authentication>
      ),
    },
    {
      path: "/table",
      element: (
        <Authentication>
          <TableAll />
        </Authentication>
      ),
    },
    {
      path: "/addTableRoom",
      element: (
        <Authentication>
          <AddTableRoom />
        </Authentication>
      ),
    },
    {
      path: "/access_right",
      element: (
        <Authentication>
          <AccessRight />
        </Authentication>
      ),
    },
    {
      path: "/checklist",
      element: (
        <Authentication>
          <Checklist />
        </Authentication>
      ),
    },
    {
      path: "/report",
      element: (
        <Authentication>
          <Report />
        </Authentication>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
};

export default RouterPath;
