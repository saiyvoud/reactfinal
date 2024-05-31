import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import { Search, Cached } from "@mui/icons-material";
import TableStudent from "./components/TableStudent";
import { GetAllStudentApi } from "../../api/student";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import SearchBar from "../../components/SearchBar";
import ExportButton from "../../components/ExportButton";
import Empty from "../../components/Empty";

const Student = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [initDataForSearch, setInitDataForSearch] = useState([]);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    const response = await GetAllStudentApi();
    if (!response) {
      Swal.fire({
        title: "ຜິດພາດ",
        text: "ບໍ່ສາມາດດິງຂໍ້ມູນນັກສຶກສາໄດ້ ກະລຸນາເຂົ້າສູ່ລະບົບອີກຄັ້ງ",
        icon: "error",
      });
      setLoading(false);
      //navigate("/login");
      return;
    }
    console.log("student data::=>");
    console.log(response);
    setData(response);
    setInitDataForSearch(response);
    setLoading(false);
  };

  useEffect(() => {

    fetchData();
  }, []);

  return (
    <Sidebar>
      <div className="px-10 py-5 ">
        <div className="w-full flex items-center justify-between mb-3">
          <h1>Students</h1>
          <div>
            <ExportButton data={data} />
            <button
              onClick={() => navigate("/student/add")}
              className="bg-blue-400 text-white font-bold border shadow-sm rounded-lg p-2"
            >
              ເພີ່ມນັກສຶກສາ
            </button>
          </div>
        </div>
        <SearchBar placeholder={"ຄົ້ນຫານັກສຶກສາ..."} data={initDataForSearch} onSearch={(result) => setData(result)} />
        <TableStudent data={data} loading={loading} onDeleteSuccess={fetchData} />
        <Loading show={loading} className="mt-4" />
        <Empty show={data.length == 0 && !loading} />
      </div>
    </Sidebar>
  );
};

export default Student;
