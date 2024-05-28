import React from "react";
import sousaka from "../../../assets/sousaka.jpeg";
import { ModeOutlined } from "@mui/icons-material";
import IconDelete from "../../../assets/icon/delete.svg";
import { NavLink } from "react-router-dom";
const TableStudent = ({ data, loading }) => {

  return (
    <div className=" mt-5">
      <table className="w-full  ">
        <thead>
          <tr className=" bg-blue-500 text-white font-bold  text-sm">
            <th className="py-2">ລະຫັດນັກສຶກສາ</th>
            <th>ຊື່ ແລະ ນາມສະກຸນ</th>
            <th>ເພດ</th>
            <th>ວັນ/ເດືອນ/ປີເກີດ</th>
            <th>ບ້ານ/ເມືອງ/ແຂວງ</th>
            <th>ເບີໂທ</th>
            <th>ສັນຊາດ</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <>
            {data.map((item, index) => (
              <tr className="border-b  text-sm" key={index}>
                <td className="text-center py-2">{item.sID}</td>
                <td className="flex items-center py-2 gap-2 justify-center">
                  {/* <img src={sousaka} width={25} className="rounded-full"></img> */}
                  {item.sName} {item.sSurName}
                </td>
                <td className="text-center">{item.gender}</td>
                <td className="text-center">{(item.birthday).split(" ")[0]}</td>

                <td className="text-center">
                  {item.province} {item.district} {item.village}
                </td>
                <td className="text-center">{item.tel}</td>
                <td className="text-center">{item.nationallity}</td>
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

export default TableStudent;
