import React, { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { GetAllChecklistByClassDetailApi } from "../../../api/checklist";
import Swal from "sweetalert2";
import { timeFormatter } from "../../../helpers";
import Loading from "../../../components/Loading";
import EditButton from "./EditButton";

const ChecklistHistoryTableRow = ({ item }) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

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

        <td className="text-center w-24 h-24"><Loading show={loading} /></td>

        {data.map((item, index) => (
            <td key={index} className="h-24 min-w-28">
                <EditButton item={item} />
            </td>
        ))}
      </tr>
    

    </>
  );
};

export default ChecklistHistoryTableRow;
