import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/sousaka.jpeg";
import { LoginApi } from "../../api/auth";
import Swal from "sweetalert2";
import validator from "validator";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("test@gmail.com");
  const [password, setPassword] = useState("12345");
  const [loading, setLoading] = useState(false);
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Perform client-side validation
      if (email === "") {
        setErrorEmail("example@gmail.com");
        setLoading(false);
        return;
      }

      setErrorEmail("");
      if (password === "") {
        setErrorPassword("password is requird");
        setLoading(false);
        return;
      }
      setErrorPassword("");

      // Send registration data to the server
      const response = await LoginApi(email, password);

      if (response) {
        navigate("/");
        Swal.fire({
          title: "ສຳເລັດ",
          text: "ເຂົ້າສູ່ລະບົບສຳເລັດ",
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "ຜິດພາດ",
          text: "ອີເມວ ຫລື ລະຫັດບໍ່ຖືກຕ້ອງ",
          icon: "error",
        });
      }
    } catch (error) {
      // Handle registration errors
      Swal.fire({
        title: "ຜິດພາດ",
        text: "ຊື່ຜູ້ໃຊ້ ຫລື ລະຫັດບໍ່ຖືກຕ້ອງ",
        icon: "error",
      });
    }
    setLoading(false);
  };
  return (
    <div className=" w-full h-screen flex items-center justify-center">
      <div className=" w-[450px] flex justify-center h-[520px] py-8 px-10 bg-gray-100 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <form onSubmit={handleSubmit} className=" text-center">
          <div className="flex w-20 h-20 mx-auto">
            <img src={logo}></img>
          </div>
          <h1 className=" text-center mt-3 mb-10 text-2xl font-bold">
            ເຂົ້າສູ່ລະບົບ
          </h1>
          <div className=" flex flex-col mb-2 text-start">
            <label>Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className=" w-[300px] px-2 py-2 outline-none rounded border border-solid "
            />
          </div>
          {errorEmail !== "" ? (
            <div className="flex text-red-700"> {errorEmail} </div>
          ) : (
            ""
          )}
          <div className=" flex flex-col mb-2 text-start">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className=" w-[300px] px-2 py-2 outline-none rounded border border-solid "
            />
          </div>
          {errorPassword !== "" ? (
            <div className="flex text-red-700"> {errorPassword} </div>
          ) : (
            ""
          )}
          <div className=" flex items-center justify-center mb-3">
            <button className=" text-center bg-blue-500 w-[300px] py-2 rounded text-white">
              {loading === true ? "ກຳລັງໂຫລດ..." : "ລ໋ອກອິນ"}
            </button>
          </div>
          <div className=" flex items-center mb-5">
            <input type="checkbox" className=" mr-2" />
            <p>Remember Me</p>
          </div>
          <p className=" text-[15px]">
            ຖ້າທ່ານຍັງບໍ່ເຄີຍລົງທະບຽນ{" "}
            <Link to={"/register"} className=" text-blue-500 underline">
              ຄຼິກບ່ອນນີ້
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
