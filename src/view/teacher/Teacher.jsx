import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import { Search } from "@mui/icons-material";
import TableTeacher from "./components/TableTeacher";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { GetAllTeacherApi } from "../../api/teacher";
import Loading from "../../components/Loading";

const Teacher = () => {

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await GetAllTeacherApi();
      if(!response){
        Swal.fire({
          title: "ຜິດພາດ",
          text: "ບໍ່ສາມາດດິງຂໍ້ມູນອາຈານໄດ້ ກະລຸນາເຂົ້າສູ່ລະບົບອີກຄັ້ງ",
          icon: "error",
        });
        setLoading(false);
        //navigate("/login");
        return;
      }
      console.log("teacher data::=>");
      console.log(response);
      setData(response)
      setLoading(false);
    }

    fetchData();
  }, [])



  return (
    <Sidebar>
      <div className="px-10 py-5 ">
        <div className="w-full flex items-center justify-between mb-3">
          <h1>Teacher</h1>
          <div>
            <button className=" me-3 text-blue-500 font-bold border shadow-sm rounded-lg p-2">
              Export Excel
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
        <TableTeacher data={data} loading={loading} />
        <Loading loading={loading} className="mt-4" />
      </div>
    </Sidebar>
  );
};

export default Teacher;
