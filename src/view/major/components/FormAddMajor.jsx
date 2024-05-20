import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../../components/Sidebar";
import Swal from "sweetalert2";

import { IoClose } from "react-icons/io5";

function FormAddMajor() {
    let navigate = useNavigate();

    const [image, setImage] = useState(null);

    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        const reader = new FileReader();

        reader.onload = () => {
            setImage(reader.result);
        };

        reader.readAsDataURL(file);
    };

    const handleDeleteImage = () => {
        setImage(null); // Reset the image state
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };


    const [majorID, setMajorID] = useState('');
    const [majorName, setMajorName] = useState('');

    const [errorMajorID, setErrorMajorID] = useState('');
    const [errorMajorName, setErrorMajorName] = useState('');

    const handleVerifyStudent = (e) => {
        e.preventDefault();
        try {

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
                    <p className=" mb-1">ລະຫັດສາຂາ</p>
                    <input
                        type="text"
                        placeholder="ລະຫັດສາຂາ"
                        value={majorID}
                        onChange={(e) => setMajorID(e.target.value)}
                        className="py-2 px-3 w-full bg-slate-100 rounded-lg border"
                    />
                </div>
                {errorMajorID !== "" ? (
                    <div className="flex text-red-700"> {errorMajorID} </div>
                ) : (
                    ""
                )}
                <div className=" mt-3">
                    <p className=" mb-1">ຊື່ສາຂາ</p>
                    <input
                        type="text"
                        placeholder="ຊື່ສາຂາ"
                        value={majorName}
                        onChange={(e) => setMajorName(e.target.value)}
                        className="py-2 px-3 w-full bg-slate-100 rounded-lg border"
                    />
                </div>

                <div className=" mt-3">
                    <p className=" mb-1">ຮູບ</p>
                    <div
                        className="border-2 border-dashed text-center border-gray-400 rounded-md p-2 relative"
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                    >
                        {image ? (
                            <>
                                <img src={image} alt="Uploaded" className="max-w-xs max-h-xs" />
                                <button onClick={handleDeleteImage} className="absolute top-0 right-0 mt-1 mr-1 bg-red-500 text-white p-1 rounded-full hover:bg-red-600">
                                    {<IoClose />}
                                </button>
                            </>
                        ) : (
                            <div className="h-[100px] w-full flex items-center flex-col justify-center">
                                <label htmlFor="upLoadFile" className="cursor-pointer text-gray-500">Drag & drop your image here</label>
                                <input accept="image/*" type="file" name="upLoadFile" onChange={(e) => handleDrop(e)} id="upLoadFile" hidden />
                            </div>
                        )}
                    </div>
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
}

export default FormAddMajor;
