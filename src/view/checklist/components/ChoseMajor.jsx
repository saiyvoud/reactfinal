import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { GetAllMajorApi } from "../../../api/major";
import Loading from "../../../components/Loading";
import Empty from "../../../components/Empty";
import CardMajor from "./CardMajor";
export const ChoseMajor = () => {


  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
 
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

  useEffect(() => {

    fetchData();
  }, [])



  return (
    
  <>
  <div className="px-10 py-5 ">
    <div className="w-full flex items-center mb-3">
      <h1>ເລືອກສາຂາ</h1>
    </div>
    <CardMajor data={data} />
    <Loading show={loading} className="mt-4" />
    <Empty show={data.length == 0 && !loading} />


  </div>
</>
  )
};


export default ChoseMajor;