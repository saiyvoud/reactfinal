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
import { Role } from "../constant";
const RouterPath = () => {

  const { admin, teacher, student } = Role;

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
        <Authentication allowedRoles={[admin]}>
          <Dashboard />
        </Authentication>
      ),
    },
    {
      path: "/student",
      element: (
        <Authentication allowedRoles={[admin]}>
          <Student />
        </Authentication>
      ),
    },
    {
      path: "/student/add",
      element: (
        <Authentication allowedRoles={[admin]}>
          <AddStudent />
        </Authentication>
      ),
    },
    {
      path: "/student/edit/:id",
      element: (
        <Authentication allowedRoles={[admin]}>
          <EditStudent />
        </Authentication>
      ),
    },
    {
      path: "/verify_student",
      element: (
        <Authentication allowedRoles={[admin]}>
          <FormsVertfy />
        </Authentication>
      ),
    },
    {
      path: "/teacher",
      element: (
        <Authentication allowedRoles={[admin]}>
          <Teacher />
        </Authentication>
      ),
    },
    {
      path: "/teacher/add",
      element: (
        <Authentication allowedRoles={[admin]}>
          <AddTeacher />
        </Authentication>
      ),
    },
    {
      path: "/teacher/edit/:id",
      element: (
        <Authentication allowedRoles={[admin]}>
          <EditTeacher />
        </Authentication>
      ),
    },
    {
      path: "/class",
      element: (
        <Authentication allowedRoles={[admin]}>
          <Class />
        </Authentication>
      ),
    },
    {
      path: "/class/add",
      element: (
        <Authentication allowedRoles={[admin]}>
          <AddClass />
        </Authentication>
      ),
    },
    {
      path: "/class/edit/:id",
      element: (
        <Authentication allowedRoles={[admin]}>
          <EditClass />
        </Authentication>
      ),
    },
    {
      path: "/classDetail/:id",
      element: (
        <Authentication allowedRoles={[admin]}>
          <ClassDetail />
        </Authentication>
      ),
    },
    {
      path: "/classDetail/:id/add",
      element: (
        <Authentication allowedRoles={[admin]}>
          <AddClassDetail />
        </Authentication>
      ),
    },
    {
      path: "/classDetail/:id/edit/:cdUuid",
      element: (
        <Authentication allowedRoles={[admin]}>
          <EditClassDetail />
        </Authentication>
      ),
    },
    {
      path: "/year",
      element: (
        <Authentication allowedRoles={[admin]}>
          <Year />
        </Authentication>
      ),
    },
    {
      path: "/year/add",
      element: (
        <Authentication allowedRoles={[admin]}>
          <AddYear />
        </Authentication>
      ),
    },
    {
      path: "/year/edit/:id",
      element: (
        <Authentication allowedRoles={[admin]}>
          <EditYear />
        </Authentication>
      ),
    },
    {
      path: "/major",
      element: (
        <Authentication allowedRoles={[admin]}>
          <Major />
        </Authentication>
      ),
    },
    {
      path: "/major/add",
      element: (
        <Authentication allowedRoles={[admin]}>
          <AddMajor />
        </Authentication>
      ),
    },
    {
      path: "/major/edit/:id",
      element: (
        <Authentication allowedRoles={[admin]}>
          <EditMajor />
        </Authentication>
      ),
    },
    {
      path: "/addMajor",
      element: (
        <Authentication allowedRoles={[admin]}>
          <FormAddMajor />
        </Authentication>
      ),
    },
    {
      path: "/part",
      element: (
        <Authentication allowedRoles={[admin]}>
          <Part />
        </Authentication>
      ),
    },
    {
      path: "/part/add",
      element: (
        <Authentication allowedRoles={[admin]}>
          <AddPart />
        </Authentication>
      ),
    },
    {
      path: "/part/edit/:id",
      element: (
        <Authentication allowedRoles={[admin]}>
          <EditPart />
        </Authentication>
      ),
    },
    {
      path: "/subject",
      element: (
        <Authentication allowedRoles={[admin]}>
          <Subject />
        </Authentication>
      ),
    },
    {
      path: "/subject/add",
      element: (
        <Authentication allowedRoles={[admin]}>
          <AddSubject />
        </Authentication>
      ),
    },
    {
      path: "/subject/edit/:id",
      element: (
        <Authentication allowedRoles={[admin]}>
          <EditSubject />
        </Authentication>
      ),
    },
    {
      path: "/accessRight",
      element: (
        <Authentication allowedRoles={[admin]}>
          <AccessRight />
        </Authentication>
      ),
    },
    {
      path: "/accessRight/add",
      element: (
        <Authentication allowedRoles={[admin]}>
          <AddAccessRight />
        </Authentication>
      ),
    },
    {
      path: "/accessRight/edit/:id",
      element: (
        <Authentication allowedRoles={[admin]}>
          <EditAccessRight />
        </Authentication>
      ),
    },
    {
      path: "/checklist",
      element: (
        <Authentication allowedRoles={[admin, teacher]}>
          <Checklist />
        </Authentication>
      ),
    },
    // {
    //   path: "/checklist/newChecklist/:id",
    //   element: (
    //      <Authentication allowedRoles={[admin, teacher]}>
    //       <NewCheckList />
    //     </Authentication>
    //   ),
    // },
    {
      path: "/checklistHistory/:mUuid/:cUuid/:subUuid/:pUuid",
      element: (
        <Authentication allowedRoles={[admin, teacher]}>
          <ChecklistHistory />
        </Authentication>
      ),
    },
    {
      path: "/report",
      element: (
        <Authentication allowedRoles={[admin, teacher, student]}>
          <Report />
        </Authentication>
      ),
    },
    {
      path: "/report/studentReport",
      element: (
        <Authentication allowedRoles={[admin, teacher, student]}>
          <StudentReport />
        </Authentication>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
};

export default RouterPath;
