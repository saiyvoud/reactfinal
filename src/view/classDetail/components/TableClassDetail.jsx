import React from "react";
import sousaka from "../../../assets/sousaka.jpeg";
import { ModeOutlined } from "@mui/icons-material";
import IconDelete from "../../../assets/icon/delete.svg";
import { NavLink } from "react-router-dom";
import { timeFormatter } from "../../../helpers";
import { DeleteClassApi } from "../../../api/class";
import DeleteButton from "../../../components/DeleteButton";
import { DeleteClassDetailApi } from "../../../api/classDetail";
const TableClassDetail = ({data, loading, onDeleteSuccess, currentClassId}) => {


  return (
    <div className=" mt-5">
      <table className="w-full  ">
        <thead>
          <tr className=" bg-blue-500 text-white font-bold  text-sm">
            <th className="py-2">ລະຫັດລາຍລະອຽດຫ້ອງຮຽນ</th>
            <th>ຢູ່ຫ້ອງ</th>
            <th>ຊື່ນັກສຶກສາ</th>
            <th>ຢູ່ສາຂາ</th>
            <th>ຢູ່ພາກ</th>
            <th>ວິຊາ</th>
            <th>ສົກຮຽນ</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <>
          {
            data.map((item, index) => (
              <tr className="border-b  text-sm" key={index}>
            <td className="text-center py-2">{item.cdID}</td>
            <td className="text-center">{item.cName}</td>
            <td className="flex items-center py-2 gap-2 justify-center">
              {item.sName} {item.sSurname}
            </td>
            <td className="text-center">{item.mName}</td>

            <td className="text-center">{item.pName}</td>
            <td className="text-center">{item.subName}</td>
            <td className="text-center">{item.schoolyear}</td>
            <td className="text-center">
              <NavLink to={`/classDetail/${currentClassId}/edit/${item.cdUuid}`}>
                <ModeOutlined />
              </NavLink>
            </td>
            <td className="text-center">
              <DeleteButton id={item.cdUuid} onSuccess={onDeleteSuccess} deleteApi={DeleteClassDetailApi}/>
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

export default TableClassDetail;
