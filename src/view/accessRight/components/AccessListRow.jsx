import React, { useState } from "react";
import userImg from "../../../assets/images/user.png";
import IconDelete from "../../../assets/icon/delete.svg";

import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import { timeFormatter } from "../../../helpers";
import { NavLink } from "react-router-dom";
import { ModeOutlined } from "@mui/icons-material";
import { DeleteUserApi } from "../../../api/user";
import DeleteButton from "../../../components/DeleteButton";
const AccessListRow = ({ data, onDeleteSuccess }) => {
  return (
    <>
      <div className="w-full bg-blue-gray-50 mb-2 grid grid-cols-8 items-center px-2 py-1">
        <p>{data.uId}</p>
        <div className="w-10 h-10 rounded-full bg-gray-300">
          <img src={userImg} alt="profile" />
        </div>
        <p className="col-span-2">{data.email}</p>
        <p>{data.role}</p>
        <p>{timeFormatter(data.createdAt)}</p>
        <p>{timeFormatter(data.updateAt)}</p>
        <div className="flex gap-2 justify-center items-center">
          <NavLink to={`/accessRight/edit/${data.uuid}`}>
            <ModeOutlined />
          </NavLink>
          <DeleteButton id={data.uuid} onSuccess={onDeleteSuccess} deleteApi={DeleteUserApi}/>
        </div>
      </div>
    </>
  );
};

export default AccessListRow;
