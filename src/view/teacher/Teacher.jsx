import React from "react";
import Sidebar from "../../components/Sidebar";
import { Search } from "@mui/icons-material";
import TableTeacher from "./components/TableTeacher";
const Teacher = () => {
  return (
    <Sidebar>
      <div className="px-10 py-5 ">
        <div className="w-full flex items-center justify-between mb-3">
          <h1>Teacher</h1>
          <div>
            <button className=" me-3 text-blue-500 font-bold border shadow-sm rounded-lg p-2">
              Export CSV
            </button>
            <button
              onClick={() => (window.location.href = "/add_teacher")}
              className="bg-blue-400 text-white font-bold border shadow-sm rounded-lg p-2"
            >
              ເພີ່ມອາຈານ
            </button>
          </div>
        </div>
        <div className=" relative ">
          <input
            type="text"
            placeholder="ຄົ້ນຫາ..."
            className="py-2 px-10 w-full bg-slate-100 rounded-lg"
          ></input>
          <div className="text-slate-400 absolute left-2 top-[6px]">
            <Search></Search>
          </div>
        </div>
        <TableTeacher />
      </div>
    </Sidebar>
  );
};

export default Teacher;
