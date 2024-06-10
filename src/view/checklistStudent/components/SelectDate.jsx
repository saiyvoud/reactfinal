import React from 'react'

const SelectDate = ({onChange = (date) => {}, defalutValue = null}) => {

    const handleChange = (e) => {
        onChange(e.target.value)
    }

  return (
    <>
        <div className='w-full grid grid-cols-4 gap-4 mt-8'>
            <div className='flex flex-col col-start-4'>
                <label>ວັນທີ</label>
                <input defaultValue={defalutValue} type="date" className="border border-gray-300 rounded-md px-4 py-2" onChange={handleChange} />
            </div>
        </div>
    </>
  )
}

export default SelectDate