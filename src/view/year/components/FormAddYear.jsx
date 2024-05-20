import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import Sidebar from "../../../components/Sidebar";
import Swal from "sweetalert2";

function FormAddYear() {
    let navigate = useNavigate();
    const [yearID, setYearID] = useState('');
    const [yearName, setYearName] = useState('');
    const [year, setYear] = useState('');

    const [loading, setLoading] = useState(false);
    const [errorYearID, setErrorYearID] = useState('');
    const [errorName, setErrorName] = useState('');
    const [errorYear, setErrorYear] = useState('');

    const handleVerifyStudent = (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            if (!yearID) {
                setErrorYearID("student is required!");
                setLoading(false);
                return;
            }
            setErrorYearID("");
            if (!yearName) {
                setErrorName("Year is required");
                setLoading(false);
                return;
            }
            setErrorName("");
            if (!year) {
                setErrorYear("gender is required!");
                setLoading(false);
                return;
            }
            setErrorYear("")
            //   const response = await 
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
                    <p className=" mb-1">ລະຫັດສົກຮຽນ</p>
                    <input
                        type="text"
                        placeholder="ລະຫັດສົກຮຽນ"
                        value={yearID}
                        onChange={(e) => setYearID(e.target.value)}
                        className="py-2 px-3 w-full bg-slate-100 rounded-lg border"
                    />
                </div>
                {errorYearID !== "" ? (
                    <div className="flex text-red-700"> {errorYearID} </div>
                ) : (
                    ""
                )}
                <div className=" mt-3">
                    <p className=" mb-1">ສົກຮຽນ</p>
                    <input
                        type="text"
                        placeholder="ສົກຮຽນ"
                        value={yearName}
                        onChange={(e) => setYearName(e.target.value)}
                        className="py-2 px-3 w-full bg-slate-100 rounded-lg border"
                    />
                </div>

                <div className=" mt-3">
                    <p className=" mb-1">ປີຮຽນ</p>
                    <select
                        value={year}
                        onChange={(e) => setGender(e.target.value)}
                        className="border rounded-lg w-full px-1 py-1 "
                    >
                        <option disabled selected>
                            ປີຮຽນ
                        </option>
                        <option>ປີ1</option>
                        <option>ປີ2</option>
                        <option>ປີ3</option>
                    </select>
                </div>
                {errorYear !== "" ? (
                    <div className="flex text-red-700"> {errorYearID} </div>
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

export default FormAddYear