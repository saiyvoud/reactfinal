import React, { useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import CryptoJS from "crypto-js";
import { Role, SECREAT_KEY } from "../constant";
import { decryptData, isAllowedRole } from "../helpers";
import Swal from "sweetalert2";

const Authentication = ({ children, allowedRoles = [Role.student] }) => {

  const navigate = useNavigate();

  const isAuth = () => {
    const token = localStorage.getItem("token");
    const tokenExpiresAt = localStorage.getItem("tokenExpiresAt");
    const now = new Date();
    const comparedDate = new Date(Number(tokenExpiresAt));
    const isAfter = comparedDate.getTime() > now.getTime();
    if (!token || !isAfter) {
      return false;
    }
    return true;
  }

  if(!isAuth()){
    localStorage.removeItem("token");
    localStorage.removeItem("tokenExpiresAt");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("role");
    localStorage.removeItem("email");
    return <Navigate to="/login"/>;
  }

  if(!isAllowedRole(allowedRoles)){
    Swal.fire({
      title: "ຜິດພາດ",
      text: "ທ່ານບໍ່ມີສິດເຂົ້າເຖິງ ກະລຸນາເຂົ້າສູ່ລະບົບອີກຄັ້ງ",
      icon: "error",
    });
    return <Navigate to="/login"/>;
  }

  return <>{children}</>;
};

export default Authentication;
