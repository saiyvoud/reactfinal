import React from "react";
import sousaka from "../../../assets/sousaka.jpeg";
import { ModeOutlined } from "@mui/icons-material";
import IconDelete from "../../../assets/icon/delete.svg";
import { NavLink } from "react-router-dom";
const TableYear = () => {
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
          <tr className="border-b  text-sm">
            <td className="text-center py-2">ST001</td>
            <td className="flex items-center py-2 gap-2 justify-center">
              {/* <img src={sousaka} width={25} className="rounded-full"></img> */}
              Saiyvoud Somanong
            </td>
            <td className="text-center">ຊາຍ</td>
            <td className="text-center">01/05/1998</td>

            <td className="text-center">ບ້ານເລົ່າໂພຄຳ ເມືອງທ່າແຂກ ແຂວງຄຳມ່ວນ</td>
            <td className="text-center">02096794376</td>
            <td className="text-center">ລາວ</td>
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
        </tbody>
      </table>
    </div>
  );
};

export default TableYear;
