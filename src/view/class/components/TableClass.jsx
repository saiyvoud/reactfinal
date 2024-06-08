import React from "react";
import sousaka from "../../../assets/sousaka.jpeg";
import { ArrowRight, ModeOutlined } from "@mui/icons-material";
import IconDelete from "../../../assets/icon/delete.svg";
import { NavLink } from "react-router-dom";
import { timeFormatter } from "../../../helpers";
import { DeleteClassApi } from "../../../api/class";
import DeleteButton from "../../../components/DeleteButton";
const TableClass = ({data, loading, onDeleteSuccess}) => {
  return (
    <div className=" mt-5">
      <table className="w-full  ">
        <thead>
          <tr className=" bg-blue-500 text-white font-bold  text-sm">
            <th className="py-2">ລະຫັດຫ້ອງຮຽນ</th>
            <th>ຊື່ຫ້ອງ</th>
            <th>ສາຂາ</th>
            <th>schoolYear</th>
            <th>ປີຫ້ອງ</th>
            <th>ເທີມທີ</th>
            <th>ວັນສ້າງ</th>
            <th>ອັບເດດລ່າສຸດ</th>
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
            <td className="text-center py-2">{item.cID}</td>
            <td className="flex items-center py-2 gap-2 justify-center">
              {/* <img src={sousaka} width={25} className="rounded-full"></img> */}
              {item.cName}
            </td>
            <td className="text-center">{item.mName}</td>
            <td className="text-center">{item.schoolyear}</td>

            <td className="text-center">{item.yearNumber}</td>
            <td className="text-center">{item.termNo}</td>
            <td className="text-center">{timeFormatter(item.createdAt)}</td>
            <td className="text-center">{timeFormatter(item.updatedAt)}</td>
            <td className="text-center">
              <NavLink to={`/class/edit/${item.cUuid}`}>
                <ModeOutlined />
              </NavLink>
            </td>
            <td className="text-center">
              <DeleteButton id={item.cUuid} onSuccess={onDeleteSuccess} deleteApi={DeleteClassApi}/>
            </td>
            <td className="text-center flex justify-center items-center gap-2">
              <NavLink to={`/classDetail/${item.cUuid}`} className="rounded-md px-4 py-1 bg-gray-500 text-white flex justify-center items-center gap-2 hover:opacity-80">
                <p>ລາຍລະອຽດຫ້ອງ</p>
                <ArrowRight />
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

export default TableClass;
