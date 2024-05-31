import React, { useEffect, useState } from "react";
import Sidebar from '../../components/Sidebar'
import AccessList from './components/AccessList'
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { GetAllTeacherApi } from "../../api/teacher";
import Loading from "../../components/Loading";
import { GetAllMajorApi } from "../../api/major";
import { GetAllUserApi } from "../../api/user";
import Empty from "../../components/Empty";
import SearchBar from "../../components/SearchBar";

function AccessRight() {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [initDataForSearch, setInitDataForSearch] = useState([]);
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        const response = await GetAllUserApi();
        if(!response){
          Swal.fire({
            title: "ຜິດພາດ",
            text: "ບໍ່ສາມາດດິງຂໍ້ມູນຜູ້ໃຊ້ໄດ້ ກະລຸນາເຂົ້າສູ່ລະບົບອີກຄັ້ງ",
            icon: "error",
          });
          setLoading(false);
          //navigate("/login");
          return;
        }
        console.log("user data::=>");
        console.log(response);
        setData(response)
        setInitDataForSearch(response)
        setLoading(false);
      }
  
      fetchData();
    }, [])
  


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
                <SearchBar placeholder={"ຄົ້ນຫາສິດຜູ້ເຂົ້າໃຊ້..."} data={initDataForSearch} onSearch={(result) => setData(result)} />
                <div className="mt-8"></div>
                <AccessList data={data} loading={loading}/>
                <Loading show={loading} className="mt-4" />
                <Empty show={data.length == 0 && !loading} />
            </div>
        </Sidebar>
    )
}

export default AccessRight