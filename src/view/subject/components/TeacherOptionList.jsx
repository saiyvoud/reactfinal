import React, { useEffect, useState } from "react";
import { GetAllTeacherApi } from "../../../api/teacher";

const TeacherOptionList = () => {
  const [teacherData, setTeacherData] = useState([]);
  const [getTeacherLoading, setGetTeacherLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setGetTeacherLoading(true);
      const response = await GetAllTeacherApi();
      if (!response) {
        Swal.fire({
          title: "ຜິດພາດ",
          text: "ບໍ່ສາມາດດິງຂໍ້ມູນເລືອກອາຈານໄດ້ ກະລຸນາເຂົ້າສູ່ລະບົບອີກຄັ້ງ",
          icon: "error",
        });
        setGetTeacherLoading(false);
        //navigate("/login");
        return;
      }
      setGetTeacherLoading(false);
      console.log("teacher get data::=>");
      console.log(response);
      setTeacherData(response);

    };
    fetchData();
  }, []);

  return (
    <>
      <option value="" disabled>
        --ເລືອກອາຈານ--
      </option>
      {teacherData.map((item, index) => {
        return (
          <option key={index} value={item.tUuid}>
            {item.tName} {item.tSurname}
          </option>
        );
      })}
    </>
  );
};

export default TeacherOptionList;
