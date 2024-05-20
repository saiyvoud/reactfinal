import ApiPath from "./api.path.js";

export const VerifyStudent = async  ()=>{
    const data = {
        email: email,
        password: password,
      };
    
      const config = {
        headers: {
          "Content-Type": "application/json",
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
}
