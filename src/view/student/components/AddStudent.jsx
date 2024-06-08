import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import validationSchema from "../../../service/validation";
import { AddStudentApi } from "../../../api/student";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Loading from "../../../components/Loading";



const AddStudent = () => {

    
    const navigate = useNavigate();

  return (
    <Sidebar>
      <div className="w-full px-8">
        <div className="max-w-screen-xl mx-auto">
        <Formik
       initialValues={{
         sName: 'pele',
         sSurname: 'philavong',
         birthday: '2024-05-09',
         nationallity: 'lao',
         gender: 'male',
         village: 'sekert',
         district: 'nasaiythong',
         province: 'vientiane',
         tel: '55748473',
         sID: 'FAS123',
       }}
       validationSchema={validationSchema.student}
       onSubmit={ async (values) => {
         // same shape as initial values
         console.log(values);

        const response = await AddStudentApi(values);
        if(!response){
            Swal.fire({
                title: "ຜິດພາດ",
                text: "ບໍ່ສາມາດບັນທຶກຂໍ້ມູນໄດ້ ສາເຫດອາດເກີດຈາກ: ລະຫັດນັກສຶກສາຊຳ, ຂໍ້ຜິດພາດໃນການບັນທຶກຂໍ້ມູນ",
                icon: "error",
              });
            return;
        }
        Swal.fire({
            title: "ສຳເລັດ",
            text: "ເພີ່ມຂໍ້ມູນສຳເລັດ",
            icon: "success",
          });
          navigate("/student");

        return;

       }}
     >
         {({ errors, touched, isSubmitting }) => (
         <Form>
            <h2 className="text-xl font-semibold mt-8">ເພີ່ມນັກສຶກສາ</h2>
            {/* sName */}
            <p className=" mb-1 mt-8">ຊື່ນັກສຶກສາ <span className="text-red-500">*</span></p>
           <Field disabled={isSubmitting} name="sName" placeholder="ຊື່ນັກສຶກສາ..." className="py-2 px-3 w-full bg-slate-100 rounded-lg border" />
           <ErrorMessage name="sName" component="div" className="text-red-500"/>
           {/* sUsername */}
           <p className=" mb-1 mt-8">ນາມສະກຸນນັກສຶກສາ <span className="text-red-500">*</span></p>
           <Field disabled={isSubmitting} name="sSurname" placeholder="ຊື່ນາມສະກຸນ..." className="py-2 px-3 w-full bg-slate-100 rounded-lg border" />
           <ErrorMessage name="sSurname" component="div" className="text-red-500"/>
           {/* birthday */}
           <p className=" mb-1 mt-8">ວັນ/ເດືອນ/ປີເກີດ <span className="text-red-500">*</span></p>
           <Field disabled={isSubmitting} name="birthday" type="date" className="py-2 px-3 w-full bg-slate-100 rounded-lg border" />
           <ErrorMessage name="birthday" component="div" className="text-red-500"/>
           {/* nationallity */}
           <p className=" mb-1 mt-8">ສັນຊາດ <span className="text-red-500">*</span></p>
           <Field disabled={isSubmitting} name="nationallity" placeholder="ສັນຊາດ..." className="py-2 px-3 w-full bg-slate-100 rounded-lg border" />
           <ErrorMessage name="nationallity" component="div" className="text-red-500"/>
           {/* gender */}
           <p className=" mb-1 mt-8">ເພດ <span className="text-red-500">*</span></p>
           <Field disabled={isSubmitting} name="gender" as="select" placeholder="ເພດ..." className="py-2 px-3 w-full bg-slate-100 rounded-lg border" >
            <option value="male">male</option>
            <option value="female">female</option>
           </Field>
           <ErrorMessage name="gender" component="div" className="text-red-500"/>
           {/* village */}
           <p className=" mb-1 mt-8">ບ້ານ <span className="text-red-500">*</span></p>
           <Field disabled={isSubmitting} name="village" placeholder="ບ້ານ..." className="py-2 px-3 w-full bg-slate-100 rounded-lg border" />
           <ErrorMessage name="village" component="div" className="text-red-500"/>
           {/* district */}
           <p className=" mb-1 mt-8">ແຂວງ <span className="text-red-500">*</span></p>
           <Field disabled={isSubmitting} name="district" placeholder="ແຂວງ..." className="py-2 px-3 w-full bg-slate-100 rounded-lg border" />
           <ErrorMessage name="district" component="div" className="text-red-500"/>
           {/* province */}
           <p className=" mb-1 mt-8">ເມືອງ <span className="text-red-500">*</span></p>
           <Field disabled={isSubmitting} name="province" placeholder="ແຂວງ..." className="py-2 px-3 w-full bg-slate-100 rounded-lg border" />
           <ErrorMessage name="province" component="div" className="text-red-500"/>
           {/* tel */}
           <p className=" mb-1 mt-8">ເບີໂທ <span className="text-red-500">*</span></p>
           <Field disabled={isSubmitting} name="tel" placeholder="ເບີໂທ..." className="py-2 px-3 w-full bg-slate-100 rounded-lg border" />
           <ErrorMessage name="tel" component="div" className="text-red-500"/>
           {/* sID */}
           <p className=" mb-1 mt-8">ລະຫັດນັກສຶກສາ <span className="text-red-500">*</span></p>
           <Field disabled={isSubmitting} name="sID" placeholder="ລະຫັດນັກສຶກສາ..." className="py-2 px-3 w-full bg-slate-100 rounded-lg border" />
           <ErrorMessage name="sID" component="div" className="text-red-500"/>

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

export default AddStudent;
