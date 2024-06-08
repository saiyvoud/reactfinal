import { DeleteOutline } from '@mui/icons-material'
import React from 'react'
import Swal from "sweetalert2";

const DeleteButton = ({id = "", onSuccess = () => {}, deleteApi = async (id) => {}}) => {


    const deleteData = async () => {
        const response = await deleteApi(id);
        if(!response){
            Swal.fire({
                title: "ຜິດພາດ",
                text: "ບໍ່ສາມາດລົບຂໍ້ມູນໄດ້",
                icon: "error",
              });
              return;
        }

        Swal.fire({
            title: "ສຳເລັດ",
            text: "ລົບຂໍ້ມູນສຳເລັດ",
            icon: "success",
          });
        onSuccess();
        return;
    }

    const comfirmDelete = async () => {
        Swal.fire({
            title: "ລົບຂໍ້ມູນ?",
            text: "ທ່ານຕ້ອງການທີ່ຈະລົບຂໍ້ມູນແທ້ບໍ່!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "ຕົກລົງ",
            cancelButtonText: "ຍົກເລີກ",
            reverseButtons: true,
            preConfirm: async () => {
              return await deleteData();
            },
          })
    }

  return (
    <button onClick={comfirmDelete}>
        <DeleteOutline/>
    </button>
  )
}

export default DeleteButton