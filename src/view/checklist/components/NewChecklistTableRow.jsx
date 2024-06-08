import React, { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import AttendanceRadio from "./AttendanceRadio";
import { AddChecklistApi } from "../../../api/checklist";
import Swal from "sweetalert2";

const NewChecklistTableRow = forwardRef(({ item }, ref) => {

    const [hour1, setHour1] = useState(false);
    const [hour2, setHour2] = useState(false);
    const [reson1, setReson1] = useState("");
    const [reson2, setReson2] = useState("");

    const date = new Date();
    const currentDate = date.getFullYear() + "-" + ((date.getMonth() + 1) + "").padStart(2, '0') + "-" + ((date.getDate() + 9) + "").padStart(2, '0');

    const submitChecklist = async (class_detail_id, hourAt, status, reason, date) => {
        const intStatus = (status === true) ? "1" : "0";
        const response = await AddChecklistApi({class_detail_id, hourAt, intStatus, reason, date});
        if(!response){
            console.log("can not submit checklist at: ", {class_detail_id, hourAt, intStatus, reason, date});
            return;
        }
        console.log("success submit checklist: ", {class_detail_id, hourAt, intStatus, reason, date});
        return;
    }

    const submiting = () => {
        if(hour1 === null && hour2 === null) {
            return
        }

        if(hour1 === true || hour1 === false) {
            submitChecklist(item.cdUuid, "1", hour1, reson1, currentDate);
        }

        if(hour2 === true || hour2 === false) {
            submitChecklist(item.cdUuid, "2", hour2, reson2, currentDate);
        }

        console.log("calling func submit form ==> ", item);
        return;
    }

    // hook this function to parent in array ref, in order to submit from parent all at once
    useImperativeHandle(ref, () => ({
        submit() {
            submiting();
        }
    }));


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

        <td>
          <div className="w-full h-full flex gap-2 justify-center items-center">
            <div className="min-w-40 h-10 rounded-md flex justify-center items-center border border-gray-20">
              <AttendanceRadio defalutValue={hour1} hourAt="1" onChange={(data) => {
                setHour1(data.value)
                setReson1("");
              }} />
            </div>
            <div className="min-w-40 h-10 rounded-md flex justify-center items-center border border-gray-200">
              <AttendanceRadio defalutValue={hour2} hourAt="2" onChange={(data) => {
                setHour2(data.value)
                setReson2("");
              }} />
            </div>
          </div>
        </td>
        <td className="text-center">
          <input
            disabled={hour1 === true || hour1 === null}
            type="text"
            className="border border-gray-400 rounded-md max-w-24 disabled:opacity-30"
            onChange={(e) => setReson1(e.target.value)}
            value={reson1}
          />
        </td>
        <td className="text-center">
          <input
          disabled={hour2 === true || hour2 === null}
            type="text"
            className="border border-gray-400 rounded-md max-w-24 disabled:opacity-30"
            onChange={(e) => setReson2(e.target.value)}
            value={reson2}
          />
        </td>
        <td className="text-center">{currentDate}</td>
      </tr>
    </>
  );
});

export default NewChecklistTableRow;
