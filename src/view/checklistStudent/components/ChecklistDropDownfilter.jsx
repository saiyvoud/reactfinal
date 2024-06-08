import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { GetAllYearApi } from '../../../api/year';
import { GetAllSubjectApi } from '../../../api/subject';
import { GetAllClassApi } from '../../../api/class';
import { autoFetchingData } from '../../../helpers';
import Swal from "sweetalert2";
import { GetAllMajorApi } from '../../../api/major';

const ChecklistDropDownfilter = ({onFinishedSelectDropDown}) => {

    const navigate = useNavigate();
    const [loading , setLoading] = useState(false);
    const [major, setMajor] = useState([]);
    const [classRoom, setClassRoom] = useState([]);
    const [subject, setSubject] = useState([]);
    const [year, setYear] = useState([]);

    const [selectedMajor, setSelectedMajor] = useState("");
    const [selectedClassRoom, setSelectedClassRoom] = useState("");
    const [selectedSubject, setSelectedSubject] = useState("");
    const [selectedYear, setSelectedYear] = useState("");

    const fetchDropDownData = async () => {
        await Promise.all([
          autoFetchingData(GetAllMajorApi, setMajor, "ສາຂາ"),
          autoFetchingData(GetAllClassApi, setClassRoom, "ຫ້ອງ"),
          autoFetchingData(GetAllSubjectApi, setSubject, "ວິຊາ"),
          autoFetchingData(GetAllYearApi, setYear, "ປີ"),
        ])
      }


      const fetchData = async () => {
        setLoading(true);
        await fetchDropDownData();
        setLoading(false);
      }


    useEffect(() => {
        fetchData();
    }, [])

    useEffect(() => {
        if(selectedMajor === "" || selectedClassRoom === "" || selectedSubject === "" || selectedYear === "") {
            return;
        }
        const data = {
            mUuid: selectedMajor,
            cUuid: selectedClassRoom,
            sUuid: selectedSubject,
            yUuid: selectedYear
        }
        onFinishedSelectDropDown(data);
        
    }, [selectedMajor, selectedClassRoom, selectedSubject, selectedYear])

  return (
    <div className="w-full grid grid-cols-4 gap-4">
            <div className="w-full">
                <label htmlFor="major" >ເລືອກສາຂາ</label>
                <select defaultValue={""} disabled={loading} id="major" onChange={(e) => setSelectedMajor(e.target.value)} className="w-full block py-2 px-4 border border-gray-300 rounded-md cursor-pointer">
                    <option value="" disabled className="text-gray-200"
                    >--ເລືອກສາຂາ--</option>
                    {major?.map((item, index) => (
                        <option key={index} value={item?.mUuid}>
                            {item?.cName}
                        </option>
                    ))}
                </select>
            </div>
            <div className="w-full">
                <label htmlFor="class" >ເລືອກຫ້ອງ</label>
                <select defaultValue={""} disabled={loading} id="class" onChange={(e) => setSelectedClassRoom(e.target.value)} className="w-full block py-2 px-4 border border-gray-300 rounded-md cursor-pointer">
                    <option value="" disabled className="text-gray-200"
                    >--ເລືອກຫ້ອງ--</option>
                    {classRoom?.map((item, index) => (
                        <option key={index} value={item?.cUuid}>
                            {item?.cName}
                        </option>
                    ))}
                </select>
            </div>
            <div className="w-full">
                <label htmlFor="subject" >ເລືອກວິຊາ</label>
                <select defaultValue={""} disabled={true} id="subject" onChange={(e) => setSelectedSubject(e.target.value)} className="w-full block py-2 px-4 border border-gray-300 rounded-md">
                    <option value="" disabled className="text-gray-200">--ເລືອກວິຊາ--</option>
                    {subject?.map((item, index) => (
                        <option key={index} value={item?.subUuid}>
                            {item?.subName}
                        </option>
                    ))}
                </select>
            </div>
            <div className="w-full">
                <label htmlFor="year" >ເລືອກສົກຮຽນ</label>
                <select defaultValue={""} disabled={true} id="year" onChange={(e) => setSelectedYear(e.target.value)} className="w-full block py-2 px-4 border border-gray-300 rounded-md">
                    <option value="" disabled className="text-gray-200">--ເລືອກສົກຮຽນ--</option>
                    {year?.map((item, index) => (
                        <option key={index} value={item?.yUuid}>
                            {item?.schoolyear}
                        </option>
                    ))}
                </select>
            </div>
        </div>
  )
}

export default ChecklistDropDownfilter