import React, { useState } from 'react'
import userImg from '../../../assets/images/user.png'

import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
function AccessList() {
    const pageNum = [1, 2, 3, 4, 5]
    const [pageNo, setPageNo] = useState(1);
    return (
        <div>
            <div className=' flex flex-col gap-y-2 mb-3'>
                <div className=' grid grid-cols-[2fr,1fr,1fr,1fr] items-center'>
                    <div className=' flex items-center'>
                        <div className=' w-14 border-4 mr-3 rounded-full border-white' >
                            <img src={userImg} alt="" />
                        </div>
                        <h4 className=' text-[18px] font-semibold'>Saysamone dongchan</h4>
                    </div>
                    <p>020 9992 3320</p>
                    <p className=' text-start'>Username</p>
                    <p className=' text-start'>Admin</p>
                </div>
                <div className=' grid grid-cols-[2fr,1fr,1fr,1fr] items-center'>
                    <div className=' flex items-center'>
                        <div className=' w-14 border-4 mr-3 rounded-full border-white' >
                            <img src={userImg} alt="" />
                        </div>
                        <h4 className=' text-[18px] font-semibold'>Bobby Thammavong</h4>
                    </div>
                    <p>020 9992 3320</p>
                    <p className=' text-start'>Username</p>
                    <p className=' text-start'>Staff</p>
                </div>
                <div className=' grid grid-cols-[2fr,1fr,1fr,1fr] items-center'>
                    <div className=' flex items-center'>
                        <div className=' w-14 border-4 mr-3 rounded-full border-white' >
                            <img src={userImg} alt="" />
                        </div>
                        <h4 className=' text-[18px] font-semibold'>Mackie Inthanin</h4>
                    </div>
                    <p>020 9992 3320</p>
                    <p className=' text-start'>Username</p>
                    <p className=' text-start'>Manager</p>
                </div>
            </div>
            <div className=' flex items-center w-full gap-5 text-[18px] justify-center'>
                <FaAnglesLeft />
                <div className=' flex'>
                    {pageNum.map((page, id) => (
                        <div key={id}
                            className=' mx-5'>
                            {page === pageNo ? <span className=' border border-blue-500 rounded px-2'>{pageNum[pageNo - 1]}</span> : <span>{page}</span>}
                        </div>
                    ))}
                </div>
                <FaAnglesRight />
            </div>
        </div>
    )
}

export default AccessList