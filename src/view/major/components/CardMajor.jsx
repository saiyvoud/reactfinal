import React from "react";
import bg from "../../../assets/Swatch base.png";
import bg1 from "../../../assets/Swatchbase2.png";
import bg2 from "../../../assets/Swatchbase3.png";
const CardMajor = ({ data }) => {
  return (
    <div>
      <div className="w-full grid grid-cols-2 gap-5  py-2">
        <>
          {data.map((item, index) => (
            <div className="w-full relative  px-5" key={index}>
              <div className=" absolute top-6  left-[25%]  text-blue-400">
                <p className="text-xl">{item.mName}</p>
              </div>
              <div className="w-full">
                <img src={bg}></img>
              </div>
            </div>
          ))}
        </>
      </div>
    </div>
  );
};

export default CardMajor;
