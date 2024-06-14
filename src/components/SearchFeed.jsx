import { Typography,Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import CategoryBox from "./CategoryBox";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
const SearchFeed = () => {
    const [categoryBox, setCategoryBox] = useState([]);
    const { searchTerm } = useParams();
    useEffect(()=>{
fetchFromAPI(`&q=${searchTerm}`).then((data) =>{
    setCategoryBox(data.hits);
})
    },[searchTerm])
  return (
    <Box minHeight="95vh" >
      <Typography variant="h5" marginLeft="15px">
        Search Results for <span style={{ color: "#d50000" }}>{searchTerm}</span>
      </Typography>
      <Box>
        <CategoryBox categoryBox={categoryBox} count={18} />
      </Box>
    </Box>
  );
};

export default SearchFeed;
