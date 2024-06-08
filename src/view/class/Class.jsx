import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import { Search } from "@mui/icons-material";
import TableClass from "./components/TableClass";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import { GetAllClassApi } from "../../api/class";
import Empty from "../../components/Empty";
import SearchBar from "../../components/SearchBar";
const Class = () => {

  
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [initDataForSearch, setInitDataForSearch] = useState([]);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    const response = await GetAllClassApi();
    if(!response){
      Swal.fire({
        title: "ຜິດພາດ",
        text: "ບໍ່ສາມາດດິງຂໍ້ມູນຫ້ອງໄດ້ ກະລຸນາເຂົ້າສູ່ລະບົບອີກຄັ້ງ",
        icon: "error",
      });
      setLoading(false);
      //navigate("/login");
      return;
    }
    console.log("classroom data::=>");
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
          <h1>ຫ້ອງ</h1>
          <div className="item-center">
            <button
              onClick={() => navigate("/class/add")}
              className="bg-blue-400 text-white font-bold border shadow-sm rounded-lg p-2"
            >
              ເພີ່ມຫ້ອງຮຽນ
            </button>
          </div>
        </div>
        <SearchBar placeholder={"ຄົ້ນຫາຫ້ອງ..."} data={initDataForSearch} onSearch={(result) => setData(result)} />
        <TableClass data={data} loading={loading} onDeleteSuccess={fetchData}/>
        <Loading show={loading} className="mt-4" />
        <Empty show={data.length == 0 && !loading} />
      </div>
    </Sidebar>
  );
};

export default Class;
