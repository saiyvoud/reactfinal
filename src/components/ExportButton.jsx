import React from "react";
import { CSVLink, CSVDownload } from "react-csv";

const ExportButton = ({ data }) => {
  return (
    <CSVLink data={data}>
      <button className=" me-3 text-blue-500 font-bold border shadow-sm rounded-lg p-2">
        Export Excel
      </button>
    </CSVLink>
  );
};

export default ExportButton;
