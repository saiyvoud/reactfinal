import { Search } from "@mui/icons-material";
import React, { useEffect, useState } from "react";

function searchInArray(data = [], search = "") {
  if (data.length <= 0) return [];
  if (search == "") return data;

  // Convert objects to strings and store them in an array
  const stringArray = data.map((obj) => JSON.stringify(obj));

  const found = [];

  for (let i = 0; i < stringArray.length; i++) {
    if (new RegExp(search, "i").test(stringArray[i])) {
      found.push(data[i]);
    }
  }

  return found;
}

const SearchBar = ({
  placeholder = "",
  data = [],
  loading = false,
  onSearch = () => {},
}) => {
  const [searchCriteria, setSearchCriteria] = useState("");

  function handleSearch() {
    if (data.length <= 0) return;
    const result = searchInArray(data, searchCriteria);
    onSearch(result);
  }

  return (
    <>
      <div className=" relative ">
        <input
          onChange={(e) => setSearchCriteria(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          type="text"
          placeholder={placeholder}
          className="py-2 px-10 w-full bg-slate-100 rounded-lg"
        />
        <div className="text-slate-400 absolute left-2 top-[6px]">
          <Search></Search>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
