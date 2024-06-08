import React, { useEffect, useState } from "react";
import { Search } from "@mui/icons-material";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import NewChecklistTable from "./NewChecklistTable";
import { GetAllTeacherApi } from "../../../api/teacher";
import SearchBar from "../../../components/SearchBar";
import Empty from "../../../components/Empty";
import Loading from "../../../components/Loading";
import ExportButton from "../../../components/ExportButton";
import Sidebar from "../../../components/Sidebar";
import NewChecklistDropDownfilter from "./NewChecklistDropDownfilter";
import { GetAllClassDetailByFilter } from "../../../api/classDetail";

const NewCheckList = () => {

    const {id: mUuid} = useParams();
    let [currentCUuid, setCurrentCUuid] = useState("");

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const fetchData = async (cUuid, mUuid) => {
    setLoading(true);
    const response = await GetAllClassDetailByFilter(cUuid, mUuid);
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
    console.log("checklist data::=>");
    console.log(response);
    setData(response)
    setLoading(false);
    setCurrentCUuid(cUuid);
  }


  const handleDropDownChange = async (value) => {
    const cUuid = value;
    await fetchData(cUuid, mUuid);
  }



  return (
    <Sidebar>
      <div className="px-10 py-5 ">
        <NewChecklistDropDownfilter onDropDownChange={handleDropDownChange} />
        <NewChecklistTable data={data} loading={loading} cUuid={currentCUuid} mUuid={mUuid} />
        <Loading show={loading} className="mt-4" />
        <Empty show={data.length == 0 && !loading} />
      </div>
    </Sidebar>
  );
};

export default NewCheckList;
