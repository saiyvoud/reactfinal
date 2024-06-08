import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import { Search } from "@mui/icons-material";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import { GetAllClassApi } from "../../api/class";
import Empty from "../../components/Empty";
import SearchBar from "../../components/SearchBar";
import TableClassDetail from "./components/TableClassDetail";
import { GetAllClassDetailApi, GetAllClassDetailByClassIdApi } from "../../api/classDetail";
const ClassDeatil = () => {


  const { id } = useParams();
  
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [initDataForSearch, setInitDataForSearch] = useState([]);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    const response = await GetAllClassDetailByClassIdApi(id);
    if (!response) {
      Swal.fire({
        title: "ຜິດພາດ",
        text: "ບໍ່ສາມາດດິງຂໍ້ມູນຫ້ອງໄດ້ ກະລຸນາເຂົ້າສູ່ລະບົບອີກຄັ້ງ",
        icon: "error",
      });
      //navigate("/login");
      return;
    }
    console.log("classDetail getAllByClassId data::=>");
    console.log(response);
    setData(response);
    setInitDataForSearch(response);
    setLoading(false);
  }

useEffect(() => {
    fetchData();
}, [])
  


  return (
    <Sidebar>
      <div className="px-10 py-5 ">
        <div className="w-full flex items-center justify-between mb-3">
          <h1>ລາຍລະອຽດຫ້ອງ</h1>
          <div>
            <button
              onClick={() => navigate(`/classDetail/${id}/add`)}
              className="bg-blue-400 text-white font-bold border shadow-sm rounded-lg p-2"
            >
              ເພີ່ມນັກສຶກສາໃນຫ້ອງຮຽນ
            </button>
          </div>
        </div>
        <SearchBar placeholder={"ຄົ້ນຫາຫ້ອງ..."} data={initDataForSearch} onSearch={(result) => setData(result)} />
        <TableClassDetail data={data} loading={loading} onDeleteSuccess={fetchData} currentClassId={id}/>
        <Loading show={loading} className="mt-4" />
        <Empty show={data.length == 0 && !loading} />
      </div>
    </Sidebar>
  );
};

export default ClassDeatil;
