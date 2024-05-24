import React from "react";
import logo from "../assets/sousaka.jpeg";
import {
  FaHome,
  FaUser,
  FaSchool,
  FaChalkboard,
  FaFile,
  FaCalendar,
  FaChalkboardTeacher,
  FaBook,
  FaCheckSquare,
  FaSquare,
  FaChevronRight,
  FaChevronDown
} from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

import DropdownSide from "./DropdownSide";
import Navbar from "./Navbar";

const Sidebar = ({ children }) => {

  const data = [
    {
      title: "ໜ້າຫຼັກ",
      icon: <FaHome />,
      path: "/",
    },
    { title: "ນັກຮຽນ", icon: <FaUser />, path: "/student" },
    {
      title: "ອາຈານ",
      icon: <FaChalkboardTeacher />,
      path: "/teacher",
    },
    {
      title: 'dropdown',
      icon: <MdManageAccounts />,
      element: <DropdownSide />
    },
    {
      title: 'ສິດເຂົ້າໃຊ້',
      icon: <RiAdminFill />,
      path: '/access_right'
    },
    {
      title: "ເຊັກລາຍຊື່",
      icon: <FaCheckSquare />,
      path: "/checklist",
    },
    { title: "ລາຍງານ", icon: <FaFile />, path: "/report" },
  ];
  return (
    <div className="flex w-full ">
      <div className="w-64 bg-[#152259] fixed top-0 left-0 z-50 h-full  px-4 py-2">
        <div className="my-2 mb-4">
          <img src={logo} alt="" className="px-20" />
          <h1 className="text-2x text-white font-bold text-center py-2 ">
            Souksavath College
          </h1>
          <hr />
          <div className=" text-white font-bold mt-4">
            {data.map((item, index) => (
              <div key={index}>

                {item.title === "dropdown" ? (
                  <div className="mb-2">

                    <DropdownSide />
                  </div>
                ) : (
                  <NavLink
                    key={index}
                    to={item.path}
                    className="flex mb-2 rounded hover:shadow hover:bg-blue-500 py-2 px-1"
                  >
                    <div className="mr-3 text-xl font-bold">{item.icon}</div>
                    {item.title}
                  </NavLink>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Navbar */}
      <div className="w-full ps-[250px]">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
