import React from "react";

const Empty = ({ show = false }) => {
  return (
    show && (
      <div className="w-full flex justify-center items-center my-4">
        ບໍ່ມີຂໍ້ມູນ
      </div>
    )
  );
};

export default Empty;
