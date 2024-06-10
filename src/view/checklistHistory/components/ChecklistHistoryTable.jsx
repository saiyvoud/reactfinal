import React, { useRef } from "react";
import ChecklistHistoryTableRow from "./ChecklistHistoryTableRow";
import { useNavigate } from "react-router-dom";
import EditButton from "./EditButton";
const ChecklistHistoryTable = ({ data, loading }) => {

  const navigate = useNavigate();

  return (
    <div className=" mt-5">
    <div className="w-full p-4 text-center bg-blue-400 text-white text-xl font-medium">ລາຍລະອຽດການຂາດຮຽນ</div>
      <div className="w-full overflow-x-auto">
        <table className="w-max min-w-full">
            <thead className="w-full">
            <tr className=" bg-light-green-300 text-white font-bold">
                <th className="py-2 px-2">ລະຫັດນັກສຶກສາ</th>
                <th className="text-center sticky top-0 left-0 bg-light-green-300">ຊື່ ແລະ ນາມສະກຸນ</th>
                <th>ສາຂາ</th>
                <th>ວິຊາ</th>
                <th>ພາກ</th>
                <th>ສົກຮຽນ</th>
                <th>ເທີມ</th>
                <th>ອາຈານ</th>
                <th colSpan={"100%"}>ລາຍລະອຽດ</th>
            </tr>
            </thead>
            <tbody className="w-full">
            <>
                {data.map((item, index) => {
                return <ChecklistHistoryTableRow key={index} item={item} />
                })}
            </>
            </tbody>
        </table>
      </div>

    </div>
  );
};

export default ChecklistHistoryTable;
