import React from 'react'
import Sidebar from '../../components/Sidebar'
import AccessList from './components/AccessList'

function AccessRight() {
    return (
        <Sidebar>
            <div className="px-10 py-5 ">
                <div className="w-full flex items-center justify-between mb-3">
                    <h1>ຄົນທີ່ມີສິດໃນການເຂົ້າເຖິງເວັບແອດມິນ</h1>
                    <div>
                        <button
                            onClick={() => (window.location.href = "/addMajor")}
                            className="bg-blue-400 text-white font-bold border shadow-sm rounded-lg p-2"
                        >
                            ເພີ່ມສິດຜູ້ໃຊ້
                        </button>
                    </div>
                </div>
                <AccessList />
            </div>
        </Sidebar>
    )
}

export default AccessRight