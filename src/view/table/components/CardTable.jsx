import React from 'react'

import bg from "../../../assets/Swatch base.png"
import bg1 from "../../../assets/Swatchbase2.png"
import bg2 from "../../../assets/Swatchbase3.png"

export default function CardTable() {
    return (
        <div>
            <div className='w-full grid grid-cols-2 gap-5  py-2'>

                <div className='w-full relative px-5 cursor-pointer ' onClick={() => window.location.href = "/addTableStudy"}>
                    <div className=' absolute top-6  left-[25%]  text-blue-400'>
                        <p className='text-xl'>
                            ຕາຕະລາງການຮຽນ - ການສອນ
                        </p>
                    </div>
                    <div className='w-full'>
                        <img src={bg1}></img>
                    </div>
                </div>
                <div className='w-full relative px-5 cursor-pointer' onClick={() => window.location.href = "/addTableRoom"}>
                    <div className=' absolute top-6  left-[25%]  text-blue-400'>
                        <p className='text-xl'>
                            ຕາຕະລາງຫ້ອງຮຽນ
                        </p>
                    </div>
                    <div className='w-full'>
                        <img src={bg2}></img>
                    </div>
                </div>

            </div>
        </div>
    )
}
