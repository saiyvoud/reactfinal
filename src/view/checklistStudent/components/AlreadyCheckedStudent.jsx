import React from 'react'

const AlreadyCheckedStudent = ({show = false, selectedDate = ""}) => {
  return (
    show &&
    <div className='w-full text-center mt-8 mb-4 text-xl text-red-600'>ວັນທີ {selectedDate} ໝາຍຂາດນັກສຶກສາແລ້ວ</div>
  )
}

export default AlreadyCheckedStudent