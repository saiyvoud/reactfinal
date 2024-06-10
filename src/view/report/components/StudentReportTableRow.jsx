import React, { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { GetAllChecklistByClassDetailApi } from "../../../api/checklist";
import Swal from "sweetalert2";
import { setMaxText, timeFormatter } from "../../../helpers";
import Loading from "../../../components/Loading";

const StudentReportTableRow = ({ item }) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const LIMIT_ABSENT_HOURS = 12;
    const ABSENT_HOURS = 1.5;

    const sortDate = (data) => {
      // sort from oldest to newest
        data.sort((a, b) => {
          const dateA = new Date(timeFormatter(a.date));
          const dateB = new Date(timeFormatter(b.date));
            return dateA - dateB;
        });
        return data;
    }

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const cdUuid = item.cdUuid;
            const response = await GetAllChecklistByClassDetailApi(cdUuid);
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
              const sortedBydate = sortDate(response);
              setData(sortedBydate)
              setLoading(false);

        }
        fetchData();
    }, [])

    const calTotalAbsentHour = (data) => {
      const totalHour = data.reduce((total, current) => {
          if(current?.status === 0) {
            return total + ABSENT_HOURS
          } else {
            return total
          }
      }, 0)
      return totalHour;
    }


  return (
    <>
      <tr className="border-b">
        <td className="text-center py-2">{item.sID}</td>
        <td className="text-center sticky top-0 left-0 bg-white">
          {item.sName} {item.sSurname}
        </td>
        <td className="text-center">{item.mName}</td>
        <td className="text-center">{item.subName}</td>

        <td className="text-center">{item.pName}</td>
        <td className="text-center">{item.schoolyear}</td>
        <td className="text-center">{item.termNo}</td>
        <td className="text-center">
          {item.tName} {item.tSurname}
        </td>

        <td className="text-center min-w-24 h-24 bg-red-200 flex flex-col justify-center gap-2">
            <Loading show={loading} />
            <p>{calTotalAbsentHour(data)}</p>
            <p>{(calTotalAbsentHour(data) > LIMIT_ABSENT_HOURS) ? "ບໍ່ມີສິດເສັງ" : ""}</p>
        </td>
        {data.map((item, index) => (
            <td key={index} className="h-24 min-w-28">
                <div className={`w-full h-full text-sm text-gray-600 text-center ${(item?.hourAt == "1") ? "border-l-2 border-green-400" : "border-r-2 border-green-400"} ${(item?.status === 1) ? "bg-green-50" : "bg-red-50"}`}>
                  <p>{timeFormatter(item?.date)}</p>
                  <p>h {item?.hourAt}</p>
                  {(item?.status === 1) && (
                      <p className="font-semibold text-gray-900">ມາ</p>    
                  )}
                  {(item?.status === 0) && (
                      <p className="font-semibold text-red-900">ຂາດ</p>    
                  )}
                  <p className="text-[10px]">{setMaxText(item?.reson, 10)}</p>
              </div>
            </td>
        ))}
      </tr>
    

    </>
  );
};

export default StudentReportTableRow;
