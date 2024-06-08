import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/Sidebar";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import validationSchema from "../../../service/validation";
import { AddStudentApi } from "../../../api/student";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../../components/Loading";
import UploadFile from "../../../components/UploadFile";
import { AddUserApi, GetOneUserApi } from "../../../api/user";



const EditAccessRight = () => {
    const navigate = useNavigate();

    const { id } = useParams();
    const [data, setData] = useState({});
    const [loading , setLoading] = useState(false);
  
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        const response = await GetOneUserApi(id);
        if (!response) {
          Swal.fire({
            title: "ຜິດພາດ",
            text: "ບໍ່ສາມາດດິງຂໍ້ມູນສິດຜູ້ໃຊ້ໄດ້ ກະລຸນາເຂົ້າສູ່ລະບົບອີກຄັ້ງ",
            icon: "error",
          });
          setLoading(false);
          //navigate("/login");
          return;
        }
        setLoading(false);
        console.log("user getOne data::=>");
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
        profile: "",
        role: data?.role || '',
        email: data?.email || '',
        password: "",
       }}
       enableReinitialize
       validationSchema={validationSchema.user}
       onSubmit={ async (values) => {
         // same shape as initial values
         console.log(values);

        // TODO [ backend can't upload image and role]
        Swal.fire({
            title: "ລຳຖ້າ",
            text: "ຢູ່ໃນການພັດທະນາ... 👷‍♂️⚒",
            icon: "warning",
          });



        // navigate("/accessRight");

       }}
     >
         {({ errors, touched, isSubmitting, setFieldValue }) => (
         <Form>
            <h2 className="text-xl font-semibold mt-8">ເພີ່ມສິດເຂົ້າໃຊ້</h2>
            {/* email */}
            <p className=" mb-1 mt-8">ອີເມວ <span className="text-red-500">*</span></p>
           <Field disabled={isSubmitting || loading} name="email" placeholder="ອີເມວ..." className="py-2 px-3 w-full bg-slate-100 rounded-lg border" />
           <ErrorMessage name="email" component="div" className="text-red-500"/>
           {/* password */}
           <p className=" mb-1 mt-8">ລະຫັດຜ່ານ <span className="text-red-500">*</span></p>
           <Field disabled={isSubmitting || loading} name="password" placeholder="ລະຫັດຜ່ານ..." className="py-2 px-3 w-full bg-slate-100 rounded-lg border" />
           <ErrorMessage name="password" component="div" className="text-red-500"/>
           {/* role */}
           <p className=" mb-1 mt-8">ສິດເຂົ້າໃຊ້ <span className="text-red-500">*</span></p>
           <Field disabled={isSubmitting || loading} name="role" as="select" placeholder="ສິດເຂົ້າໃຊ້..." className="py-2 px-3 w-full bg-slate-100 rounded-lg border" >
           <option disabled value="">--ເລືອກສິດເຂົ້າໃຊ້--</option>
            <option value="student">student</option>
            <option value="admin">admin</option>
           </Field>
           <ErrorMessage name="role" component="div" className="text-red-500"/>
            {/* profile */}
            <p className=" mb-2 mt-16">ຮູບໂປຟາຍ <span className="text-red-500">*</span></p>
           <UploadFile className="py-2 px-3 w-full bg-slate-800 rounded-lg border border-gray-800" name="profile" accept="image/*" onUpload={(file) => setFieldValue("profile", file)} onRemove={(file) => setFieldValue("profile", "")}  />
           <ErrorMessage name="profile" component="div" className="text-red-500"/>

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

export default EditAccessRight;
