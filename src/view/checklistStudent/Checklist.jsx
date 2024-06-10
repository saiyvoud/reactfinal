import React, { useEffect, useState } from "react";
import { Search } from "@mui/icons-material";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Loading from "../../components/Loading";
import Empty from "../../components/Empty";
import ChecklistDropDownfilter from "./components/ChecklistDropDownfilter";
import { GetAllClassDetailByFilter } from "../../api/classDetail";
import ChecklistTable from "./components/ChecklistTable";
import { AddManyChecklistApi, GetAllChecklistByClassDetailIdAndDateApi } from "../../api/checklist";
import ChecklistActionButton from "./components/ChecklistActionButton";
import { getCurrentDate } from "../../helpers";
import AlreadyCheckedStudent from "./components/AlreadyCheckedStudent";
import SelectDate from "./components/SelectDate";

const NewCheckList = () => {
    
    const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [alreadyChecked, setAlreadyChecked] = useState(false);
  const [data, setData] = useState([]);
  const [selectedDropdownID, setSelectedDropdownID] = useState({})
  const [selectedDate, setSelectedDate] = useState(getCurrentDate());
  const tableRef = React.createRef();

  const fetchData = async (data) => {
    setLoading(true);
    const response = await GetAllClassDetailByFilter(data);
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
    return response;

  }

  const handleAddChecklist = async (data) => {
    setLoading(true);
    const response = await AddManyChecklistApi(data);
    if(!response){
      Swal.fire({
        title: "ຜິດພາດ",
        text: "ບໍ່ສາມາດບັນທຶກການແຊັກຊື່ໄດ້ ກະລຸນາເຂົ້າສູ່ລະບົບອີກຄັ້ງ",
        icon: "error",
      });
      setLoading(false);
      //navigate("/login");
      return;
    }
    Swal.fire({
      title: "ສຳເລັດ",
      text: "ເພີ່ມຂໍ້ມູນສຳເລັດ",
      icon: "success",
    });
    console.log("add many checklist response::=>");
    console.log(response);
    setLoading(false);
    setAlreadyChecked(true);
}

  const handleSubmit = async () => {
    const checklists = tableRef.current.getChecklists();
    await handleAddChecklist(checklists);
  }

  const hasStudentAlreadyBeenChecked = async (students) => {
    if (students.length == 0) {
      return false;
    }

    const {cdUuid} = students[0];

    const response = await GetAllChecklistByClassDetailIdAndDateApi(cdUuid, selectedDate);

    if(!response){
      return false;
    }

    const hasBeenChecked = response.length > 0;
    if(hasBeenChecked){
      return true
    }

  }

  const fetchDataAfterSelectedDropDown = async (selectedDropDownID) => {
    setSelectedDropdownID(selectedDropDownID);
    const students = await fetchData(selectedDropDownID);

    if(await hasStudentAlreadyBeenChecked(students)){
      setAlreadyChecked(true);
      return;
    }

    setAlreadyChecked(false);
  }

  useEffect(() => {
    if(!selectedDropdownID || data.length === 0) {
      return;
    }
    fetchDataAfterSelectedDropDown(selectedDropdownID);
  }, [selectedDate])

  return (
    <Sidebar>
      <div className="px-10 py-5 ">
        <ChecklistDropDownfilter onFinishedSelectDropDown={fetchDataAfterSelectedDropDown} />
        <AlreadyCheckedStudent show={alreadyChecked} selectedDate={selectedDate} />
        <SelectDate defalutValue={selectedDate} onChange={(date) => setSelectedDate(date)} />
        <ChecklistTable data={data} ref={tableRef} disable={alreadyChecked} selectedDate={selectedDate} />
        <Loading show={loading} className="mt-4" />
        <Empty show={data.length == 0 && !loading} />
        <ChecklistActionButton show={data.length > 0} loading={loading} disable={alreadyChecked} onSubmit={handleSubmit} onCancel={() => {navigate(-1)}} selectedDropdownID={selectedDropdownID} />
      </div>
    </Sidebar>
  );
};

export default NewCheckList;
