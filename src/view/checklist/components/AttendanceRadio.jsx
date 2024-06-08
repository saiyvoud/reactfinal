import React, { useState } from "react";
import uuid from 'react-uuid';

const AttendanceRadio = ({defalutValue = null, onChange = (data) => {}, hourAt}) => {

    const uniqueNameId = uuid();

    const handleChange = (e) => {
        // convert from "true" or "false" to boolean
        const value = (e.target.value) === "true";
        const data = {
            value,
            hourAt
        }
        console.log("onChange data ==>");
        console.log(data);
        onChange(data);
    }

  return (
    <>
      <label className="text-sm flex justify-center items-center gap-2 w-full h-full cursor-pointer hover:bg-gray-50 text-green-900">
        ມາ
        <input type="radio" name={uniqueNameId} value={true} onChange={handleChange} defaultChecked={(defalutValue === true) ? true : false}/>
      </label>
      <label className="text-sm flex justify-center items-center gap-2 w-full h-full cursor-pointer hover:bg-gray-50 text-red-600">
        ຂາດ
        <input type="radio" name={uniqueNameId} value={false} onChange={handleChange} defaultChecked={(defalutValue === false) ? true : false} />
      </label>
    </>
  );
};

export default AttendanceRadio;
