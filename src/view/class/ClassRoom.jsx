import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import { Search } from "@mui/icons-material";
import TableClassRoom from "./components/TableClassRoom";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import { GetAllClassApi } from "../../api/class";
import Empty from "../../components/Empty";
import SearchBar from "../../components/SearchBar";
const ClassRoom = () => {

  
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [initDataForSearch, setInitDataForSearch] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
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

    // TODO [ERROR]
    // BackEnd error not known sql field "termNo"
    // fetchData();
  }, [])





  return (
    <Sidebar>
      <div className="px-10 py-5 ">
        <div className="w-full flex items-center justify-between mb-3">
          <h1>ClassRoom</h1>
          <div>
            <button
              onClick={() => (window.location.href = "/")}
              className="bg-blue-400 text-white font-bold border shadow-sm rounded-lg p-2"
            >
              ເພີ່ມຫ້ອງຮຽນ
            </button>
          </div>
        </div>
        <SearchBar placeholder={"ຄົ້ນຫາຫ້ອງ..."} data={initDataForSearch} onSearch={(result) => setData(result)} />
        <TableClassRoom data={data} loading={loading} />
        <Loading show={loading} className="mt-4" />
        <Empty show={data.length == 0 && !loading} />
      </div>
    </Sidebar>
  );
};

export default ClassRoom;
