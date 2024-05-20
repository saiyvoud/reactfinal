export const addMajor = async (title,image)=>{
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
        const response = await axios.post(ApiPath.login, data, config);
         console.log(response);
        if (response.data.success === true) {
          localStorage.setItem("token", response.data.data.token);
          localStorage.setItem("expiresIn", response.data.data.expiresIn);
          localStorage.setItem("refreshToken", response.data.data.refreshToken);
              
          return true;
        } else {
          return false;
        }
      } catch (error) {
        console.log(error);
        return false;
      }
}