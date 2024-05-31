import axios from "axios";
import ApiPath from "./api.path";

export const LoginApi = async ( email, password ) => {
  const data = {
    email: email,
    password: password,
  };

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await axios.post(ApiPath.login, data, config);
     console.log(response);
    if (response.data.success === true) {
      localStorage.setItem("token", response.data.data.token);
      localStorage.setItem("tokenExpiresAt", response.data.data.expiresIn);
      localStorage.setItem("refreshToken", response.data.data.refreshToken);
          
      console.log("token::=>");
      console.log(response.data.data.token);
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const RegisterApi = async ( email, password ) => {
  const data = {
    email: email,
    password: password,
  };

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await axios.post(ApiPath.register, data, config);

    if (response.data.success === true) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
};
