import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import Sidebar from "../../../components/Sidebar";
import Swal from "sweetalert2";
import { VerifyStudent } from "../../../api/student";

const FormsVertfy = () => {
  let navigate = useNavigate();
  const [studentID, setStudentID] = useState("");
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [nationallity, setNationallity] = useState("");
  const [gender, setGender] = useState("");
  const [village, setVillage] = useState("");
  const [district, setDistrict] = useState("");
  const [province, setProvince] = useState("");
  const [tel, setTel] = useState("");

  const [loading, setLoading] = useState(false);
  const [errorStudentID, setErrorStudentID] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorBirthday, setErrorBirthday] = useState("");
  const [errorNationallity, setErrorNationallity] = useState("");
  const [errorGender, setErrorGender] = useState("");
  const [errorVillage, setErrorVillage] = useState("");
  const [errorDistrict, setErrorDistrict] = useState("");
  const [errorProvince, setErrorProvince] = useState("");
  const [errorTel, setErrorTel] = useState("");
  const handleVerifyStudent = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (!studentID) {
        setErrorStudentID("student is required!");
        setLoading(false);
        return;
      }
      setErrorStudentID("");
      if (!name) {
        setErrorName("fullname is required");
        setLoading(false);
        return;
      }
      setErrorName("");
      if (!birthday) {
        setErrorBirthday("birthday is required!");
        setLoading(false);
        return;
      }
      setErrorBirthday("");
      if (!nationallity) {
        setErrorNationallity("nationallity is required!");
        setLoading(false);
        return;
      }
      setErrorNationallity("");
      if (!gender) {
        setErrorGender("gender is required!");
        setLoading(false);
        return;
      }
      setErrorGender("");
      if (!village) {
        setErrorVillage("village is required!");
        setLoading(false);
        return;
      }
      if (!district) {
        setErrorDistrict("district is required!");
        setLoading(false);
        return;
      }
      if (!province) {
        setErrorProvince("province is required!");
        setLoading(false);
        return;
      }
      setErrorProvince("");
      if (!tel) {
        setErrorProvince("tel is required!");
        setLoading(false);
        return;
      }
      setErrorTel("");
      const response = await VerifyStudent(
        studentID,
        name,
        birthday,
        nationallity,
        gender,
        village,
        district,
        province,
        tel
      );
      if (response) {
        Swal.fire({
          title: "ສຳເລັດ",
          text: "ຢືນຢັນນັກສຶກສາສຳເລັດ",
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "ຜິດພາດ",
          text: "ຜິດພາດ",
          icon: "error",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "ຜິດພາດ",
        text: "ຜິດພາດການຢືນຢັນ",
        icon: "error",
      });
    }
  };
  return (
    <Sidebar>
      <div className="px-10 ">
        <div className=" mt-3">
          <p className=" mb-1">ລະຫັດນັກສຶກສາ</p>
          <input
            type="text"
            placeholder="ລະຫັດນັກສຶກສາ"
            value={studentID}
            onChange={(e) => setStudentID(e.target.value)}
            className="py-2 px-3 w-full bg-slate-100 rounded-lg border"
          />
        </div>
        {errorStudentID !== "" ? (
          <div className="flex text-red-700"> {errorStudentID} </div>
        ) : (
          ""
        )}
        <div className=" mt-3">
          <p className=" mb-1">ຊື່ ແລະ ນາມສະກຸນ</p>
          <input
            type="text"
            placeholder="ຊື່ ແລະ ນາມສະກຸນ"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="py-2 px-3 w-full bg-slate-100 rounded-lg border"
          />
        </div>

        <div className=" mt-3">
          <p className=" mb-1">ວັນ/ເດືອນ/ປີເກີດ</p>
          <input
            type="date"
            placeholder="ວັນ/ເດືອນ/ປີເກີດ"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            className="py-2 px-3 w-full bg-slate-100 rounded-lg border"
          />
        </div>
        <div className=" mt-3">
          <p className=" mb-1">ສັນຊາດ</p>
          <input
            type="text"
            placeholder="ສັນຊາດ"
            value={nationallity}
            onChange={(e) => setNationallity(e.target.value)}
            className="py-2 px-3 w-full bg-slate-100 rounded-lg border"
          />
        </div>
        <div className=" mt-3">
          <p className=" mb-1">ເພດ</p>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="border rounded-lg w-full px-1 py-1 "
          >
            <option disabled selected>
              ເພດ
            </option>
            <option>ຊາຍ</option>
            <option>ຍິງ</option>
            <option>ອື່ນ..</option>
          </select>
        </div>
        <div className=" mt-3">
          <p className=" mb-1">ແຂວງ</p>
          <input
            type="text"
            placeholder="ແຂວງ"
            value={province}
            onChange={(e) => setProvince(e.target.value)}
            className="py-2 px-3 w-full bg-slate-100 rounded-lg border"
          />
        </div>
        <div className=" mt-3">
          <p className=" mb-1">ເມືອງ</p>
          <input
            type="text"
            placeholder="ເມືອງ"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            className="py-2 px-3 w-full bg-slate-100 rounded-lg border"
          />
        </div>
        <div className=" mt-3">
          <p className=" mb-1">ບ້ານ</p>
          <input
            type="text"
            placeholder="ບ້ານ"
            value={village}
            onChange={(e) => setVillage(e.target.value)}
            className="py-2 px-3 w-full bg-slate-100 rounded-lg border"
          />
        </div>

        <div className=" mt-3">
          <p className=" mb-1">ເບີໂທ</p>
          <input
            type="text"
            placeholder="20-xxxx-xxxx"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
            className="py-2 px-3 w-full bg-slate-100 rounded-lg border"
          />
        </div>

        <div>
          <div className=" my-5 flex justify-center grid-cols-2 gap-4">
            <button
              onClick={() => navigate(-1)}
              className="border border-gray-200 px-5 py-2 text-blue-500 hover:text-white font-bold rounded-lg hover:bg-amber-500"
            >
              ກັບຄືນ
            </button>
            <button
              onClick={(e) => handleVerifyStudent(e)}
              className="bg-blue-500 px-5 py-2 text-white font-bold rounded-lg hover:bg-indigo-600"
            >
              ບັນທຶກຂໍ້ມູນ
            </button>
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default FormsVertfy;
