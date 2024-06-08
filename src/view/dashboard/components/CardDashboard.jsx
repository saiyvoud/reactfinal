import React, { useEffect, useState } from "react";
import {
  FaUser,
  FaChartBar,
  FaChalkboardTeacher,
  FaBook,
  FaWpexplorer,
} from "react-icons/fa";
import { GetAllUserApi } from "../../../api/user";
import { GetAllClassApi } from "../../../api/class";
import { GetAllStudentApi } from "../../../api/student";
import { GetAllTeacherApi } from "../../../api/teacher";
import { GetAllMajorApi } from "../../../api/major";
import Loading from "../../../components/Loading";
const CardDashboard = () => {

  const [loading , setLoading] = useState(false);
  const [user, setUser] = useState([]);
  const [student, setStudent] = useState([]);
  const [teacher, setTeacher] = useState([]);
  const [major, setMajor] = useState([]);
  const [classRoom, setClassRoom] = useState([]);

  const autoFetchingData = async (fetchDataApi, setFetchData, label) => {
      const response = await fetchDataApi();
      if (!response) {
        Swal.fire({
          title: "ຜິດພາດ",
          text: `ບໍ່ສາມາດດິງຂໍ້ມູນ${label}ໄດ້ ກະລຸນາເຂົ້າສູ່ລະບົບອີກຄັ້ງ`,
          icon: "error",
        });
        //navigate("/login");
        return;
      }
      console.log(`${label} getAll data::=>`);
      console.log(response);
      setFetchData(response);
  }


  
  const fetchData = async () => {
      setLoading(true);
      await Promise.all([
        autoFetchingData(GetAllUserApi, setUser, "ຜູ້ໃຊ້"),
        autoFetchingData(GetAllStudentApi, setStudent, "ນັກຮຽນ"),
        autoFetchingData(GetAllTeacherApi, setTeacher, "ອາຈານ"),
        autoFetchingData(GetAllMajorApi, setMajor, "ສາຂາ"),
        autoFetchingData(GetAllClassApi, setClassRoom, "ຫ້ອງ"),
      ])
      setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);


  const data = [
    {
      title: "ຜູ້ໃຊ້ທັງໝົດ",
      icon: <FaChartBar />,
      qty: user.length,
      backgroud:
        "flex w-full justify-start  gap-4 items-center px-4 border-r-4 border-cyan-500 ",
      color: "bg-cyan-500 text-white p-4 rounded-full",
    },
    {
      title: "ນັກຮຽນ",
      icon: <FaUser />,
      qty: student.length,
      backgroud:
        "flex w-full justify-start  gap-4 items-center px-4 border-r-4 border-green-400 ",
      color: "bg-green-400 text-white p-4 rounded-full",
    },
    {
      title: "ອາຈານ",
      icon: <FaChalkboardTeacher />,
      qty: teacher.length,
      backgroud:
        "flex w-full justify-start  gap-4 items-center px-4 border-r-4 border-amber-500 ",
      color: "bg-amber-500 text-white p-4 rounded-full",
    },
    {
      title: "ສາຂາ",
      icon: <FaWpexplorer />,
      qty: major.length,
      backgroud:
        "flex w-full justify-start  gap-4 items-center px-4 border-r-4 border-red-400 ",
      color: "bg-red-400 text-white p-4 rounded-full",
    },
    {
      title: "ຫ້ອງ",
      icon: <FaBook />,
      qty: classRoom.length,
      backgroud:
        "flex w-full justify-start  gap-4 items-center px-4 border-r-4 border-purple-400 ",
      color: "bg-purple-400 text-white p-4 rounded-full",
    },
  ];
  return (
    <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 w-full justify-between py-5">
      {data.map((items, index) => (
        <div key={index}
          className="flex w-full  bg-white shadow-lg rounded-lg h-20  py-4
         text-black"
        >
          <div className={items.backgroud}>
            <div className={items.color}>{items.icon}</div>
            <div>
              <span>{items.qty || <Loading show={true} className="opacity-50" />}</span>
              <p className="text-[12px] text-gray-600">{items.title}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardDashboard;
