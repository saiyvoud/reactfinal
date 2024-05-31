import axios from "axios";
import ApiPath from "./api.path.js";

function token() {
  return localStorage.getItem("token")
};

export const GetAllTeacherApi = async () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      'Authorization': 'Bearer '+ token()
    },
  };
  try {
    const response = await axios.get(ApiPath.getAllTeacher, config);
    
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

export const GetOneTeacherApi = async (id) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      'Authorization': 'Bearer '+ token()
    },
  };
  try {
    const response = await axios.get(`${ApiPath.getOneTeacher}${id}`, config);    
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


export const AddTeacherApi = async (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      'Authorization': 'Bearer '+ token()
    },
  };
  const mappingData = {
    tName: data.tName || "",
    tSurname: data.tSurname || "",
    tType: data.tType || "",
    age: data.age || "",
    gender: data.gender || "",
    tel: data.tel || "",
    tID: data.tID || "",
  }
  try {
    const response = await axios.post(ApiPath.addTeacher, mappingData, config);

    console.log("response of fuc AddTeacher ::=>");
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


export const UpdateTeacherApi = async (id, data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      'Authorization': 'Bearer '+ token()
    },
  };
  const mappingData = {
    tName: data?.tName || "",
    tSurname: data?.tSurname || "",
    tType: data?.tType || "",
    age: data?.age || "",
    gender: data?.gender || "",
    tel: data?.tel || "",
    tID: data?.tID || "",
  };
  try {
    const response = await axios.put(`${ApiPath.updateTeacher}${id}`, mappingData, config);

    console.log("response of fuc updateTeacher ::=>");
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

export const DeleteTeacherApi = async (id) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      'Authorization': 'Bearer '+ token()
    },
  };
  try {
    const response = await axios.delete(`${ApiPath.deleteTeacher}${id}`, config);

    console.log("response of fuc delteTeacher ::=>");
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

