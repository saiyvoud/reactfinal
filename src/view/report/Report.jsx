import React from 'react'
import Sidebar from '../../components/Sidebar'
import ReportList from './components/ReportList'

const Report = () => {
  return (
    <Sidebar>
      <div className="px-10 py-5 ">
        <div className="w-full flex items-center justify-between mb-3">
          <h1>Report</h1>
          <div>
          </div>
        </div>
        <ReportList />

      </div>
    </Sidebar>
  )
}

export default Report