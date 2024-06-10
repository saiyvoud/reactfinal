import React, { forwardRef, useImperativeHandle, useState } from "react";
import ChecklistTableRow from './ChecklistTableRow';
import { AddManyChecklistApi } from '../../../api/checklist';
import { useNavigate } from 'react-router-dom';

const ChecklistTable = forwardRef(({data, selectedDate, disable}, ref) => {

    const arrayRefsChildGetChecklistFunc = [];

    const getChecklists = () => {
        let arrayChecklist = [];
        arrayRefsChildGetChecklistFunc.forEach((ref) => {
          const checklist = ref.current.getChecklist();
          arrayChecklist = [...arrayChecklist, ...checklist];
        });
        return arrayChecklist;
      };
      
    useImperativeHandle(ref, () => ({
        getChecklists
    }));

  return (
    <div className='w-full mt-8'>
        <table className='w-full h-full'>
            <thead>
            <tr className=" bg-light-green-300 text-white font-normal">
                <th className="py-2">ລະຫັດນັກສຶກສາ</th>
                <th>ຊື່ ແລະ ນາມສະກຸນ</th>
                <th>ສາຂາ</th>
                <th>ວິຊາ</th>
                <th>ພາກ</th>
                <th>ສົກຮຽນ</th>
                <th>ເທີມ</th>
                <th>ອາຈານ</th>
                <th>ສະຖານະຊົ່ວໂມງ 1</th>
                <th>ໝາຍເຫດຊົ່ວໂມງ 1</th>
                <th>ສະຖານະຊົ່ວໂມງ 2</th>
                <th>ໝາຍເຫດຊົ່ວໂມງ 2</th>
                <th>ວັນທີ</th>
            </tr>
            </thead>
            <tbody>
                {
                    data.map((item, index) => {
                        // hook every child with ref and store them in "arrayRefsChildGetChecklistFunc", when submit is pressed, we call child get checklist function in order to get all checklist
                        const ref = React.createRef();
                        arrayRefsChildGetChecklistFunc.push(ref);
                        return <ChecklistTableRow ref={ref} item={item} key={index} disable={disable} selectedDate={selectedDate} />
                    })
                        
                }
            </tbody>
        </table>


    </div>
  )
})

export default ChecklistTable