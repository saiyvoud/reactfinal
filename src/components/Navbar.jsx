import React from "react";
import { FaBars, FaDoorOpen } from "react-icons/fa";
import { ExitToApp } from "@mui/icons-material";
const Navbar = () => {
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

        <div className="px-5 text-sm">Saiyvoud</div>
        <ExitToApp className="cursor-pointer h-20"></ExitToApp>
      </div>
    </nav>
   
  );
};

export default Navbar;
