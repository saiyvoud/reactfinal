import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import Loading from './Loading';

const Modal = ({children, open = false, onSubmit = () => {}, onCanCel = () => {}, loading = false, title = "Title"}) => {

  return (
    <>
         {
            ((open) && (
                <>
                <div id="overlay" className="absolute top-0 left-0  w-screen h-screen z-[99]" style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
                    <div id="modal" className="w-full h-full flex justify-center items-center px-6 py-6" onClick={onCanCel}>
                        <div className="w-80 min-h-48 bg-white rounded-lg shadow-md px-4 py-2" onClick={(e) => e.stopPropagation()}>
                            <div className=" w-full grid grid-cols-3 items-center">
                                <div className="col-start-2 flex justify-center">
                                    <p className="text-gray-800">{title}</p>
                                </div>
                                <div className="flex justify-end">
                                    <button className="p-1 rounded-md hover:bg-gray-200" onClick={onCanCel}>
                                    <CloseIcon />
                                    </button>
                                </div>
                            </div>
                            <div className='w-full min-h-20'>
                                {children}
                            </div>
                            <div className='w-full flex justify-center gap-4 mt-8 mb-2'>
                                <button disabled={loading} className='py-2 w-full mt-4 rounded-md bg-red-400 text-white hover:opacity-80 disabled:opacity-50' onClick={onCanCel}>ຍົກເລີກ</button>
                                <button disabled={loading} className='py-2 w-full mt-4 rounded-md bg-blue-400 text-white hover:opacity-80 disabled:opacity-50 flex justify-center items-center gap-2' onClick={onSubmit}><Loading show={loading}/>ບັນທືກ</button>
                            </div>
                        </div>
                    </div>
                </div>
                </>
            ))
         }
    </>
  )
}

export default Modal