import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../../components/Sidebar";
import Swal from "sweetalert2";
export default function AddTableRoom() {
    let navigate = useNavigate();

    const [roomID, setRoomID] = useState()
    const [roomName, setRoomName] = useState()
    const [studentID, setStudentID] = useState()
    const [studentName, setStudentName] = useState()
    const [term, setTerm] = useState()
    const [year, setYear] = useState()

    const [loading, setLoading] = useState(false);
    const [ErrorRoomID, setErrorRoomID] = useState()
    const [ErrorRoomName, setErrorRoomName] = useState()
    const [ErrorStudentID, setErrorStudentID] = useState()
    const [ErrorStudentName, setErrorStudentName] = useState()
    const [ErrorTerm, setErrorTerm] = useState()
    const [ErrorYear, setErrorYear] = useState()

    const handleVerifyStudent = (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            if (!roomID) {
                setErrorRoomID("Classroom id is Require")
                setLoading(false)
            }
            if (!roomName) {
                setErrorRoomName("Classrom name is Require")
                setLoading(false)
            }
            if (!studentID) {
                setErrorStudentID("Student id is Require")
                setLoading(false)
            }
            if (!studentName) {
                setErrorStudentName("Student name is Require")
                setLoading(false)
            }
            if (!term) {
                setErrorTerm("Term id is Require")
                setLoading(false)
            }
            if (!year) {
                setErrorYear("Year is Require")
                setLoading(false)
            }
        } catch (error) {
            Swal.fire({
                title: "Error",
                text: "Failed to verify",
                icon: "error",
            });
        }
    };

    return (
        <Sidebar>
            <div className="px-10 ">
                <div className=" mt-3">
                    <p className=" mb-1">ລະຫັດຫ້ອງ</p>
                    <input
                        type="text"
                        placeholder="ລະຫັດສາຂາ"
                        value={roomID}
                        onChange={(e) => setRoomID(e.target.value)}
                        className="py-2 px-3 w-full bg-slate-100 rounded-lg border"
                    />
                </div>
                {ErrorRoomID !== "" ? (
                    <div className="flex text-red-700"> {ErrorRoomID} </div>
                ) : (
                    ""
                )}
                <div className=" mt-3">
                    <p className=" mb-1">ຊື່ຫ້ອງ</p>
                    <input
                        type="text"
                        placeholder="ຊື່ຫ້ອງ"
                        value={roomName}
                        onChange={(e) => setRoomName(e.target.value)}
                        className="py-2 px-3 w-full bg-slate-100 rounded-lg border"
                    />
                </div>
                {ErrorRoomName !== "" ? (
                    <div className="flex text-red-700"> {ErrorRoomName} </div>
                ) : (
                    ""
                )}

                <div className=" mt-3">
                    <p className=" mb-1">ລະຫັດນັກສືກສາ</p>
                    <input
                        type="text"
                        placeholder="ລະຫັດນັກສືກສາ"
                        value={studentID}
                        onChange={(e) => setStudentID(e.target.value)}
                        className="py-2 px-3 w-full bg-slate-100 rounded-lg border"
                    />
                </div>
                {ErrorStudentID !== "" ? (
                    <div className="flex text-red-700"> {ErrorStudentID} </div>
                ) : (
                    ""
                )}
                <div className=" mt-3">
                    <p className=" mb-1">ຊື່ນັກສືກສາ</p>
                    <input
                        type="text"
                        placeholder="ຊື່ນັກສືກສາ"
                        value={studentName}
                        onChange={(e) => setStudentName(e.target.value)}
                        className="py-2 px-3 w-full bg-slate-100 rounded-lg border"
                    />
                </div>
                {ErrorStudentName !== "" ? (
                    <div className="flex text-red-700"> {ErrorStudentName} </div>
                ) : (
                    ""
                )}
                <div className=" mt-3">
                    <p className=" mb-1">ສົກຮຽນ</p>
                    <input
                        type="text"
                        placeholder="ສົກຮຽນ"
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                        className="py-2 px-3 w-full bg-slate-100 rounded-lg border"
                    />
                </div>
                {ErrorTerm !== "" ? (
                    <div className="flex text-red-700"> {ErrorTerm} </div>
                ) : (
                    ""
                )}
                <div className=" mt-3">
                    <p className=" mb-1">ປີຮຽນ</p>
                    <input
                        type="text"
                        placeholder="ປີຮຽນ"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        className="py-2 px-3 w-full bg-slate-100 rounded-lg border"
                    />
                </div>
                {ErrorYear !== "" ? (
                    <div className="flex text-red-700"> {ErrorYear} </div>
                ) : (
                    ""
                )}
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
    )
}
