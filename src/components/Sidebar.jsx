import React, { useState } from "react";
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
  FaSquare
} from "react-icons/fa";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  // const [activeLink, setActiveLink] = useState(location.pathname);
  // const handleLinkClick = (path) => {
  //   setActive(path);
  //   setClick(false);
  // };
  const data = [
    {
      title: "ໜ້າຫຼັກ",
      icon: <FaHome />,
      path: "/",
    },
    { title: "ນັກຮຽນ", icon: <FaUser />, path: "/student" },
    { title: "ອາຈານ", icon: <FaChalkboardTeacher />, path: "/teacher" },
    { title: "ຫ້ອງຮຽນ", icon: <FaSchool />, path: "/teacher" },
    { title: "ສົກຮຽນ", icon: <FaCalendar />, path: "/teacher" },
    { title: "ສາຂາ", icon: <FaChalkboard />, path: "/teacher" },
    { title: "ພາກຮຽນ", icon: <FaSchool />, path: "/teacher" },
    { title: "ວິຊາ", icon: <FaBook />, path: "/teacher" },
    { title: "ເຊັກລາຍຊື່", icon: <FaCheckSquare />, path: "/teacher" },
    { title: "ລາຍງານ", icon: <FaFile />, path: "/teacher" },
  ];
  return (
    <div className="flex w-full ">
      <div className="w-64 bg-[#152259] fixed top-0 left-0 z-50 h-full  px-4 py-2">
        <div className="my-2 mb-4">
          <img src={logo} alt="" className="px-20" />
          <h1 className="text-2x text-white font-bold text-center py-2 ">
            Sousaka Collect
          </h1>
          <hr />
          <div className=" text-white font-bold mt-4">
            {data.map((items, index) => (
              <NavLink
                key={index}
                to={items.path}
                className={({ isActive }) =>
                  isActive
                    ? " flex mb-2 rounded shadow bg-blue-500 py-2 px-1"
                    : " flex mb-2 rounded hover:shadow hover:bg-blue-500 py-2 px-1"
                }
              >
                <div className="mr-3 text-xl font-bold">{items.icon}</div>
                {items.title}
              </NavLink>
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
