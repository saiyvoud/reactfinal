import React from "react";
import sousaka from "../../../assets/sousaka.jpeg";
import { ModeOutlined } from "@mui/icons-material";
import IconDelete from "../../../assets/icon/delete.svg";
import { NavLink } from "react-router-dom";
const TableTeacher = ({ data, loading }) => {
  return (
    <div className=" mt-5">
      <table className="w-full  ">
        <thead>
          <tr className=" bg-blue-500 text-white font-bold ">
            <th className="py-2">ລະຫັດອາຈານ</th>
            <th>ຊື່ ແລະ ນາມສະກຸນ</th>
            <th>ປະເພດອາຈານ</th>
            <th>ເບີໂທ</th>
            <th>ອາຍຸ</th>
            <th>ເພດ</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <>
            {data.map((item, index) => (
              <tr className="border-b" key={index}>
                <td className="text-center py-2">{item.tID}</td>
                <td className="flex items-center py-2 gap-2 justify-center">
                  <img src={sousaka} width={25} className="rounded-full"></img>
                  {item.tName} {item.tSurname}
                </td>
                <td className="text-center">{item.tType}</td>
                <td className="text-center">{item.tel}</td>

                <td className="text-center">{item.age}</td>
                <td className="text-center">{item.gender}</td>

                <td className="text-center">
                  <NavLink to="/student">
                    <ModeOutlined />
                  </NavLink>
                </td>
                <td className="text-center">
                  <NavLink to="/student">
                    <img src={IconDelete}></img>
                  </NavLink>
                </td>
              </tr>
            ))}
          </>
        </tbody>
      </table>
    </div>
  );
};

export default TableTeacher;
