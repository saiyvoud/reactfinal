

import React from 'react';
import Chart from 'react-apexcharts';

const LineCharts = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    values: [30, 40, 45, 50, 49, 60, 70],
  };
  const options = {
    chart: {
      id: 'basic-line',
    },
    xaxis: {
      categories: data.labels,
    },
  };

  const series = [
    {
      name: 'Line Chart',
      data: data.values,
    },
  ];

  return <Chart options={options} series={series} type="line" />;
};

export default LineCharts;