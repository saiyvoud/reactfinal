import React from "react";
import Sidebar from "../../components/Sidebar";
import CardMajor from "./components/CardMajor";

export const Major = () => {
  return <Sidebar>
    <div className="px-10 py-5 ">
      <div className="w-full flex items-center justify-between mb-3">
        <h1>Majors</h1>
        <div>
          <button
            onClick={() => (window.location.href = "/addMajor")}
            className="bg-blue-400 text-white font-bold border shadow-sm rounded-lg p-2"
          >
            ເພີ່ມສາຂາ
          </button>
        </div>
      </div>
      <CardMajor />

    </div>
  </Sidebar>;
};
