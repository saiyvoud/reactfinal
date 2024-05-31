import axios from "axios";
import ApiPath from "./api.path.js";

function token() {
  return localStorage.getItem("token")
};

export const GetAllYearApi = async () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      'Authorization': 'Bearer '+ token()
    },
  };
  try {
    const response = await axios.get(ApiPath.getAllYear, config);
    
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


export const GetOneYearApi = async (id) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      'Authorization': 'Bearer '+ token()
    },
  };
  try {
    const response = await axios.get(`${ApiPath.getOneYear}${id}`, config);    
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


export const AddYearApi = async (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      'Authorization': 'Bearer '+ token()
    },
  };
  const mappingData = {
    yearNumber: data?.yearNumber || "",
  }
  try {
    const response = await axios.post(ApiPath.addYear, mappingData, config);

    console.log("response of fuc AddYear ::=>");
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

export const UpdateYearApi = async (id, data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      'Authorization': 'Bearer '+ token()
    },
  };
  const mappingData = {
    yearNumber: data?.yearNumber || "",
  }
  try {
    const response = await axios.put(`${ApiPath.updateYear}${id}`, mappingData, config);

    console.log("response of fuc updateYear ::=>");
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


export const DeleteYearApi = async (id) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      'Authorization': 'Bearer '+ token()
    },
  };
  try {
    const response = await axios.delete(`${ApiPath.deleteYear}${id}`, config);

    console.log("response of fuc deleteYear ::=>");
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
