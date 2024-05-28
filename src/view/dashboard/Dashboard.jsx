import React from "react";
import CardDashboard from "./components/CardDashboard";
import Sidebar from "../../components/Sidebar";
import UserChart from "./components/UserChart";
import LineCharts from "../../components/LiveChart";
import TableList from "../../components/TableList"
import logo from "../../assets/sousaka.jpeg";
const Dashboard = () => {
  return (
    <Sidebar>
      <div className="px-10  bg-gray-100 h-full">
        <CardDashboard />
        <div className="grid grid-cols-2 gap-2 ">
          <div className="bg-white shadow-lg rounded-lg h-[400px]" >
            <UserChart />
          </div>
           <div className="bg-white shadow-lg rounded-lg h-[400px]">
           {/* <LineCharts /> */}
           </div>

        </div>
        <div className="py-4">
        <TableList/>
        </div>
        

      </div>
    </Sidebar>
  );
};

export default Dashboard;
