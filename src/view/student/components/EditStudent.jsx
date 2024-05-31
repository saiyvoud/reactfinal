import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/Sidebar";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import validationSchema from "../../service/validation";
import { AddStudentApi, GetOneStudentApi, UpdateStudentApi } from "../../../api/student";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../../components/Loading";



const EditStudent = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [loading , setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await GetOneStudentApi(id);
      if (!response) {
        Swal.fire({
          title: "ຜິດພາດ",
          text: "ບໍ່ສາມາດດິງຂໍ້ມູນນັກສຶກສາໄດ້ ກະລຸນາເຂົ້າສູ່ລະບົບອີກຄັ້ງ",
          icon: "error",
        });
        setLoading(false);
        //navigate("/login");
        return;
      }
      setLoading(false);
      console.log("student getOne data::=>");
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
         sName: data?.sName || '',
         sSurname: data?.sSurname || '',
         birthday: data?.birthday || '',
         nationallity: data?.nationallity || '',
         gender: data?.gender || '',
         village: data?.village || '',
         district: data?.district || '',
         province: data?.province || '',
         tel: data?.tel || '',
         sID: data?.sID || '',
       }}
       enableReinitialize
       validationSchema={validationSchema.student}
       onSubmit={ async (values) => {
         // same shape as initial values
         console.log(values);

         const sUuid = data?.sUuid || '';
        const response = await UpdateStudentApi(sUuid, values);
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
          navigate("/student");

        return;

       }}
     >
         {({ errors, touched, isSubmitting }) => (
         <Form>
            <h2 className="text-xl font-semibold mt-8">ແກ້ໄຂນັກສຶກສາ</h2>
            {/* sName */}
            <p className=" mb-1 mt-8">ຊື່ນັກສຶກສາ <span className="text-red-500">*</span></p>
           <Field disabled={isSubmitting || loading} name="sName" placeholder="ຊື່ນັກສຶກສາ..." className="py-2 px-3 w-full bg-slate-100 rounded-lg border" />
           <ErrorMessage name="sName" component="div" className="text-red-500"/>
           {/* sUsername */}
           <p className=" mb-1 mt-8">ນາມສະກຸນນັກສຶກສາ <span className="text-red-500">*</span></p>
           <Field disabled={isSubmitting || loading} name="sSurname" placeholder="ຊື່ນາມສະກຸນ..." className="py-2 px-3 w-full bg-slate-100 rounded-lg border" />
           <ErrorMessage name="sSurname" component="div" className="text-red-500"/>
           {/* birthday */}
           <p className=" mb-1 mt-8">ວັນ/ເດືອນ/ປີເກີດ <span className="text-red-500">*</span></p>
           <Field disabled={isSubmitting || loading} name="birthday" type="date" className="py-2 px-3 w-full bg-slate-100 rounded-lg border" />
           <ErrorMessage name="birthday" component="div" className="text-red-500"/>
           {/* nationallity */}
           <p className=" mb-1 mt-8">ສັນຊາດ <span className="text-red-500">*</span></p>
           <Field disabled={isSubmitting || loading} name="nationallity" placeholder="ສັນຊາດ..." className="py-2 px-3 w-full bg-slate-100 rounded-lg border" />
           <ErrorMessage name="nationallity" component="div" className="text-red-500"/>
           {/* gender */}
           <p className=" mb-1 mt-8">ເພດ <span className="text-red-500">*</span></p>
           <Field disabled={isSubmitting || loading} name="gender" as="select" placeholder="ເພດ..." className="py-2 px-3 w-full bg-slate-100 rounded-lg border" >
            <option value="male">ຊາຍ</option>
            <option value="female">ຍິງ</option>
           </Field>
           <ErrorMessage name="gender" component="div" className="text-red-500"/>
           {/* village */}
           <p className=" mb-1 mt-8">ບ້ານ <span className="text-red-500">*</span></p>
           <Field disabled={isSubmitting || loading} name="village" placeholder="ບ້ານ..." className="py-2 px-3 w-full bg-slate-100 rounded-lg border" />
           <ErrorMessage name="village" component="div" className="text-red-500"/>
           {/* district */}
           <p className=" mb-1 mt-8">ແຂວງ <span className="text-red-500">*</span></p>
           <Field disabled={isSubmitting || loading} name="district" placeholder="ແຂວງ..." className="py-2 px-3 w-full bg-slate-100 rounded-lg border" />
           <ErrorMessage name="district" component="div" className="text-red-500"/>
           {/* province */}
           <p className=" mb-1 mt-8">ເມືອງ <span className="text-red-500">*</span></p>
           <Field disabled={isSubmitting || loading} name="province" placeholder="ແຂວງ..." className="py-2 px-3 w-full bg-slate-100 rounded-lg border" />
           <ErrorMessage name="province" component="div" className="text-red-500"/>
           {/* tel */}
           <p className=" mb-1 mt-8">ເບີໂທ <span className="text-red-500">*</span></p>
           <Field disabled={isSubmitting || loading} name="tel" placeholder="ເບີໂທ..." className="py-2 px-3 w-full bg-slate-100 rounded-lg border" />
           <ErrorMessage name="tel" component="div" className="text-red-500"/>
           {/* sID */}
           <p className=" mb-1 mt-8">ລະຫັດນັກສຶກສາ <span className="text-red-500">*</span></p>
           <Field disabled={isSubmitting || loading} name="sID" placeholder="ລະຫັດນັກສຶກສາ..." className="py-2 px-3 w-full bg-slate-100 rounded-lg border" />
           <ErrorMessage name="sID" component="div" className="text-red-500"/>

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

export default EditStudent;
