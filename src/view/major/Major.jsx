import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import CardMajor from "./components/CardMajor";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { GetAllTeacherApi } from "../../api/teacher";
import Loading from "../../components/Loading";
import { GetAllMajorApi } from "../../api/major";
import Empty from "../../components/Empty";

export const Major = () => {


  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await GetAllMajorApi();
      if(!response){
        Swal.fire({
          title: "ຜິດພາດ",
          text: "ບໍ່ສາມາດດິງຂໍ້ມູນສາຂາໄດ້ ກະລຸນາເຂົ້າສູ່ລະບົບອີກຄັ້ງ",
          icon: "error",
        });
        setLoading(false);
        //navigate("/login");
        return;
      }
      console.log("major data::=>");
      console.log(response);
      setData(response)
      setLoading(false);
    }

    fetchData();
  }, [])



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
      <CardMajor data={data} />
      <Loading show={loading} className="mt-4" />
      <Empty show={data.length == 0 && !loading} />


    </div>
  </Sidebar>;
};
