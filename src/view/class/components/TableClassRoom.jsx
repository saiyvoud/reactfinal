import React from "react";
import sousaka from "../../../assets/sousaka.jpeg";
import { ModeOutlined } from "@mui/icons-material";
import IconDelete from "../../../assets/icon/delete.svg";
import { NavLink } from "react-router-dom";
import { timeFormatter } from "../../helpers";
const TableClassRoom = ({data, loading}) => {
  return (
    <div className=" mt-5">
      <table className="w-full  ">
        <thead>
          <tr className=" bg-blue-500 text-white font-bold  text-sm">
            <th className="py-2">ລະຫັດຫ້ອງຮຽນ</th>
            <th>ຊື່ຫ້ອງ</th>
            <th>ປະເພດຫ້ອງ</th>
            <th>schoolYear</th>
            <th>ປີຫ້ອງ</th>
            <th>ວັນສ້າງ</th>
            <th>ອັບເດດລ່າສຸດ</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <>
          {
            data.map((item, index) => (
              <tr className="border-b  text-sm" key={index}>
            <td className="text-center py-2">{item.cID}</td>
            <td className="flex items-center py-2 gap-2 justify-center">
              {/* <img src={sousaka} width={25} className="rounded-full"></img> */}
              {item.cName}
            </td>
            <td className="text-center">{item.mName}</td>
            <td className="text-center">{item.schoolYear}</td>

            <td className="text-center">{item.yearNumber}</td>
            <td className="text-center">{timeFormatter(item.createdAt)}</td>
            <td className="text-center">{timeFormatter(item.updatedAt)}</td>
            <td className="text-center">
              <NavLink to="/add_class_room">
                <ModeOutlined />
              </NavLink>
            </td>
            <td className="text-center">
              <NavLink to="/student">
                <img src={IconDelete}></img>
              </NavLink>
            </td>
          </tr>
            ))
          }
          </>
        </tbody>
      </table>
    </div>
  );
};

export default TableClassRoom;
