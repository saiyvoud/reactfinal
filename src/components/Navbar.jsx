import React, { useEffect, useState } from "react";
import { FaBars, FaDoorOpen } from "react-icons/fa";
import { ExitToApp } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { decryptData } from "../helpers";

const Navbar = () => {

  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {

    const getProfile = async () => {
        const email = localStorage.getItem("email");
        const encrpytedrole = localStorage.getItem("role");
        const role = decryptData(encrpytedrole);
        setEmail(email);
        setRole(role);
    }

    getProfile();
  }, [])

  return (
    <nav className="w-full h-20 bg-white px-4 py-3 shadow-lg flex justify-between">
      <div className="flex items-center text-xl">
        <FaBars className="cursor-pointer me-4" />
        <div className="text-blue-500 font-bold">ຍິນດີຕ້ອນຮັບ</div>
      </div>
      <div className="flex items-center">
        <div className="h-10 flex rounded-full overflow-hidden w-10">
          <img src="https://tecdn.b-cdn.net/img/new/standard/city/047.jpg"></img>
        </div>

        <div className="px-5 text-sm">{email} <p className="text-[12px] text-gray-600">{role}</p></div>
        <Link to='/login' className="cursor-pointer"><ExitToApp ></ExitToApp></Link>
      </div>
    </nav>
   
  );
};

export default Navbar;
