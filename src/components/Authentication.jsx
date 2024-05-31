import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Authentication = ({ children }) => {

  const navigate = useNavigate();
  useEffect(() => {
    function auth() {
      const token = localStorage.getItem("token");
      const tokenExpiresAt = localStorage.getItem("tokenExpiresAt");
      const now = new Date();
      const comparedDate = new Date(Number(tokenExpiresAt));
      const isAfter = comparedDate.getTime() > now.getTime();
      if (!token || !isAfter) {
        localStorage.removeItem("token");
        localStorage.removeItem("tokenExpiresAt");
        localStorage.removeItem("refreshToken");
        //localStorage.removeItem("refresTokenExpiresAt");
        navigate("/login");
        return;
      }
    }
    auth();
  }, []);

  return <>{children}</>;
};

export default Authentication;
