import React, { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import AttendanceRadio from "./AttendanceRadio";
import { AddChecklistApi, GetAllChecklistByClassDetailApi } from "../../../api/checklist";
import Swal from "sweetalert2";
import { GetAllClassDetailByClassIdApi } from "../../../api/classDetail";
import { timeFormatter } from "../../../helpers";

const ChecklistHistoryTableRow = ({ item }) => {

    const date = new Date();
    const currentDate = date.getFullYear() + "-" + ((date.getMonth() + 1) + "").padStart(2, '0') + "-" + (date.getDate() + "").padStart(2, '0');

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
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
              setData(response)
              setLoading(false);

        }
        fetchData();
    }, [])



  return (
    <>
      <tr className="border-b">
        <td className="text-center py-2">{item.sID}</td>
        <td className="flex items-center py-2 gap-2 justify-center">
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

        {data.map((item, index) => (
            <td key={index} className="h-24 min-w-28">
                <div className="w-full h-full border text-sm text-gray-600 text-center hover:bg-gray-100">
                <p>{timeFormatter(item?.date)}</p>
                <p>h {item?.hourAt}</p>
                {(item?.status === 1) && (
                    <p className="font-semibold text-gray-900">ມາ</p>    
                )}
                {(item?.status === 0) && (
                    <p className="font-semibold text-red-900">ຂາດ</p>    
                )}
                <p className="text-[10px]">{item?.reson}</p>
                </div>
            </td>
        ))}
      </tr>
    </>
  );
};

export default ChecklistHistoryTableRow;
