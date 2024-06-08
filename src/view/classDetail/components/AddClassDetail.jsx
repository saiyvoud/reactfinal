import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/Sidebar";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import validationSchema from "../../../service/validation";
import { AddStudentApi, GetAllStudentApi } from "../../../api/student";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../../components/Loading";
import { AddTeacherApi } from "../../../api/teacher";
import { GetAllYearApi } from "../../../api/year";
import { GetAllPartApi } from "../../../api/part";
import { GetAllMajorApi } from "../../../api/major";
import { GetAllSubjectApi } from "../../../api/subject";
import { AddClassApi, GetAllClassApi } from "../../../api/class";
import { AddClassDetailApi } from "../../../api/classDetail";
import { autoFetchingData } from "../../../helpers";



const AddClassDetail = () => {

    const { id } = useParams();

    
    const navigate = useNavigate();
    const [loading , setLoading] = useState(false);
    const [classRoom, setClassRoom] = useState([]);
    const [student, setStudent] = useState([]);
    const [part, setPart] = useState([]);
    const [subject, setSubject] = useState([]);

    useEffect(() => {
      const fetchDropDownData = async () => {
        setLoading(true);
        await Promise.all([
          autoFetchingData(GetAllClassApi, setClassRoom, "ຫ້ອງ"),
          autoFetchingData(GetAllStudentApi, setStudent, "ນັກສຶກສາາ"),
          autoFetchingData(GetAllPartApi, setPart, "ພາກ"),
          autoFetchingData(GetAllSubjectApi, setSubject, "ວິຊາ"),
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
        class_id: id || '',
        student_id: '',
        part_id: '',
        subject_id: '',
       }}
       enableReinitialize
       validationSchema={validationSchema.classDetail}
       onSubmit={ async (values) => {
         // same shape as initial values
         console.log(values);

        const response = await AddClassDetailApi(values);
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
          navigate(-1);

        return;

       }}
     >
         {({ errors, touched, isSubmitting }) => (
         <Form>
            <h2 className="text-xl font-semibold mt-8">ເພີ່ມລາຍລະອຽດຫ້ອງ</h2>
           {/* class_id */}
           <p className=" mb-1 mt-8">ຫ້ອງ <span className="text-red-500">*</span></p>
           <Field disabled={true} name="class_id" as="select" placeholder="ຫ້ອງ..." className="py-2 px-3 w-full bg-slate-100 rounded-lg border" >
            <option value="" disabled>--- ເລືອກຫ້ອງ ---</option>
            {classRoom.map((item, index) => <option key={index} value={item.cUuid}>{item.cName}</option>)}
           </Field>
           <ErrorMessage name="class_id" component="div" className="text-red-500"/>
           {/* student_id */}
           <p className=" mb-1 mt-8">ນັກສຶກສາ <span className="text-red-500">*</span></p>
           <Field disabled={isSubmitting || loading} name="student_id" as="select" placeholder="ນັກສຶກສາ..." className="py-2 px-3 w-full bg-slate-100 rounded-lg border" >
            <option value="" disabled>--- ເລືອກນັກສຶກສາ ---</option>
            {student.map((item, index) => <option key={index} value={item.sUuid}>{item.sName} {item.sSurname}</option>)}
           </Field>
           <ErrorMessage name="student_id" component="div" className="text-red-500"/>
           {/* part_id */}
           <p className=" mb-1 mt-8">ພາກ <span className="text-red-500">*</span></p>
           <Field disabled={isSubmitting || loading} name="part_id" as="select" placeholder="ພາກ..." className="py-2 px-3 w-full bg-slate-100 rounded-lg border" >
            <option value="" disabled>--- ເລືອກພາກ ---</option>
            {part.map((item, index) => <option key={index} value={item.pUuid}>{item.pName}</option>)}
           </Field>
           <ErrorMessage name="part_id" component="div" className="text-red-500"/>
           {/* subject_id */}
           <p className=" mb-1 mt-8">ວິຊາ <span className="text-red-500">*</span></p>
           <Field disabled={isSubmitting || loading} name="subject_id" as="select" placeholder="ວິຊາ..." className="py-2 px-3 w-full bg-slate-100 rounded-lg border" >
            <option value="" disabled>--- ເລືອກວິຊາ ---</option>
            {subject.map((item, index) => <option key={index} value={item.subUuid}>{item.subName}</option>)}
           </Field>
           <ErrorMessage name="subject_id" component="div" className="text-red-500"/>


           <div className="w-full h-20 flex justify-center items-center gap-4 mt-20 mb-20">
            <div onClick={() => navigate(-1)} disabled={isSubmitting} className="bg-gray-400 text-white font-bold border shadow-sm rounded-lg py-2 px-4 min-w-20 hover:cursor-pointer hover:opacity-80">ຍົກເລີກ</div>
            <button disabled={isSubmitting} type="submit" className="bg-blue-400 text-white font-bold border shadow-sm rounded-lg py-2 px-4 min-w-20 flex justify-center items-center gap-2 hover:opacity-80"><Loading show={isSubmitting || loading}/>ບັນທຶກ</button>
           </div>
         </Form>
       )}
     </Formik>

        </div>
      </div>
    </Sidebar>
  );
};

export default AddClassDetail;
