import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import { Search } from "@mui/icons-material";
import TableTeacher from "./components/TableTeacher";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { GetAllTeacherApi } from "../../api/teacher";
import Loading from "../../components/Loading";
import SearchBar from "../../components/SearchBar";
import Empty from "../../components/Empty";
import ExportButton from "../../components/ExportButton";

const Teacher = () => {

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [initDataForSearch, setInitDataForSearch] = useState([]);
  const [data, setData] = useState([]);

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
          <h1>Teacher</h1>
          <div>
          <ExportButton data={data} />
            <button
              onClick={() => navigate("/teacher/add")}
              className="bg-blue-400 text-white font-bold border shadow-sm rounded-lg p-2"
            >
              ເພີ່ມອາຈານ
            </button>
          </div>
        </div>
        <SearchBar placeholder={"ຄົ້ນຫາອາຈານ..."} data={initDataForSearch} onSearch={(result) => setData(result)} />
        <TableTeacher data={data} loading={loading} onDeleteSuccess={fetchData} />
        <Loading show={loading} className="mt-4" />
        <Empty show={data.length == 0 && !loading} />
      </div>
    </Sidebar>
  );
};

export default Teacher;
