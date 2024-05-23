import React from 'react'
import sousaka from "../../../assets/sousaka.jpeg";
import { ModeOutlined } from "@mui/icons-material";
import IconDelete from "../../../assets/icon/delete.svg";
import { NavLink } from "react-router-dom";
function TableChecklist() {
    return (
        <div>
            <div className=" mt-5">
                <table className="w-full  ">
                    <thead>
                        <tr className=" bg-blue-500 text-white font-bold  text-sm">
                            <th className="py-2">ເລືອກ</th>
                            <th className="py-2">ລະຫັດນັກສຶກສາ</th>
                            <th>ຊື່ ແລະ ນາມສະກຸນ</th>
                            <th>ວິຊາຮຽນ</th>
                            <th>ຊືື່ອາຈານສອນ</th>
                            <th>ສະຖານະ</th>
                            <th>ເຫດຜົນ</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b  text-sm">
                            <td className="text-center py-2">
                                <input type="checkbox" name="checkbox" id="checkbox" />
                            </td>
                            <td className="text-center py-2">ST001</td>
                            <td className="flex items-center py-2 gap-2 justify-center">
                                {/* <img src={sousaka} width={25} className="rounded-full"></img> */}
                                Jackie inthavong
                            </td>
                            <td className="text-center">Javascript</td>
                            <td className="text-center">ປ.ຕ ອຈ ທະນູໄຊ</td>
                            <td className="text-center">ຂາດ</td>
                            <td className="text-center"></td>
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

export default TableChecklist