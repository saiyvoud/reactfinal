import React, { useState } from "react";
import logo from "../assets/sousaka.jpeg";

// import component
import { SidebarData } from './SidebarData'


import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import Submenu from "./Submenu";

const Sidebar = ({ children }) => {


  return (
    <div className="flex w-full ">
      <div className="w-64 bg-[#152259] fixed top-0 left-0 z-50 h-full  px-4 py-2">
        <div className="my-2 mb-4">
          <img src={logo} alt="" className="px-20" />
          <h1 className="text-2x text-white font-bold text-center py-2 ">
            Souksavath College
          </h1>
          <hr />

          {/* Menu */}
          {
            SidebarData.map((item, index) => {
              return <div>
                <Submenu item={item} id={index} />
              </div>

            })
          }
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
