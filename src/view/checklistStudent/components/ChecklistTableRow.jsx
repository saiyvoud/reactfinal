import React, { forwardRef, useImperativeHandle, useState } from "react";
import AttendanceRadio from "./AttendanceRadio";

const ChecklistTableRow = forwardRef(({ item, disable, selectedDate }, ref) => {

  const [hour1, setHour1] = useState(false);
  const [hour2, setHour2] = useState(false);
  const [reason1, setReason1] = useState("");
  const [reason2, setReason2] = useState("");

    useImperativeHandle(ref, () => ({
        getChecklist() {
            const checklistHour1 = {
                class_detail_id: item.cdUuid,
                status: (hour1 == true) ? 1 : 0,
                hourAt: 1,
                reson: reason1,
                date: selectedDate
            }
            const checklistHour2 = {
                class_detail_id: item.cdUuid,
                status: (hour2 == true) ? 1 : 0,
                hourAt: 2,
                reson: reason2,
                date: selectedDate
            }
            return [checklistHour1, checklistHour2]
        }
    }));

  return (
    <>
      <tr className="border-b text-center">
        <td className="text-center px-4 py-2">{item.sID}</td>
        <td>
          {item.sName} {item.sSurname}
        </td>
        <td className="text-center px-4">{item.mName}</td>
        <td className="text-center px-4">{item.subName}</td>

        <td className="text-center px-4">{item.pName}</td>
        <td className="text-center px-4">{item.schoolyear}</td>
        <td className="text-center px-4">{item.termNo}</td>
        <td className="text-center px-4">
          {item.tName} {item.tSurname}
        </td>
        <td className="text-center py-2">
          <div className="flex justify-center items-center border border-gray-200 rounded-md">
          <AttendanceRadio disable={disable} defalutValue={hour1} onChange={(value) => {
            setHour1(value)
            if(value === true){
                setReason1("")
            }
            }} />
          </div>
        </td>
        <td className="text-center">
        <input
            disabled={hour1 === true || hour1 === null || disable}
            type="text"
            className="border border-gray-400 rounded-md max-w-24 px-2 py-1 disabled:opacity-30"
            onChange={(e) => setReason1(e.target.value)}
            value={reason1}
          />
        </td>
        <td className="text-center py-2">
          <div className="flex justify-center items-center border border-gray-200 rounded-md">
          <AttendanceRadio disable={disable} defalutValue={hour2} onChange={(value) => {
            setHour2(value)
            if(value === true){
                setReason2("")
            }
            }} />
          </div>
        </td>
        <td className="text-center">
        <input
            disabled={hour2 === true || hour2 === null || disable}
            type="text"
            className="border border-gray-400 rounded-md max-w-24 px-2 py-1 disabled:opacity-30"
            onChange={(e) => setReason2(e.target.value)}
            value={reason2}
          />
        </td>
        <td className="text-center">{selectedDate}</td>
      </tr>
    </>
  );
});

export default ChecklistTableRow;
