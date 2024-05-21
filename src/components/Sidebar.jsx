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
  FaSquare,
  FaChevronRight,
  FaChevronDown
} from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import DropdownSide from "./DropdownSide";

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
    }
    ,
    {
      title: "ເຊັກລາຍຊື່",
      icon: <FaCheckSquare />,
      path: "/checklist",
    },
    { title: "ລາຍງານ", icon: <FaFile />, path: "/report" },
  ];

  const [dropdown, setDropdown] = useState(false)
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
              <div className=" flex flex-col justify-center">
                {
                  (items.title === "dropdown")
                    ?
                    <NavLink className={({ isActive }) =>
                      isActive
                        ? " flex "
                        : " flex mb-2 rounded hover:shadow hover:bg-blue-500 py-2 px-1"
                    }>
                      <DropdownSide />
                    </NavLink>
                    :
                    <>


                      <div>
                        <>
                          {items.status == true ? (
                            <div className="w-full  h-[20%] text-sm text-slate-300 ">
                              ຈັດການຫ້ອງຮຽນ
                            </div>
                          ) : (
                            <div />
                          )}
                        </>
                        <NavLink
                          key={index}
                          to={items.path}
                          className={({ isActive }) =>
                            isActive
                              ? " flex mb-2 rounded shadow bg-blue-500 py-2 px-1"
                              : " flex mb-2 rounded hover:shadow hover:bg-blue-500 py-2 px-1"
                          }
                        >
                          <div>
                            <div className=" flex items-center">
                              <div className="mr-3 text-xl font-bold">{items.icon}</div>
                              {items.title}
                            </div>
                          </div>
                        </NavLink>
                      </div>
                    </>
                }
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
