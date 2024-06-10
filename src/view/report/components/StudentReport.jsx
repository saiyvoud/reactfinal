import React, { useState } from 'react'
import ReportDropDownfilter from './ChecklistDropDownfilter'
import Sidebar from '../../../components/Sidebar'
import StudentReportTable from './StudentReportTable'
import Swal from "sweetalert2";
import { GetAllClassDetailByFilter } from '../../../api/classDetail';
import Loading from '../../../components/Loading';
import Empty from '../../../components/Empty';

const StudentReport = () => {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

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

    const fetchDataAfterSelectedDropDown = async (selectedDropDownID) => {
        await fetchData(selectedDropDownID);
    }

  return (
    <Sidebar>
        <div className="px-10 py-5 ">
        <ReportDropDownfilter onFinishedSelectDropDown={fetchDataAfterSelectedDropDown} />
        <StudentReportTable data={data} loading={loading} />
        <Loading show={loading} className="mt-4" />
        <Empty show={data.length == 0 && !loading} />
        </div>
    </Sidebar>
  )
}

export default StudentReport