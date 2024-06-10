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

export const GetAllChecklistByClassDetailApi = async (id) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      'Authorization': 'Bearer '+ token()
    },
  };
  try {
    const response = await axios.get(`${ApiPath.getByClassDetailIdChecklist}${id}`, config);    
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

export const GetAllChecklistByClassDetailIdAndDateApi = async (cdUuid, date) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      'Authorization': 'Bearer '+ token()
    },
  };
  try {
    const response = await axios.get(`${ApiPath.getByClassDetailIdAndDateChecklist}${cdUuid}/${date}`, config);
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



export const AddChecklistApi = async (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      'Authorization': 'Bearer '+ token()
    },
  };
  console.log("data::=>");
  console.log(data);
  const mappingData = {
    class_detail_id: data?.class_detail_id || "",
    hourAt: data?.hourAt || "",
    status: data?.intStatus || "",
    reson: data?.reason || "",
    date: data?.date || "",
  }
  try {
    const response = await axios.post(ApiPath.addChecklist, mappingData, config);

    console.log("response of fuc addChecklist ::=>");
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

export const AddManyChecklistApi = async (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      'Authorization': 'Bearer '+ token()
    },
  };
  console.log("data of AddManyChecklistApi before inserting::=>");
  console.log(data);
  const mappingData = {
    checklists: data
  };
  try {
    const response = await axios.post(ApiPath.addManyChecklist, mappingData, config);

    console.log("response of fuc addChecklist ::=>");
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


export const UpdateChecklistApi = async (chUuid, data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      'Authorization': 'Bearer '+ token()
    },
  };
  const mappingData = {
    status: data?.status || 0,
    reson: data?.reson || "",
  };
  try {
    const response = await axios.put(`${ApiPath.updateChecklist}${chUuid}`, mappingData, config);

    console.log("response of fuc updateChecklist ::=>");
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

