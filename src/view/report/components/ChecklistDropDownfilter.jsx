import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { GetAllYearApi } from '../../../api/year';
import { GetAllSubjectApi } from '../../../api/subject';
import { GetAllClassApi } from '../../../api/class';
import { autoFetchingData } from '../../../helpers';
import Swal from "sweetalert2";
import { GetAllMajorApi } from '../../../api/major';
import { GetAllPartApi } from '../../../api/part';
import Loading from '../../../components/Loading';

const ReportDropDownfilter = ({onFinishedSelectDropDown}) => {
    const navigate = useNavigate();
    const [loading , setLoading] = useState(false);
    const [major, setMajor] = useState([]);
    const [classRoom, setClassRoom] = useState([]);
    const [subject, setSubject] = useState([]);
    const [part, setPart] = useState([]);

    const [selectedMajor, setSelectedMajor] = useState("");
    const [selectedClassRoom, setSelectedClassRoom] = useState("");
    const [selectedSubject, setSelectedSubject] = useState("");
    const [selectedPart, setSelectedPart] = useState("");

    const fetchDropDownData = async () => {
        await Promise.all([
          autoFetchingData(GetAllMajorApi, setMajor, "ສາຂາ"),
          autoFetchingData(GetAllClassApi, setClassRoom, "ຫ້ອງ"),
          autoFetchingData(GetAllSubjectApi, setSubject, "ວິຊາ"),
          autoFetchingData(GetAllPartApi, setPart, "ພາກ"),
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
        if(selectedMajor === "" || selectedClassRoom === "" || selectedSubject === "" || selectedPart === "") {
            return;
        }
        const selectedData = {
            mUuid: selectedMajor,
            cUuid: selectedClassRoom,
            subUuid: selectedSubject,
            pUuid: selectedPart
        }
        onFinishedSelectDropDown(selectedData);
        
    }, [selectedMajor, selectedClassRoom, selectedSubject, selectedPart])

  return (
    <div className="w-full grid grid-cols-4 gap-4">
            <div className="w-full">
                <label htmlFor="major" >ເລືອກສາຂາ</label>
                <select defaultValue={""} disabled={loading} id="major" onChange={(e) => setSelectedMajor(e.target.value)} className="w-full block py-2 px-4 border border-gray-300 rounded-md cursor-pointer">
                <option value="" disabled className="text-gray-200">{(loading ? "ກຳລັງໂຫຼດ..." : "--ເລືອກສາຂາ--")}</option>
                    {major?.map((item, index) => (
                        <option key={index} value={item?.mUuid}>
                            {item?.mName}
                        </option>
                    ))}
                </select>
            </div>
            <div className="w-full">
                <label htmlFor="class" >ເລືອກຫ້ອງ</label>
                <select defaultValue={""} disabled={loading} id="class" onChange={(e) => setSelectedClassRoom(e.target.value)} className="w-full block py-2 px-4 border border-gray-300 rounded-md cursor-pointer">
                    <option value="" disabled className="text-gray-200">{(loading ? "ກຳລັງໂຫຼດ..." : "--ເລືອກຫ້ອງ--")}</option>
                    {classRoom?.map((item, index) => (
                        <option key={index} value={item?.cUuid}>
                            {item?.cName}
                        </option>
                    ))}
                </select>
            </div>
            <div className="w-full">
                <label htmlFor="subject" >ເລືອກວິຊາ</label>
                <select defaultValue={""} disabled={loading} id="subject" onChange={(e) => setSelectedSubject(e.target.value)} className="w-full block py-2 px-4 border border-gray-300 rounded-md">
                    <option value="" disabled className="text-gray-200">{(loading ? "ກຳລັງໂຫຼດ..." : "--ເລືອກວິຊາ--")}</option>
                    {subject?.map((item, index) => (
                        <option key={index} value={item?.subUuid}>
                            {item?.subName}
                        </option>
                    ))}
                </select>
            </div>
            <div className="w-full">
                <label htmlFor="part" >ເລືອກພາກ</label>
                <select defaultValue={""} disabled={loading} id="part" onChange={(e) => setSelectedPart(e.target.value)} className="w-full block py-2 px-4 border border-gray-300 rounded-md">
                    <option value="" disabled className="text-gray-200">{(loading ? "ກຳລັງໂຫຼດ..." : "--ເລືອກພາກ--")}</option>
                    {part?.map((item, index) => (
                        <option key={index} value={item?.pUuid}>
                            {item?.pName}
                        </option>
                    ))}
                </select>
            </div>
        </div>
  )
}

export default ReportDropDownfilter