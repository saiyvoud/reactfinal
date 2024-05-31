import axios from "axios";
import ApiPath from "./api.path.js";

function token() {
  return localStorage.getItem("token")
};

export const VerifyStudent = async (
  sID,
  sName,
  sSurname,
  birthday,
  nationallity,
  gender,
  village,
  district,
  province,
  tel
) => {
  const data = {
    sID: sID,
    sName: sName,
    birthday: birthday,
    nationallity: nationallity,
    gender: gender,
    village: village,
    district: district,
    province: province,
    tel: tel,
  };
  
  const config = {
    headers: {
      "Content-Type": "application/json",
      'Authorization': 'Bearer '+ token()
    },
  };

  try {
    const response = await axios.post(ApiPath.addStudent, data, config);

    if (response.data.success === true) {
    } else {
      return false;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const GetAllStudentApi = async () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      'Authorization': 'Bearer '+ token()
    },
  };
  try {
    const response = await axios.get(ApiPath.getAllStudent, config);

    
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

export const GetOneStudentApi = async (id) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      'Authorization': 'Bearer '+ token()
    },
  };
  try {
    const response = await axios.get(`${ApiPath.getOneStudent}${id}`, config);    
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


export const AddStudentApi = async (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      'Authorization': 'Bearer '+ token()
    },
  };
  const mappingData = {
    sName: data?.sName || "",
    sSurname: data?.sSurname || "",
    birthday: data?.birthday || "",
    nationallity: data?.nationallity || "",
    gender: data?.gender || "",
    village: data?.village || "",
    district: data?.district || "",
    province: data?.province || "",
    tel: data?.tel || "",
    sID: data?.sID || "",
  }
  try {
    const response = await axios.post(ApiPath.addStudent, mappingData, config);

    console.log("response of fuc AddStudent ::=>");
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

export const UpdateStudentApi = async (id, data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      'Authorization': 'Bearer '+ token()
    },
  };
  const mappingData = {
    sName: data?.sName || "",
    sSurname: data?.sSurname || "",
    birthday: data?.birthday || "",
    nationallity: data?.nationallity || "",
    gender: data?.gender || "",
    village: data?.village || "",
    district: data?.district || "",
    province: data?.province || "",
    tel: data?.tel || "",
    sID: data?.sID || "",
  }
  try {
    const response = await axios.put(`${ApiPath.updateStudent}${id}`, mappingData, config);

    console.log("response of fuc updateStudent ::=>");
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


export const DeleteStudentApi = async (id) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      'Authorization': 'Bearer '+ token()
    },
  };
  try {
    const response = await axios.delete(`${ApiPath.deleteStudent}${id}`, config);

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