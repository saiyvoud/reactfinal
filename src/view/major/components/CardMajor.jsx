import React from "react";
import bg from "../../../assets/Swatch base.png";
import bg1 from "../../../assets/Swatchbase2.png";
import bg2 from "../../../assets/Swatchbase3.png";
import { NavLink } from "react-router-dom";
import { ModeOutlined } from "@mui/icons-material";
import DeleteButton from "../../../components/DeleteButton";
import { DeleteMajorApi } from "../../../api/major";
const CardMajor = ({ data, onDeleteSuccess }) => {
  return (
    <div>
      <div className="w-full grid grid-cols-2 gap-5 gap-y-10  py-2">
        <>
          {data.map((item, index) => (
            <div className="w-full  px-5" key={index}>
              <div className="w-full min-h-40 bg-gray-100 rounded-md relative group">
                  <div className="w-full min-h-10 flex justify-center items-center">
                    <p className="text-blue-400 text-xl">{item.mName}</p>
                  </div>
                  <div className="w-full h-32">
                    <img className="w-full h-full object-cover" src={bg} />
                  </div>
                  <div className="w-20 h-10 absolute top-0 right-0 flex justify-center items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <NavLink to={`/major/edit/${item.mUuid}`}>
                        <ModeOutlined />
                      </NavLink>
                      <DeleteButton id={item.mUuid} onSuccess={onDeleteSuccess} deleteApi={DeleteMajorApi}/>
                  </div>
              </div>
            </div>
          ))}
        </>
      </div>
    </div>
  );
};

export default CardMajor;
