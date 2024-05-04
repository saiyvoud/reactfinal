import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

const UserChart = () => {
  return (
    <div className="flex items-center">
      <PieChart
        series={[
          {
            data: [
             
              { id: 1, value: 110, color: "#66BB6A" },
              { id: 2, value: 28, color: "#FFC107" },
              { id: 3, value: 10, color: "#EF5350" },
              { id: 4, value: 2, color: "#AB47BC" },
            ],
          },
        ]}
        width={450}
        height={350}
      />
    </div>
  );
};

export default UserChart;
