import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/Sidebar";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import validationSchema from "../../../service/validation";
import { AddStudentApi } from "../../../api/student";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../../components/Loading";
import { AddPartApi, GetOnePartApi, UpdatePartApi } from "../../../api/part";



const EditPart = () => {


    const { id } = useParams();
    const [data, setData] = useState({});
    const [loading , setLoading] = useState(false);
  
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        const response = await GetOnePartApi(id);
        if (!response) {
          Swal.fire({
            title: "ຜິດພາດ",
            text: "ບໍ່ສາມາດດິງຂໍ້ມູນພາກໄດ້ ກະລຸນາເຂົ້າສູ່ລະບົບອີກຄັ້ງ",
            icon: "error",
          });
          setLoading(false);
          //navigate("/login");
          return;
        }
        setLoading(false);
        console.log("part getOne data::=>");
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
        pName: data?.pName || '',
       }}
       enableReinitialize
       validationSchema={validationSchema.part}
       onSubmit={ async (values) => {
         // same shape as initial values
         console.log(values);

        const response = await UpdatePartApi(id, values);
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
          navigate("/part");

        return;

       }}
     >
         {({ errors, touched, isSubmitting }) => (
         <Form>
            <h2 className="text-xl font-semibold mt-8">ແກ້ໄຂພາກ</h2>
           {/* pName */}
           <p className=" mb-1 mt-8">ຊື່ພາກຮຽນ <span className="text-red-500">*</span></p>
           <Field disabled={isSubmitting || loading} name="pName" placeholder="ຊື່ພາກຮຽນ..." className="py-2 px-3 w-full bg-slate-100 rounded-lg border" />
           <ErrorMessage name="pName" component="div" className="text-red-500"/>

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

export default EditPart;
