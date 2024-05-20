import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RegisterApi } from "../../api/auth";
import Swal from "sweetalert2";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [comfirmPassword, setComfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorComfirm, setErrorComfirm] = useState("");
  const navigate = useNavigate();
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
      if (password !== comfirmPassword) {
        setErrorComfirm("Passwords do not match");
        setLoading(false);
        return;
      }
      setErrorComfirm("");
      // Send registration data to the server
      const response = await RegisterApi(email, password);

      if (response) {
        navigate("/login");
        Swal.fire({
          title: "ສຳເລັດ",
          text: "ລົງທະບຽນສຳເລັດ",
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "ຜິດພາດ",
          text: "ອີເມວນີ້ເຄີຍລົງທະບຽນແລ້ວ",
          icon: "error",
        });
      }
    } catch (error) {
      // Handle registration errors

      Swal.fire({
        title: "ຜິດພາດ",
        text: "ລົງທະບຽນຜິດພາດ",
        icon: "error",
      });
    }
    setLoading(false);
  };
  return (
    <div className=" w-full h-screen flex items-center justify-center">
      <div className=" w-fit flex justify-center h-fit px-10 pb-10  pt-5 bg-gray-100 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <form onSubmit={handleSubmit} className=" text-center">
          <h1 className=" text-center mt-3 mb-5 text-4xl font-bold">
            ລົງທະບຽນ
          </h1>

          <div className=" flex flex-col mb-2 text-start">
            <label>email</label>
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
          <div className=" flex flex-col mb-2 text-start">
            <label>Comfirm Password</label>
            <input
              type="password"
              value={comfirmPassword}
              onChange={(e) => setComfirmPassword(e.target.value)}
              className=" w-[300px] px-2 py-2 outline-none rounded border border-solid "
            />
          </div>
          {errorComfirm !== "" ? (
            <div className="flex text-red-700"> {errorComfirm} </div>
          ) : (
            ""
          )}
          <div className=" flex items-center justify-center mb-3">
            <button className=" text-center bg-blue-500 w-[300px] py-2 rounded text-white">
              {loading === true ? "ກຳລັງລົງທະບຽນ..." : "ລົງທະບຽນ"}
            </button>
          </div>

          <p className=" text-[15px]">
            ຖ້າທ່ານຍັງບໍ່ເຄີຍລົງທະບຽນ{" "}
            <Link to={"/login"} className=" text-blue-500 underline">
              ຄຼິກບ່ອນນີ້
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
