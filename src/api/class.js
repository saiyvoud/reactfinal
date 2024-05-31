import axios from "axios";
import ApiPath from "./api.path.js";

function token() {
  return localStorage.getItem("token")
};

export const GetAllClassApi = async () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      'Authorization': 'Bearer '+ token()
    },
  };
  try {
    const response = await axios.get(ApiPath.getAllClass, config);
    
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



export const GetOneClassApi = async (id) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      'Authorization': 'Bearer '+ token()
    },
  };
  try {
    const response = await axios.get(`${ApiPath.getOneClass}${id}`, config);    
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


export const AddClassApi = async (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      'Authorization': 'Bearer '+ token()
    },
  };
  const mappingData = {
    cID: data?.cID || "",
    cName: data?.cName || "",
    mName: data?.mName || "",
    schoolyear: data?.schoolyear || "",
    yearNumber: data?.yearNumber || "",
  }
  try {
    const response = await axios.post(ApiPath.addClass, mappingData, config);

    console.log("response of fuc AddClass ::=>");
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

export const UpdateClassApi = async (id, data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      'Authorization': 'Bearer '+ token()
    },
  };
  const mappingData = {
    cID: data?.cID || "",
    cName: data?.cName || "",
    mName: data?.mName || "",
    schoolyear: data?.schoolyear || "",
    yearNumber: data?.yearNumber || "",
  }
  try {
    const response = await axios.put(`${ApiPath.updateClass}${id}`, mappingData, config);

    console.log("response of fuc updateClass ::=>");
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


export const DeleteClassApi = async (id) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      'Authorization': 'Bearer '+ token()
    },
  };
  try {
    const response = await axios.delete(`${ApiPath.deleteClass}${id}`, config);

    console.log("response of fuc delteStudent ::=>");
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
