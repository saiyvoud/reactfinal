import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { GetAllClassDetailByFilter } from "../../api/classDetail";
import Sidebar from "../../components/Sidebar";
import Loading from "../../components/Loading";
import Empty from "../../components/Empty";
import ChecklistHistoryTable from "./components/ChecklistHistoryTable";

const ChecklistHistory = () => {

    const {mUuid, cUuid, subUuid, pUuid} = useParams();

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    const response = await GetAllClassDetailByFilter({cUuid, mUuid, subUuid, pUuid});
    if(!response){
      Swal.fire({
        title: "ຜິດພາດ",
        text: "ບໍ່ສາມາດດິງຂໍ້ມູນເຊັກລາຍຊື່ໄດ້ ກະລຸນາເຂົ້າສູ່ລະບົບອີກຄັ້ງ",
        icon: "error",
      });
      setLoading(false);
      //navigate("/login");
      return;
    }
    console.log("classDetail data::=>");
    console.log(response);
    setData(response)
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [])





  return (
    <Sidebar>
      <div className="px-10 py-5 ">
        <button className="p-2 min-w-32 rounded-md bg-gray-400 text-white" onClick={() => {navigate(-1)}}>ກັບຄືນ</button>
        <ChecklistHistoryTable data={data} loading={loading} />
        <Loading show={loading} className="mt-4" />
        <Empty show={data.length == 0 && !loading} />
      </div>
    </Sidebar>
  );
};

export default ChecklistHistory;
