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
