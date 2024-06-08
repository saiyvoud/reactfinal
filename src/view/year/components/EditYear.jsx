import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/Sidebar";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import validationSchema from "../../../service/validation";
import { AddStudentApi } from "../../../api/student";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../../components/Loading";
import { AddTeacherApi } from "../../../api/teacher";
import { AddYearApi, GetOneYearApi, UpdateYearApi } from "../../../api/year";



const EditYear = () => {

    const navigate = useNavigate();

    
    const { id } = useParams();
    const [data, setData] = useState({});
    const [loading , setLoading] = useState(false);
  
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        const response = await GetOneYearApi(id);
        if (!response) {
          Swal.fire({
            title: "ຜິດພາດ",
            text: "ບໍ່ສາມາດດິງຂໍ້ມູນປີໄດ້ ກະລຸນາເຂົ້າສູ່ລະບົບອີກຄັ້ງ",
            icon: "error",
          });
          setLoading(false);
          //navigate("/login");
          return;
        }
        setLoading(false);
        console.log("year getOne data::=>");
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
        yearNumber: data?.yearNumber || '',
        schoolyear: data?.schoolyear || '',
       }}
       validationSchema={validationSchema.year}
       enableReinitialize
       onSubmit={ async (values) => {
         // same shape as initial values
         console.log(values);

        const response = await UpdateYearApi(id, values);
        if(!response){
            Swal.fire({
                title: "ຜິດພາດ",
                text: "ບໍ່ສາມາດບັນທຶກຂໍ້ມູນໄດ້ ສາເຫດອາດເກີດຈາກ: ໄອດີຊຳ, ຂໍ້ຜິດພາດໃນການບັນທຶກຂໍ້ມູນ",
                icon: "error",
              });
            return;
        }
        Swal.fire({
            title: "ສຳເລັດ",
            text: "ແກ້ໄຊຂໍ້ມູນສຳເລັດ",
            icon: "success",
          });
          navigate("/year");

        return;

       }}
     >
         {({ errors, touched, isSubmitting }) => (
         <Form>
            <h2 className="text-xl font-semibold mt-8">ເພີ່ມອາຈານ</h2>
           {/* yearNumber */}
           <p className=" mb-1 mt-8">ເລກປີ <span className="text-red-500">*</span></p>
           <Field disabled={isSubmitting || loading} name="yearNumber" placeholder="ເລກປີ..." className="py-2 px-3 w-full bg-slate-100 rounded-lg border" />
           <ErrorMessage name="yearNumber" component="div" className="text-red-500"/>
           {/* schoolyear */}
           <p className=" mb-1 mt-8">ສົກຮຽນ <span className="text-red-500">*</span></p>
           <Field disabled={isSubmitting} name="schoolyear" placeholder="ສົກຮຽນ..." className="py-2 px-3 w-full bg-slate-100 rounded-lg border" />
           <ErrorMessage name="schoolyear" component="div" className="text-red-500"/>

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

export default EditYear;
