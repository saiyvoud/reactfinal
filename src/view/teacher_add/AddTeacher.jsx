import React from "react";
import Sidebar from "../../components/Sidebar";

const AddTeacher = () => {
  return (
    <Sidebar>
      <div className="px-10 py-5">
        <div className=" mt-3">
          <p className=" mb-1">Teacher ID</p>
          <input
            type="text"
            placeholder="ລະຫັດອາຈານ"
            className="py-2 px-3 w-full bg-slate-100 rounded-lg border"
          />
        </div>
        <div className=" mt-3">
          <p className=" mb-1">Full Name</p>
          <input
            type="text"
            placeholder="ຊື່ ແລະ ນາມສະກຸນ"
            className="py-2 px-3 w-full bg-slate-100 rounded-lg border"
          />
        </div>
        <div className=" mt-3">
          <p className=" mb-1">Type</p>
          <select className="border rounded-lg w-full px-1 py-1 ">
            <option disabled selected>
              ປະເພດອາຈານ
            </option>
            <option>ປະຈຳ</option>
            <option>ມາຊ່ວຍ</option>
          </select>
        </div>
        <div className=" mt-3">
          <p className=" mb-1">PhoneNumber</p>
          <input
            type="text"
            placeholder="20-xxxx-xxxx"
            className="py-2 px-3 w-full bg-slate-100 rounded-lg border"
          />
        </div>
        <div className=" mt-3">
          <p className=" mb-1">Age</p>
          <input
            type="number"
            placeholder="ອາຍຸ"
            className="py-2 px-3 w-full bg-slate-100 rounded-lg border"
            min={18}
          />
        </div>
        <div className=" mt-3">
          <p className=" mb-1">Gender</p>
          <select className="border rounded-lg w-full px-1 py-1">
            <option disabled selected>
              ...
            </option>
            <option>male</option>
            <option>female</option>
          </select>
        </div>

        <div>
          <div className=" my-5 flex justify-center">
            <button
              onClick={() => alert("Add Teacher Success")}
              className="bg-blue-500 px-5 py-2 text-white font-bold rounded-lg hover:bg-indigo-600"
            >
              ບັນທຶກຂໍ້ມູນ
            </button>
          </div>
          <div className=" my-5 flex justify-center">
            <button
              onClick={() => alert("Add Teacher Success")}
              className="bg-blue-500 px-5 py-2 text-white font-bold rounded-lg hover:bg-indigo-600"
            >
              ບັນທຶກຂໍ້ມູນ
            </button>
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default AddTeacher;
