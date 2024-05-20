import React from 'react'
import sousaka from "../../../assets/sousaka.jpeg";
import { ModeOutlined } from "@mui/icons-material";
import IconDelete from "../../../assets/icon/delete.svg";
import { NavLink } from "react-router-dom";
function TablePart() {
    return (
        <div>
            <div className=" mt-5">
                <table className="w-full  ">
                    <thead>
                        <tr className=" bg-blue-500 text-white font-bold  text-sm">
                            <th className="py-2">ລະຫັດຊື່ພາກຮຽນ</th>
                            <th>ຊື່ພາກຮຽນ</th>
                            <th>ເວລາສ້າງ</th>
                            <th>ເວລາອັບເດດ</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b  text-sm">
                            <td className="text-center py-2">P001</td>
                            <td className="flex items-center py-2 gap-2 justify-center">
                                {/* <img src={sousaka} width={25} className="rounded-full"></img> */}
                                ເຊົ້າ
                            </td>
                            <td className="text-center">02/02/2018</td>
                            <td className="text-center">01/05/2021</td>
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
        </div>
    )
}

export default TablePart