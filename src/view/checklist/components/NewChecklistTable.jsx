import React, { useRef } from "react";
import sousaka from "../../../assets/sousaka.jpeg";
import { ModeOutlined } from "@mui/icons-material";
import IconDelete from "../../../assets/icon/delete.svg";
import { NavLink, useNavigate } from "react-router-dom";
import DeleteButton from "../../../components/DeleteButton";
import { DeleteTeacherApi } from "../../../api/teacher";
import AttendanceRadio from "./AttendanceRadio";
import NewChecklistTableRow from "./NewChecklistTableRow";
const NewChecklistTable = ({ data, cUuid, mUuid }) => {

  const navigate = useNavigate();

  const arrayRefsChildSubmitFunc = [];

  const submitForm = () => {
    arrayRefsChildSubmitFunc.forEach((ref) => {
      ref.current.submit();
    });
    console.log("is finish submit form");
  };

  return (
    <div className=" mt-5">
    <div className="w-full p-4 text-center bg-blue-400 text-white">ຕິດຕາມການເຂົ້າຮຽນຂອງນັກສຶກສາ</div>
      <table className="w-full  ">
        <thead>
          <tr className=" bg-light-green-300 text-white font-bold ">
            <th className="py-2">ລະຫັດນັກສຶກສາ</th>
            <th>ຊື່ ແລະ ນາມສະກຸນ</th>
            <th>ສາຂາ</th>
            <th>ວິຊາ</th>
            <th>ພາກ</th>
            <th>ສົກຮຽນ</th>
            <th>ເທີມ</th>
            <th>ອາຈານ</th>
            <th>
                <div>ສະຖານະ</div>
                <div className="flex justify-around"><p className="font-normal">ຊົ່ວໂມງ 1</p><p className="font-normal">ຊົ່ວໂມງ 2</p></div>
            </th>
            <th>ໝາຍເຫດຊົ່ວໂມງ 1</th>
            <th>ໝາຍເຫດຊົ່ວໂມງ 2</th>
            <th>ວັນທີ</th>
          </tr>
        </thead>
        <tbody>
          <>
            {data.map((item, index) => {
              const ref = React.createRef();
              arrayRefsChildSubmitFunc.push(ref);
              return <NewChecklistTableRow ref={ref} key={index} item={item} />
            })}
          </>
        </tbody>
      </table>

      {
        ((data.length > 0) && (
          <div className="w-full flex justify-between my-20">
          <div></div>
          <div className="flex justify-center items-center gap-4">
            <button className="p-2 min-w-32 rounded-md bg-gray-400 text-white" onClick={() => {navigate(-1)}}>ຍົກເລີກ</button>
            <button className="p-2 min-w-32 rounded-md bg-blue-400 text-white" onClick={submitForm}>ບັນທືກ</button>
          </div>
          <button className="p-2 min-w-32 rounded-md bg-green-400 text-white" onClick={() => {navigate(`/checklist/newChecklist/${mUuid}/checklistHistory/${cUuid}`)}}>ເບີ່ງລາຍລະອຽດການເຊັກຊື່</button>
        </div>
        ))
      }

    </div>
  );
};

export default NewChecklistTable;
