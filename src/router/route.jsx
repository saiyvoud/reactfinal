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
import Class from "../view/class/Class";
import Year from "../view/year/Year";
import { Major } from "../view/major/Major";
import Part from "../view/part/Part";
import Subject from "../view/subject/Subject";
import Checklist from "../view/checklistStudent/Checklist";
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
import AddAccessRight from "../view/accessRight/components/AddAccessRight";
import EditAccessRight from "../view/accessRight/components/EditAccessRight";
import AddMajor from "../view/major/components/AddMajor";
import EditMajor from "../view/major/components/EditMajor";
import AddClass from "../view/class/components/AddClass";
import EditClass from "../view/class/components/EditClass";
import ClassDetail from "../view/classDetail/ClassDetail";
import AddClassDetail from "../view/classDetail/components/AddClassDetail";
import EditClassDetail from "../view/classDetail/components/EditClassDetail";
import NewCheckList from "../view/checklist/components/NewChecklist";
import ChecklistHistory from "../view/checklistHistory/ChecklistHistory";
import StudentReport from "../view/report/components/StudentReport";
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
      path: "/class",
      element: (
        <Authentication>
          <Class />
        </Authentication>
      ),
    },
    {
      path: "/class/add",
      element: (
        <Authentication>
          <AddClass />
        </Authentication>
      ),
    },
    {
      path: "/class/edit/:id",
      element: (
        <Authentication>
          <EditClass />
        </Authentication>
      ),
    },
    {
      path: "/classDetail/:id",
      element: (
        <Authentication>
          <ClassDetail />
        </Authentication>
      ),
    },
    {
      path: "/classDetail/:id/add",
      element: (
        <Authentication>
          <AddClassDetail />
        </Authentication>
      ),
    },
    {
      path: "/classDetail/:id/edit/:cdUuid",
      element: (
        <Authentication>
          <EditClassDetail />
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
      path: "/major/add",
      element: (
        <Authentication>
          <AddMajor />
        </Authentication>
      ),
    },
    {
      path: "/major/edit/:id",
      element: (
        <Authentication>
          <EditMajor />
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
      path: "/accessRight",
      element: (
        <Authentication>
          <AccessRight />
        </Authentication>
      ),
    },
    {
      path: "/accessRight/add",
      element: (
        <Authentication>
          <AddAccessRight />
        </Authentication>
      ),
    },
    {
      path: "/accessRight/edit/:id",
      element: (
        <Authentication>
          <EditAccessRight />
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
    // {
    //   path: "/checklist/newChecklist/:id",
    //   element: (
    //     <Authentication>
    //       <NewCheckList />
    //     </Authentication>
    //   ),
    // },
    {
      path: "/checklistHistory/:mUuid/:cUuid/:subUuid/:pUuid",
      element: (
        <Authentication>
          <ChecklistHistory />
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
    {
      path: "/report/studentReport",
      element: (
        <Authentication>
          <StudentReport />
        </Authentication>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
};

export default RouterPath;
