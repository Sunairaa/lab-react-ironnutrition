import { useState } from "react";
import { Divider, Input } from 'antd';

// Iteration 5
function SearchFoods(filterSearchFoods) {
    const [search, setNewSearch] = useState("");
    const handleSearchInput = (e) => {
        setNewSearch(e.target.value)
        console.log(e.target.value);
    }
    return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={search} type="text" onChange={handleSearchInput} />
    </>
  );
}

export default SearchFoods;