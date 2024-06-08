import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/Sidebar";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import validationSchema from "../../../service/validation";
import { AddStudentApi } from "../../../api/student";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../../components/Loading";
import { AddTeacherApi } from "../../../api/teacher";
import { AddMajorApi, GetOneMajorApi, UpdateMajorApi } from "../../../api/major";



const EditMajor = () => {

    
    const navigate = useNavigate();

    const { id } = useParams();
    const [data, setData] = useState({});
    const [loading , setLoading] = useState(false);
  
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        const response = await GetOneMajorApi(id);
        if (!response) {
          Swal.fire({
            title: "ຜິດພາດ",
            text: "ບໍ່ສາມາດດິງຂໍ້ມູນສາຂາໄດ້ ກະລຸນາເຂົ້າສູ່ລະບົບອີກຄັ້ງ",
            icon: "error",
          });
          setLoading(false);
          //navigate("/login");
          return;
        }
        setLoading(false);
        console.log("major getOne data::=>");
        console.log(response);
        setData(response);
      }
      fetchData();
  
    }, [])

  return (
    <Sidebar>
      <div className="w-full px-8">
        <div className="max-w-screen-xl mx-auto">
        <Formik
       initialValues={{
        mName: data?.mName || '',
       }}
       enableReinitialize
       validationSchema={validationSchema.major}
       onSubmit={ async (values) => {
         // same shape as initial values
         console.log(values);

        const response = await UpdateMajorApi(id, values);
        if(!response){
            Swal.fire({
                title: "ຜິດພາດ",
                text: "ບໍ່ສາມາດບັນທຶກຂໍ້ມູນໄດ້, ຂໍ້ຜິດພາດໃນການບັນທຶກຂໍ້ມູນ",
                icon: "error",
              });
            return;
        }
        Swal.fire({
            title: "ສຳເລັດ",
            text: "ເພີ່ມຂໍ້ມູນສຳເລັດ",
            icon: "success",
          });
          navigate("/major");

        return;

       }}
     >
         {({ errors, touched, isSubmitting }) => (
         <Form>
            <h2 className="text-xl font-semibold mt-8">ເພີ່ມສາຂາ</h2>
            {/* mName */}
            <p className=" mb-1 mt-8">ຊື່ສາຂາ <span className="text-red-500">*</span></p>
           <Field disabled={isSubmitting || loading} name="mName" placeholder="ຊື່ສາຂາ..." className="py-2 px-3 w-full bg-slate-100 rounded-lg border" />
           <ErrorMessage name="mName" component="div" className="text-red-500"/>

           <div className="w-full h-20 flex justify-center items-center gap-4 mt-20 mb-20">
            <div onClick={() => navigate(-1)} disabled={isSubmitting || loading} className="bg-gray-400 text-white font-bold border shadow-sm rounded-lg py-2 px-4 min-w-20 hover:cursor-pointer hover:opacity-80">ຍົກເລີກ</div>
            <button disabled={isSubmitting || loading} type="submit" className="bg-blue-400 text-white font-bold border shadow-sm rounded-lg py-2 px-4 min-w-20 flex justify-center items-center gap-2 hover:opacity-80"><Loading show={isSubmitting || loading}/>ບັນທຶກ</button>
           </div>
         </Form>
       )}
     </Formik>

        </div>
      </div>
    </Sidebar>
  );
};

export default EditMajor;
