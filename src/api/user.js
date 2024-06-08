import axios from "axios";
import ApiPath from "./api.path.js";

function token() {
  return localStorage.getItem("token")
};

export const GetAllUserApi = async () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      'Authorization': 'Bearer '+ token()
    },
  };
  try {
    const response = await axios.get(ApiPath.getAllUser, config);
    
    if (response.data.success === true) {
      return response?.data?.data;
    } else {
      return false;
    }
  } catch (error) {
    console.error(error);
    return false;
  }

}




export const GetOneUserApi = async (id) => {
  const data = {
    id: id
  }
  try {
    const response = await axios.get(ApiPath.getOneUser, {
      headers: {
        "Content-Type": "application/json",
        'Authorization': 'Bearer '+ token()
      },
      data: data
    });    
    if (response.data.success === true) {
      return response?.data?.data;
    } else {
      return false;
    }
  } catch (error) {
    console.error(error);
    return false;
  }

}


export const AddUserApi = async (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      'Authorization': 'Bearer '+ token()
    },
  };
  const mappingData = {
    role: data?.role || "",
    email: data?.email || "",
    password: data?.password || "",
  }
  try {
    const response = await axios.post(ApiPath.register, mappingData, config);

    console.log("response of fuc addUser ::=>");
    console.log(response);
    
    if (response.data.success === true) {
      return response;
    } else {
      return false;
    }
  } catch (error) {
    console.error(error);
    return false;
  }

}

export const UpdateUserApi = async (id, data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      'Authorization': 'Bearer '+ token()
    },
  };
  const mappingData = {
    profile: data?.profile || "",
    role: data?.role || "",
    email: data?.email || "",
    password: data?.password || "",
  }
  try {
    const response = await axios.put(`${ApiPath.updateUser}${id}`, mappingData, config);

    console.log("response of fuc updateUser ::=>");
    console.log(response);
    
    if (response.data.success === true) {
      return response;
    } else {
      return false;
    }
  } catch (error) {
    console.error(error);
    return false;
  }

}


export const DeleteUserApi = async (id) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      'Authorization': 'Bearer '+ token()
    },
  };
  try {
    const response = await axios.delete(`${ApiPath.deleteUser}${id}`, config);

    console.log("response of fuc delteUser ::=>");
    console.log(response);
    
    if (response.data.success === true) {
      return response;
    } else {
      return false;
    }
  } catch (error) {
    console.error(error);
    return false;
  }

}