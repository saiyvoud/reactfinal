import React, { useRef } from "react";
import sousaka from "../../../assets/sousaka.jpeg";
import { ModeOutlined } from "@mui/icons-material";
import IconDelete from "../../../assets/icon/delete.svg";
import { NavLink, useNavigate } from "react-router-dom";
import DeleteButton from "../../../components/DeleteButton";
import { DeleteTeacherApi } from "../../../api/teacher";
import AttendanceRadio from "./AttendanceRadio";
import NewChecklistTableRow from "./NewChecklistTableRow";
import ChecklistHistoryTableRow from "./ChecklistHistoryTableRow";
const ChecklistHistoryTable = ({ data }) => {

  const navigate = useNavigate();


  return (
    <div className=" mt-5">
    <div className="w-full p-4 text-center bg-blue-400 text-white text-xl font-medium">ລາຍລະອຽດການຂາດຮຽນ</div>
      <div className="w-full overflow-x-auto">
        <table className="w-max">
            <thead>
            <tr className=" bg-light-green-300 text-white font-bold">
                <th className="py-2">ລະຫັດນັກສຶກສາ</th>
                <th>ຊື່ ແລະ ນາມສະກຸນ</th>
                <th>ສາຂາ</th>
                <th>ວິຊາ</th>
                <th>ພາກ</th>
                <th>ສົກຮຽນ</th>
                <th>ເທີມ</th>
                <th>ອາຈານ</th>
                <th colSpan={"100%"}>ລາຍລະອຽດ</th>
            </tr>
            </thead>
            <tbody>
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
