import React from 'react'
import sousaka from "../../../assets/sousaka.jpeg";
import { ModeOutlined } from "@mui/icons-material";
import IconDelete from "../../../assets/icon/delete.svg";
import { NavLink } from "react-router-dom";
import { timeFormatter } from "../../../helpers/index";
import DeleteButton from '../../../components/DeleteButton';
import { DeleteSubjectApi } from '../../../api/subject';
function TableSubject({data, loading, onDeleteSuccess}) {
    return (
        <div>
            <div className=" mt-5">
                <table className="w-full  ">
                    <thead>
                        <tr className=" bg-blue-500 text-white font-bold  text-sm">
                            <th className="py-2">ລະຫັດວິຊາ</th>
                            <th>ຊື່ວິຊາຮຽນ</th>
                            <th>ຊືື່ອາຈານສອນ</th>
                            <th>ປະເພດອາຈານ</th>
                            <th>ເວລາສ້າງ</th>
                            <th>ເວລາອັບເດດ</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <>
                        {
                            data.map((item, index) => (
                                <tr className="border-b  text-sm" key={index}>
                            <td className="text-center py-2">{item.subID}</td>
                            <td className="flex items-center py-2 gap-2 justify-center">
                                {/* <img src={sousaka} width={25} className="rounded-full"></img> */}
                                {item.subName}
                            </td>
                            <td className="text-center">{item.tName}</td>
                            <td className="text-center">{item.tType}</td>
                            <td className="text-center">{timeFormatter(item.createdAt)}</td>
                            <td className="text-center">{timeFormatter(item.updatedAt)}</td>
                            <td className="text-center">
                                <NavLink to={`/subject/edit/${item.subUuid}`}>
                                    <ModeOutlined />
                                </NavLink>
                            </td>
                            <td className="text-center">
                            <DeleteButton id={item.subUuid} onSuccess={onDeleteSuccess} deleteApi={DeleteSubjectApi}/>
                            </td>
                        </tr>
                            ))
                        }
                        </>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TableSubject