import React from 'react'

import Sidebar from "../../components/Sidebar";

import CardTable from './components/CardTable';

export default function TableAll() {
    return (
        <Sidebar>
            <div className="px-10 py-5 ">
                <div className="w-full flex items-center justify-between mb-3">
                    <h1>ຕາຕະລາງ</h1>

                </div>
                <CardTable />

            </div>
        </Sidebar>
    )
}
