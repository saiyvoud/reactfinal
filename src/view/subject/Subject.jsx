import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import { Search } from "@mui/icons-material";
import TableSubject from './components/TableSubject';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import { GetAllSubjectApi } from "../../api/subject";
import Empty from "../../components/Empty";
import SearchBar from "../../components/SearchBar";

const Subject = () => {

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [initDataForSearch, setInitDataForSearch] = useState([]);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    const response = await GetAllSubjectApi();
    if(!response){
      Swal.fire({
        title: "ຜິດພາດ",
        text: "ບໍ່ສາມາດດິງຂໍ້ມູນວິຊາໄດ້ ກະລຸນາເຂົ້າສູ່ລະບົບອີກຄັ້ງ",
        icon: "error",
      });
      setLoading(false);
      //navigate("/login");
      return;
    }
    console.log("subject data::=>");
    console.log(response);
    setData(response)
    setInitDataForSearch(response)
    setLoading(false);
  }

  useEffect(() => {

    fetchData();
  }, [])




  return (
    <Sidebar>
      <div className="px-10 py-5 ">
        <div className="w-full flex items-center justify-between mb-3">
          <h1>Subject</h1>
          <div>
            <button
              onClick={() => navigate("/subject/add")}
              className="bg-blue-400 text-white font-bold border shadow-sm rounded-lg p-2"
            >
              ເພີ່ມວິຊາ
            </button>
          </div>
        </div>
        <SearchBar placeholder={"ຄົ້ນຫາວິຊາ..."} data={initDataForSearch} onSearch={(result) => setData(result)} />
        <TableSubject data={data} loading={loading} onDeleteSuccess={fetchData} />
        <Loading show={loading} className="mt-4" />
        <Empty show={data.length == 0 && !loading} />
      </div>
    </Sidebar>
  )
}

export default Subject