import React, { useEffect, useState } from "react";
import { TableBar } from '@mui/icons-material'
import Sidebar from "../../components/Sidebar";
import { Search } from "@mui/icons-material";
import TablePart from './components/TablePart';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { GetAllTeacherApi } from "../../api/teacher";
import Loading from "../../components/Loading";
import { GetAllPartApi } from "../../api/part";
import Empty from "../../components/Empty";
import SearchBar from "../../components/SearchBar";
const Part = () => {
  

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [initDataForSearch, setInitDataForSearch] = useState([]);
  const [data, setData] = useState([]);

  
  const fetchData = async () => {
    setLoading(true);
    const response = await GetAllPartApi();
    if(!response){
      Swal.fire({
        title: "ຜິດພາດ",
        text: "ບໍ່ສາມາດດິງຂໍ້ມູນພາກໄດ້ ກະລຸນາເຂົ້າສູ່ລະບົບອີກຄັ້ງ",
        icon: "error",
      });
      setLoading(false);
      //navigate("/login");
      return;
    }
    console.log("part data::=>");
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
          <h1>Part</h1>
          <div>
            <button
              onClick={() => navigate("/part/add")}
              className="bg-blue-400 text-white font-bold border shadow-sm rounded-lg p-2"
            >
              ເພີ່ມພາກຮຽນ
            </button>
          </div>
        </div>
        <SearchBar placeholder={"ຄົ້ນຫາພາກ..."} data={initDataForSearch} onSearch={(result) => setData(result)} />
        <TablePart data={data} loading={loading} onDeleteSuccess={fetchData} />
        <Loading show={loading} className="mt-4" />
        <Empty show={data.length == 0 && !loading} />
      </div>
    </Sidebar>
  )
}

export default Part