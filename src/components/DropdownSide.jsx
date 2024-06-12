import React, { useState } from 'react'
import { useDropdownStore } from './StateStore';
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
    FaChevronDown,
    FaChevronRight

} from "react-icons/fa";
import { FaBorderAll } from "react-icons/fa6";
import { MdManageAccounts } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { Role } from '../constant';
import { decryptData, isAllowedRole } from '../helpers';

function DropdownSide() {

    const { admin , teacher, student } = Role;


    const dataDropdown = [
        {
            title: "ສົກຮຽນ",
            icon: <FaCalendar />,
            path: "/year",
            allowRole: [admin],
        },
        {
            title: "ສາຂາ",
            icon: <FaChalkboard />,
            path: "/major",
            allowRole: [admin],
        },
        {
            title: "ພາກ",
            icon: <FaSchool />,
            path: "/part",
            allowRole: [admin],
        },
        {
            title: "ວິຊາ",
            icon: <FaBook />,
            path: "/subject",
            allowRole: [admin],
        },
        {
            title: "ຫ້ອງ",
            icon: <FaSchool />,
            path: "/class",
            allowRole: [admin],
        }
    ]

    const dropdownn = useDropdownStore((state) => state.dropdown);
    const setDropdown = useDropdownStore((state) => state.setDropdown);
    return (
        <div
            className=' w-full '>
            <div className=" flex items-center cursor-pointer hover:bg-blue-500 mb-2 rounded  py-2 px-1 " onClick={setDropdown}>
                <div className="mr-3 text-xl font-bold"><MdManageAccounts /></div>
                <h1>ຈັດການຂໍ້ມູນການຮຽນ</h1>
                {dropdownn ? <div className=" ml-2"><FaChevronDown /></div> : <div className=" ml-2"><FaChevronRight /></div>}
            </div>
            <div className={`${dropdownn ? 'block' : 'hidden'}  bg-[#0a164a] w-full rounded `}>
                {dataDropdown.map((item, id) => (
                    ((isAllowedRole(item.allowRole)) &&(
                        <NavLink
                            key={id}
                            to={item.path}
                            className={({ isActive }) =>
                                isActive
                                    ? " flex mb-2 rounded shadow bg-blue-500 py-2 px-1"
                                    : " flex mb-2 rounded hover:shadow hover:bg-blue-500 py-2 px-1"
                            }
                        >
                            <div key={id} className="mr-3 text-xl font-bold">{item.icon}</div>
                            {item.title}
                        </NavLink>
                    ))
                ))}
            </div>
        </div>
    )
}

export default DropdownSide