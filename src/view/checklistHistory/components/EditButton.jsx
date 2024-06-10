import React, { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import Modal from '../../../components/Modal';
import { setMaxText, timeFormatter } from '../../../helpers';
import { UpdateChecklistApi } from '../../../api/checklist';
import Swal from "sweetalert2";

const EditButton = ({item}) => {

    const [initData, setInitData] = useState(item);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState((item?.status) === 1);
    const [reason, setReason] = useState(item?.reson);

    const handleSubmit = async () => { 
        setLoading(true);
        const data = {
            status: status ? 1 : 0,
            reson: reason,
        }
        const response = await UpdateChecklistApi(item.chUuid, data);
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
            text: "ແກ້ຂໍ້ມູນສຳເລັດ",
            icon: "success",
          });
        setInitData(prev => ({
            ...prev,
            status: (status) ? 1 : 0,
            reson: reason
        }))
        setLoading(false);
        setIsModalOpen(false);
    }

    const handleRadioChange = (e) => {
        // convert from "true" or "false" to boolean
        const value = (e.target.value) === "true";
        setStatus(value);
    }


    useEffect(() => {
        if(status === true){
            setReason("")
        }
    }, [status])

  return (
    <>
            <div onClick={() => setIsModalOpen(true)} className={`cursor-pointer w-full h-full text-sm text-gray-600 text-center ${(item?.hourAt == "1") ? "border-l-2 border-green-400" : "border-r-2 border-green-400"} ${(initData?.status === 1) ? "bg-green-50" : "bg-red-50"}`}>
                <p>{timeFormatter(item?.date)}</p>
                <p>h {item?.hourAt}</p>
                {(initData?.status === 1) && (
                    <p className="font-semibold text-gray-900">ມາ</p>    
                )}
                {(initData?.status === 0) && (
                    <p className="font-semibold text-red-900">ຂາດ</p>    
                )}
                <p className="text-[10px]">{setMaxText(initData?.reson, 10)}</p>
            </div>
            <Modal title="ແກ້ໄຂຂໍ້ມູນ" open={isModalOpen} onSubmit={handleSubmit} onCanCel={() => setIsModalOpen(false)} loading={loading} >
                    <div className='flex justify-between mt-8'>
                        <p>ວັນທີ:</p>
                        <p>{timeFormatter(item?.date)}</p>
                    </div>
                    <div className='flex justify-between mt-2'>
                        <p>ຊົ່ວໂມງ:</p>
                        <p>{item?.hourAt}</p>
                    </div>
                    <div className='flex justify-between my-8 bg-gray-100 rounded-md'>
                        <label className="text-sm flex justify-center items-center gap-2 w-full h-full cursor-pointer hover:bg-gray-300 rounded-md text-green-900 py-2">
                            ມາ
                            <input type="radio" name={"status"} value={true} onChange={handleRadioChange} defaultChecked={(status === true) ? true : false} disabled={loading}/>
                        </label>
                        <label className="text-sm flex justify-center items-center gap-2 w-full h-full cursor-pointer hover:bg-gray-300 rounded-md text-red-600 py-2">
                            ຂາດ
                            <input type="radio" name={"status"} value={false} onChange={handleRadioChange} defaultChecked={(status === false) ? true : false} disabled={loading}/>
                        </label>
                    </div>
                    <div className='flex flex-col mt-4'>
                        <label>ເຫດຜົນ</label>
                        <input
                            disabled={(status === true) || loading}
                            type="text"
                            className="border border-gray-400 rounded-md px-2 py-1 disabled:opacity-30 w-full mt-2"
                            onChange={(e) => setReason(e.target.value)}
                            value={reason}
                        />
                    </div>
            </Modal>
    </>
  )
}

export default EditButton