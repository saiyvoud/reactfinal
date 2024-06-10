import axios from "axios";
import ApiPath from "./api.path.js";

function token() {
  return localStorage.getItem("token")
};

export const GetAllClassDetailApi = async () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      'Authorization': 'Bearer '+ token()
    },
  };
  try {
    const response = await axios.get(ApiPath.getAllClassDetail, config);
    
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



export const GetOneClassDetailApi = async (id) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      'Authorization': 'Bearer '+ token()
    },
  };
  try {
    const response = await axios.get(`${ApiPath.getOneClassDetail}${id}`, config);
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

export const GetAllClassDetailByClassIdApi = async (id) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        'Authorization': 'Bearer '+ token()
      },
    };
    try {
      const response = await axios.get(`${ApiPath.getByClassIdClassDetail}${id}`, config);
      console.log("response of get class detail by class id::=>");
      console.log(response);
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


  export const GetAllClassDetailByFilter = async (data) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        'Authorization': 'Bearer '+ token()
      },
    };

    const mappingData = {
      mUuid: data?.mUuid || "",
      cUuid: data?.cUuid || "",
      subUuid: data?.subUuid || "",
      pUuid: data?.pUuid || "",
    }

    try {
      const response = await axios.post(`${ApiPath.getByFilterClassDetail}`, mappingData, config);
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


export const AddClassDetailApi = async (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      'Authorization': 'Bearer '+ token()
    },
  };
  const mappingData = {
    class_id: data?.class_id || "",
    student_id: data?.student_id || "",
    part_id: data?.part_id || "",
    subject_id: data?.subject_id || "",
  }
  try {
    const response = await axios.post(ApiPath.addClassDetail, mappingData, config);

    console.log("response of fuc AddClassDetail ::=>");
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

export const UpdateClassDetailApi = async (id, data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      'Authorization': 'Bearer '+ token()
    },
  };
  const mappingData = {
    class_id: data?.class_id || "",
    student_id: data?.student_id || "",
    part_id: data?.part_id || "",
    subject_id: data?.subject_id || "",
  }
  try {
    const response = await axios.put(`${ApiPath.updateClassDetail}${id}`, mappingData, config);

    console.log("response of fuc updateClassDetail ::=>");
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


export const DeleteClassDetailApi = async (id) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      'Authorization': 'Bearer '+ token()
    },
  };
  try {
    const response = await axios.delete(`${ApiPath.deleteClassDetail}${id}`, config);

    console.log("response of fuc delteClassDetail ::=>");
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
