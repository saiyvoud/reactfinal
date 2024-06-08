import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/Sidebar";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import validationSchema from "../../../service/validation";
import { AddStudentApi } from "../../../api/student";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Loading from "../../../components/Loading";
import { AddTeacherApi, GetAllTeacherApi } from "../../../api/teacher";
import { AddSubjectApi } from "../../../api/subject";
import TeacherOptionList from "./TeacherOptionList";



const AddSubject = () => {

    
    const navigate = useNavigate();

  return (
    <Sidebar>
      <div className="w-full px-8">
        <div className="max-w-screen-xl mx-auto">
        <Formik
        enableReinitialize
       initialValues={{
        subName: "IT",
        subTime: "8:00-9:30",
        tUuid: '',
       }}
       validationSchema={validationSchema.subject}
       onSubmit={ async (values) => {
         // same shape as initial values
         console.log(values);

        const response = await AddSubjectApi(values);
        if(!response){
            Swal.fire({
                title: "ຜິດພາດ",
                text: "ບໍ່ສາມາດບັນທຶກຂໍ້ມູນໄດ້ ສາເຫດອາດເກີດຈາກ: ລະຫັດຊຳ, ຂໍ້ຜິດພາດໃນການບັນທຶກຂໍ້ມູນ",
                icon: "error",
              });
            return;
        }
        Swal.fire({
            title: "ສຳເລັດ",
            text: "ເພີ່ມຂໍ້ມູນສຳເລັດ",
            icon: "success",
          });
          navigate("/subject");

        return;

       }}
     >
         {({ errors, touched, isSubmitting }) => (
         <Form>
            <h2 className="text-xl font-semibold mt-8">ເພີ່ມວິຊາ</h2>
            {/* subName */}
            <p className=" mb-1 mt-8">ຊື່ວິຊາ <span className="text-red-500">*</span></p>
           <Field disabled={isSubmitting} name="subName" placeholder="ຊື່ວິຊາ..." className="py-2 px-3 w-full bg-slate-100 rounded-lg border" />
           <ErrorMessage name="subName" component="div" className="text-red-500"/>
           {/* subTime */}
           <p className=" mb-1 mt-8">ເວລາສອນ <span className="text-red-500">*</span></p>
           <Field disabled={isSubmitting} name="subTime" placeholder="ເວລາສອນ..." className="py-2 px-3 w-full bg-slate-100 rounded-lg border" />
           <ErrorMessage name="subTime" component="div" className="text-red-500"/>
           {/* tUuid */}
           <p className=" mb-1 mt-8">ເລືອກອາຈານ <span className="text-red-500">*</span></p>
           <Field disabled={isSubmitting} name="tUuid" as="select" placeholder="ເລືອກອາຈານ..." className="py-2 px-3 w-full bg-slate-100 rounded-lg border" >
            <TeacherOptionList />
           </Field>
           <ErrorMessage name="tUuid" component="div" className="text-red-500"/>

           <div className="w-full h-20 flex justify-center items-center gap-4 mt-20 mb-20">
            <div onClick={() => navigate(-1)} disabled={isSubmitting} className="bg-gray-400 text-white font-bold border shadow-sm rounded-lg py-2 px-4 min-w-20 hover:cursor-pointer hover:opacity-80">ຍົກເລີກ</div>
            <button disabled={isSubmitting} type="submit" className="bg-blue-400 text-white font-bold border shadow-sm rounded-lg py-2 px-4 min-w-20 flex justify-center items-center gap-2 hover:opacity-80"><Loading show={isSubmitting}/>ບັນທຶກ</button>
           </div>
         </Form>
       )}
     </Formik>

        </div>
      </div>
    </Sidebar>
  );
};

export default AddSubject;
