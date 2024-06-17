import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/Sidebar";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import validationSchema from "../../../service/validation";
import { AddStudentApi } from "../../../api/student";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../../components/Loading";
import { AddTeacherApi, GetAllTeacherApi } from "../../../api/teacher";
import { AddSubjectApi, GetOneSubjectApi, UpdateSubjectApi } from "../../../api/subject";
import TeacherOptionList from "./TeacherOptionList";



const EditSubject = () => {

    
    const navigate = useNavigate();


    
    const { id } = useParams();
    const [data, setData] = useState({});
    const [loading , setLoading] = useState(false);
  
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        const response = await GetOneSubjectApi(id);
        if (!response) {
          Swal.fire({
            title: "ຜິດພາດ",
            text: "ບໍ່ສາມາດດິງຂໍ້ມູນວິຊາໄດ້ ກະລຸນາເຂົ້າສູ່ລະບົບອີກຄັ້ງ",
            icon: "error",
          });
          setLoading(false);
          //navigate("/login");
          return;
        }
        setLoading(false);
        console.log("subject getOne data::=>");
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
        enableReinitialize
       initialValues={{
        subName: data?.subName || '',
        tUuid: data?.tUuid || '',
       }}
       validationSchema={validationSchema.subject}
       onSubmit={ async (values) => {
         // same shape as initial values
         console.log(values);

        const response = await UpdateSubjectApi(id, values);
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
            text: "ແກ້ໄຂຂໍ້ມູນສຳເລັດ",
            icon: "success",
          });
          navigate("/subject");

        return;

       }}
     >
         {({ errors, touched, isSubmitting }) => (
         <Form>
            <h2 className="text-xl font-semibold mt-8">ແກ້ໄຂວິຊາ</h2>
            {/* subName */}
            <p className=" mb-1 mt-8">ຊື່ວິຊາ <span className="text-red-500">*</span></p>
           <Field disabled={isSubmitting || loading} name="subName" placeholder="ຊື່ວິຊາ..." className="py-2 px-3 w-full bg-slate-100 rounded-lg border" />
           <ErrorMessage name="subName" component="div" className="text-red-500"/>
           {/* tUuid */}
           <p className=" mb-1 mt-8">ເລືອກອາຈານ <span className="text-red-500">*</span></p>
           <Field disabled={isSubmitting || loading} name="tUuid" as="select" placeholder="ເລືອກອາຈານ..." className="py-2 px-3 w-full bg-slate-100 rounded-lg border" >
            <TeacherOptionList />
           </Field>
           <ErrorMessage name="tUuid" component="div" className="text-red-500"/>

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

export default EditSubject;
