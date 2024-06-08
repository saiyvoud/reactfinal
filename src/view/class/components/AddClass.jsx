import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/Sidebar";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import validationSchema from "../../../service/validation";
import { AddStudentApi } from "../../../api/student";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Loading from "../../../components/Loading";
import { AddTeacherApi } from "../../../api/teacher";
import { GetAllYearApi } from "../../../api/year";
import { GetAllPartApi } from "../../../api/part";
import { GetAllMajorApi } from "../../../api/major";
import { GetAllSubjectApi } from "../../../api/subject";
import { AddClassApi } from "../../../api/class";



const AddClass = () => {

    
    const navigate = useNavigate();
    const [loading , setLoading] = useState(false);
    const [year, setYear] = useState([]);
    const [major, setMajor] = useState([]);

    const autoFetchingData = async (fetchDataApi, setFetchData, label) => {
        const response = await fetchDataApi();
        if (!response) {
          Swal.fire({
            title: "ຜິດພາດ",
            text: `ບໍ່ສາມາດດິງຂໍ້ມູນ${label}ໄດ້ ກະລຸນາເຂົ້າສູ່ລະບົບອີກຄັ້ງ`,
            icon: "error",
          });
          //navigate("/login");
          return;
        }
        console.log(`${label} getAll data::=>`);
        console.log(response);
        setFetchData(response);
    }

    useEffect(() => {
      const fetchDropDownData = async () => {
        setLoading(true);
        await Promise.all([
          autoFetchingData(GetAllYearApi, setYear, "ປີ"),
          autoFetchingData(GetAllMajorApi, setMajor, "ສາຂາ"),
        ])
        setLoading(false);
      }
      fetchDropDownData();

    }, [])

  return (
    <Sidebar>
      <div className="w-full px-8">
        <div className="max-w-screen-xl mx-auto">
        <Formik
       initialValues={{
        cName: "",
        termNo: "",
        year_id: "",
        major_id: "",
       }}
       validationSchema={validationSchema.classRoom}
       onSubmit={ async (values) => {
         // same shape as initial values
         console.log(values);

        const response = await AddClassApi(values);
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
          navigate("/class");

        return;

       }}
     >
         {({ errors, touched, isSubmitting }) => (
         <Form>
            <h2 className="text-xl font-semibold mt-8">ເພີ່ມຫ້ອງ</h2>
            {/* cName */}
            <p className=" mb-1 mt-8">ຊື່ຫ້ອງ <span className="text-red-500">*</span></p>
           <Field disabled={isSubmitting} name="cName" placeholder="ຊື່ຫ້ອງ..." className="py-2 px-3 w-full bg-slate-100 rounded-lg border" />
           <ErrorMessage name="cName" component="div" className="text-red-500"/>
           {/* termNo */}
           <p className=" mb-1 mt-8">ເທີມທີ່ <span className="text-red-500">*</span></p>
           <Field disabled={isSubmitting} name="termNo" placeholder="ເທີມທີ່..." className="py-2 px-3 w-full bg-slate-100 rounded-lg border" />
           <ErrorMessage name="termNo" component="div" className="text-red-500"/>
           {/* year_id */}
           <p className=" mb-1 mt-8">ປີ <span className="text-red-500">*</span></p>
           <Field disabled={isSubmitting || loading} name="year_id" as="select" placeholder="ປີ..." className="py-2 px-3 w-full bg-slate-100 rounded-lg border" >
            <option value="" disabled>--- ເລືອກປີ ---</option>
            {year.map((item, index) => <option key={index} value={item.yUuid}>{item.yearNumber}</option>)}
           </Field>
           <ErrorMessage name="year_id" component="div" className="text-red-500"/>
           {/* major_id */}
           <p className=" mb-1 mt-8">ສາຂາ <span className="text-red-500">*</span></p>
           <Field disabled={isSubmitting || loading} name="major_id" as="select" placeholder="ສາຂາ..." className="py-2 px-3 w-full bg-slate-100 rounded-lg border" >
            <option value="" disabled>--- ເລືອກສາຂາ ---</option>
            {major.map((item, index) => <option key={index} value={item.mUuid}>{item.mName}</option>)}
           </Field>
           <ErrorMessage name="major_id" component="div" className="text-red-500"/>


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

export default AddClass;
