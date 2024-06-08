import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/Sidebar";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import validationSchema from "../../../service/validation";
import { AddStudentApi } from "../../../api/student";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../../components/Loading";
import { AddTeacherApi, GetOneTeacherApi, UpdateTeacherApi } from "../../../api/teacher";



const EditTeacher = () => {

    const { id } = useParams();
    const [data, setData] = useState({});
    const [loading , setLoading] = useState(false);
  
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        const response = await GetOneTeacherApi(id);
        if (!response) {
          Swal.fire({
            title: "ຜິດພາດ",
            text: "ບໍ່ສາມາດດິງຂໍ້ມູນອາຈານໄດ້ ກະລຸນາເຂົ້າສູ່ລະບົບອີກຄັ້ງ",
            icon: "error",
          });
          setLoading(false);
          //navigate("/login");
          return;
        }
        setLoading(false);
        console.log("teacher getOne data::=>");
        console.log(response);
        setData(response);
      }
      fetchData();
  
    }, [])

    
    const navigate = useNavigate();

  return (
    <Sidebar>
      <div className="w-full px-8">
        <div className="max-w-screen-xl mx-auto">
        <Formik
       initialValues={{
        tName: data?.tName || '',
        tSurname: data?.tSurname || '',
        tType: data?.tType || '',
        age: data?.age || '',
        gender: data?.gender || '',
        tel: data?.tel || '',
        tID: data?.tID || '',
       }}
       enableReinitialize
       validationSchema={validationSchema.teacher}
       onSubmit={ async (values) => {
        // same shape as initial values
        console.log(values);

        const tUuid = data?.tUuid || '';
        const response = await UpdateTeacherApi(tUuid, values);
        if(!response){
            Swal.fire({
                title: "ຜິດພາດ",
                text: "ບໍ່ສາມາດແກ້ໄຂຂໍ້ມູນໄດ້ ສາເຫດອາດເກີດຈາກ: ລະຫັດນັກສຶກສາຊຳ, ຂໍ້ຜິດພາດໃນການບັນທຶກຂໍ້ມູນ",
                icon: "error",
                });
            return;
        }
        Swal.fire({
            title: "ສຳເລັດ",
            text: "ແກ້ໄຂຂໍມູນສຳເລັດຂໍ້ມູນສຳເລັດ",
            icon: "success",
            });
            navigate("/teacher");

        return;

        }}
     >
         {({ errors, touched, isSubmitting }) => (
         <Form>
            <h2 className="text-xl font-semibold mt-8">ແກ້ໄຂຂໍ້ມູນອາຈານ</h2>
            {/* tName */}
            <p className=" mb-1 mt-8">ຊື່ອາຈານ <span className="text-red-500">*</span></p>
           <Field disabled={isSubmitting || loading} name="tName" placeholder="ຊື່ອາຈານ..." className="py-2 px-3 w-full bg-slate-100 rounded-lg border" />
           <ErrorMessage name="tName" component="div" className="text-red-500"/>
           {/* tSurname */}
           <p className=" mb-1 mt-8">ນາມສະກຸນອາຈານ <span className="text-red-500">*</span></p>
           <Field disabled={isSubmitting || loading} name="tSurname" placeholder="ນາມສະກຸນອາຈານ..." className="py-2 px-3 w-full bg-slate-100 rounded-lg border" />
           <ErrorMessage name="tSurname" component="div" className="text-red-500"/>
           {/* tType */}
           <p className=" mb-1 mt-8">ປະເພດອາຈານ <span className="text-red-500">*</span></p>
           <Field disabled={isSubmitting || loading} name="tType" placeholder="ປະເພດອາຈານ..." className="py-2 px-3 w-full bg-slate-100 rounded-lg border" />
           <ErrorMessage name="tType" component="div" className="text-red-500"/>
           {/* age */}
           <p className=" mb-1 mt-8">ອາຍຸ <span className="text-red-500">*</span></p>
           <Field disabled={isSubmitting || loading} name="age" placeholder="ອາຍຸ..." className="py-2 px-3 w-full bg-slate-100 rounded-lg border" />
           <ErrorMessage name="age" component="div" className="text-red-500"/>
           {/* gender */}
           <p className=" mb-1 mt-8">ເພດ <span className="text-red-500">*</span></p>
           <Field disabled={isSubmitting || loading} name="gender" as="select" placeholder="ເພດ..." className="py-2 px-3 w-full bg-slate-100 rounded-lg border" >
            <option value="male">male</option>
            <option value="female">female</option>
           </Field>
           <ErrorMessage name="gender" component="div" className="text-red-500"/>
           {/* tel */}
           <p className=" mb-1 mt-8">ເບີໂທ <span className="text-red-500">*</span></p>
           <Field disabled={isSubmitting || loading} name="tel" placeholder="ເບີໂທ..." className="py-2 px-3 w-full bg-slate-100 rounded-lg border" />
           <ErrorMessage name="tel" component="div" className="text-red-500"/>
           {/* tID */}
           <p className=" mb-1 mt-8">ລະຫັດອາຈານ <span className="text-red-500">*</span></p>
           <Field disabled={isSubmitting || loading} name="tID" placeholder="ລະຫັດອາຈານ..." className="py-2 px-3 w-full bg-slate-100 rounded-lg border" />
           <ErrorMessage name="tID" component="div" className="text-red-500"/>

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

export default EditTeacher;
