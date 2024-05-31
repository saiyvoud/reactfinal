import React from "react";
import {
  FaUser,
  FaChartBar,
  FaChalkboardTeacher,
  FaBook,
  FaWpexplorer,
} from "react-icons/fa";
const CardDashboard = () => {
  const data = [
    {
      title: "ຜູ້ໃຊ້ທັງໝົດ",
      icon: <FaChartBar />,
      qty: 150,
      backgroud:
        "flex w-full justify-start  gap-4 items-center px-4 border-r-4 border-cyan-500 ",
      color: "bg-cyan-500 text-white p-4 rounded-full",
    },
    {
      title: "ນັກຮຽນ",
      icon: <FaUser />,
      qty: 110,
      backgroud:
        "flex w-full justify-start  gap-4 items-center px-4 border-r-4 border-green-400 ",
      color: "bg-green-400 text-white p-4 rounded-full",
    },
    {
      title: "ອາຈານ",
      icon: <FaChalkboardTeacher />,
      qty: 28,
      backgroud:
        "flex w-full justify-start  gap-4 items-center px-4 border-r-4 border-amber-500 ",
      color: "bg-amber-500 text-white p-4 rounded-full",
    },
    {
      title: "ຜູ້ຊ່ຽວຊານ",
      icon: <FaWpexplorer />,
      qty: 10,
      backgroud:
        "flex w-full justify-start  gap-4 items-center px-4 border-r-4 border-red-400 ",
      color: "bg-red-400 text-white p-4 rounded-full",
    },
    {
      title: "ຜູ້ອຳນວຍການ",
      icon: <FaBook />,
      qty: 2,
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
              <p>{items.qty}</p>
              <p className="text-[12px] text-gray-600">{items.title}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardDashboard;
