import React from "react";
import sousaka from "../../../assets/sousaka.jpeg";
import { ModeOutlined } from "@mui/icons-material";
import IconDelete from "../../../assets/icon/delete.svg";
import { NavLink } from "react-router-dom";
import { timeFormatter } from "../../../view/helpers/index";
import DeleteButton from "../../../components/DeleteButton";
import { DeleteTeacherApi } from "../../../api/teacher";
const TableYear = ({ data, loading , onDeleteSuccess }) => {
  return (
    <div className=" mt-5">
      <table className="w-full  ">
        <thead>
          <tr className=" bg-blue-500 text-white font-bold  text-sm">
            <th className="py-2">ລະຫັດສົກຮຽນ</th>
            <th>ສົກຮຽນ</th>
            <th>ເວລາສ້າງ</th>
            <th>ເວລາອັບເດດ</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <>
            {data.map((item, index) => (
              <tr className="border-b  text-sm" key={index}>
                <td className="text-center py-2">{item.yID}</td>
                <td className="flex items-center py-2 gap-2 justify-center">
                  {/* <img src={sousaka} width={25} className="rounded-full"></img> */}
                  {item.yearNumber}
                </td>
                <td className="text-center">{timeFormatter(item.createdAt)}</td>
                <td className="text-center">{timeFormatter(item.updatedAt)}</td>
                <td className="text-center">
                  <NavLink to={`/year/edit/${item.yUuid}`}>
                    <ModeOutlined />
                  </NavLink>
                </td>
                <td className="text-center">
                <DeleteButton id={item.yUuid} onSuccess={onDeleteSuccess} deleteApi={DeleteTeacherApi}/>
                </td>
              </tr>
            ))}
          </>
        </tbody>
      </table>
    </div>
  );
};

export default TableYear;
