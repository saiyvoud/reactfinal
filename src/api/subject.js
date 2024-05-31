import axios from "axios";
import ApiPath from "./api.path.js";

function token() {
  return localStorage.getItem("token")
};

export const GetAllSubjectApi = async () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      'Authorization': 'Bearer '+ token()
    },
  };
  try {
    const response = await axios.get(ApiPath.getAllSubject, config);
    
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



export const GetOneSubjectApi = async (id) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      'Authorization': 'Bearer '+ token()
    },
  };
  try {
    const response = await axios.get(`${ApiPath.getOneSubject}${id}`, config);    
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


export const AddSubjectApi = async (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      'Authorization': 'Bearer '+ token()
    },
  };
  const mappingData = {
    subName: data?.subName || "",
    subTime: data?.subTime || "",
    teacher_id: data?.tUuid || "",
  }
  try {
    const response = await axios.post(ApiPath.addSubject, mappingData, config);

    console.log("response of fuc AddSubject ::=>");
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

export const UpdateSubjectApi = async (id, data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      'Authorization': 'Bearer '+ token()
    },
  };
  const mappingData = {
    subName: data?.subName || "",
    subTime: data?.subTime || "",
    teacher_id: data?.tUuid || "",
  }
  try {
    const response = await axios.put(`${ApiPath.updateSubject}${id}`, mappingData, config);

    console.log("response of fuc updateSubject ::=>");
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


export const DeleteSubjectApi = async (id) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      'Authorization': 'Bearer '+ token()
    },
  };
  try {
    const response = await axios.delete(`${ApiPath.deleteSubject}${id}`, config);

    console.log("response of fuc deleteSubject ::=>");
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
