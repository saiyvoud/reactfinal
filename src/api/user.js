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




// no route for get one

// export const GetOneUserApi = async (id) => {
//   const config = {
//     headers: {
//       "Content-Type": "application/json",
//       'Authorization': 'Bearer '+ token()
//     },
//   };
//   try {
//     const response = await axios.get(`${ApiPath.getOneStudent}${id}`, config);    
//     if (response.data.success === true) {
//       return response?.data?.data;
//     } else {
//       return false;
//     }
//   } catch (error) {
//     console.error(error);
//     return false;
//   }

// }


export const AddUserApi = async (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      'Authorization': 'Bearer '+ token()
    },
  };
  const mappingData = {
    uId: data?.uId || "",
    profile: data?.profile || "",
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
    uId: data?.uId || "",
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
