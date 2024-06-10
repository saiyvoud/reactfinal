import React from 'react'
import Loading from '../../../components/Loading'
import { useNavigate } from 'react-router-dom';

const ChecklistActionButton = ({show = false, onSubmit = () => {}, onCancel = () => {}, loading = false, disable = false, selectedDropdownID = {}}) => {
  const navigate = useNavigate();
  return (
    <>
      {show &&
        <div className="w-full flex justify-between my-20">
            <div className='min-w-32 opacity-0' disabled></div>
            <div className="flex justify-center items-center gap-4">
            <button disabled={loading || disable} className="p-2 min-w-32 rounded-md bg-gray-400 text-white disabled:opacity-50" onClick={onCancel}>ຍົກເລີກ</button>
            <button disabled={loading || disable} className="p-2 min-w-32 rounded-md bg-blue-400 text-white flex justify-center items-center gap-2 disabled:opacity-50" onClick={onSubmit}><Loading show={loading}/>ບັນທືກ</button>
            </div>
            <button className="p-2 min-w-32 rounded-md bg-green-400 text-white" onClick={() => {navigate(`/checklistHistory/${selectedDropdownID.mUuid}/${selectedDropdownID.cUuid}/${selectedDropdownID.subUuid}/${selectedDropdownID.pUuid}`)}}>ເບີ່ງລາຍລະອຽດການເຊັກຊື່</button>
        </div>
      }
    </>
  )
}

export default ChecklistActionButton