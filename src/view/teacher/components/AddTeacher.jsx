import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import validationSchema from "../../../service/validation";
import { AddStudentApi } from "../../../api/student";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Loading from "../../../components/Loading";
import { AddTeacherApi } from "../../../api/teacher";



const AddTeacher = () => {

    
    const navigate = useNavigate();

  return (
    <Sidebar>
      <div className="w-full px-8">
        <div className="max-w-screen-xl mx-auto">
        <Formik
       initialValues={{
        tName: 'pele',
        tSurname: 'philavong',
        tType: 'teacher',
        age: '22',
        gender: 'male',
        tel: '55748473',
        tID: 'FAS123'
       }}
       validationSchema={validationSchema.teacher}
       onSubmit={ async (values) => {
         // same shape as initial values
         console.log(values);

        const response = await AddTeacherApi(values);
        if(!response){
            Swal.fire({
                title: "ຜິດພາດ",
                text: "ບໍ່ສາມາດບັນທຶກຂໍ້ມູນໄດ້ ສາເຫດອາດເກີດຈາກ: ລະຫັດອາຈານຊຳ, ຂໍ້ຜິດພາດໃນການບັນທຶກຂໍ້ມູນ",
                icon: "error",
              });
            return;
        }
        Swal.fire({
            title: "ສຳເລັດ",
            text: "ເພີ່ມຂໍ້ມູນສຳເລັດ",
            icon: "success",
          });
          navigate("/teacher");

        return;

       }}
     >
         {({ errors, touched, isSubmitting }) => (
         <Form>
            <h2 className="text-xl font-semibold mt-8">ເພີ່ມອາຈານ</h2>
            {/* tName */}
            <p className=" mb-1 mt-8">ຊື່ອາຈານ <span className="text-red-500">*</span></p>
           <Field disabled={isSubmitting} name="tName" placeholder="ຊື່ອາຈານ..." className="py-2 px-3 w-full bg-slate-100 rounded-lg border" />
           <ErrorMessage name="tName" component="div" className="text-red-500"/>
           {/* tSurname */}
           <p className=" mb-1 mt-8">ນາມສະກຸນອາຈານ <span className="text-red-500">*</span></p>
           <Field disabled={isSubmitting} name="tSurname" placeholder="ນາມສະກຸນອາຈານ..." className="py-2 px-3 w-full bg-slate-100 rounded-lg border" />
           <ErrorMessage name="tSurname" component="div" className="text-red-500"/>
           {/* tType */}
           <p className=" mb-1 mt-8">ປະເພດອາຈານ <span className="text-red-500">*</span></p>
           <Field disabled={isSubmitting} name="tType" placeholder="ປະເພດອາຈານ..." className="py-2 px-3 w-full bg-slate-100 rounded-lg border" />
           <ErrorMessage name="tType" component="div" className="text-red-500"/>
           {/* age */}
           <p className=" mb-1 mt-8">ອາຍຸ <span className="text-red-500">*</span></p>
           <Field disabled={isSubmitting} name="age" placeholder="ອາຍຸ..." className="py-2 px-3 w-full bg-slate-100 rounded-lg border" />
           <ErrorMessage name="age" component="div" className="text-red-500"/>
           {/* gender */}
           <p className=" mb-1 mt-8">ເພດ <span className="text-red-500">*</span></p>
           <Field disabled={isSubmitting} name="gender" as="select" placeholder="ເພດ..." className="py-2 px-3 w-full bg-slate-100 rounded-lg border" >
            <option value="male">male</option>
            <option value="female">female</option>
           </Field>
           <ErrorMessage name="gender" component="div" className="text-red-500"/>
           {/* tel */}
           <p className=" mb-1 mt-8">ເບີໂທ <span className="text-red-500">*</span></p>
           <Field disabled={isSubmitting} name="tel" placeholder="ເບີໂທ..." className="py-2 px-3 w-full bg-slate-100 rounded-lg border" />
           <ErrorMessage name="tel" component="div" className="text-red-500"/>
           {/* tID */}
           <p className=" mb-1 mt-8">ລະຫັດອາຈານ <span className="text-red-500">*</span></p>
           <Field disabled={isSubmitting} name="tID" placeholder="ລະຫັດອາຈານ..." className="py-2 px-3 w-full bg-slate-100 rounded-lg border" />
           <ErrorMessage name="tID" component="div" className="text-red-500"/>

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

export default AddTeacher;
