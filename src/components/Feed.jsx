import React, { useEffect, useState } from "react";
import {SearchBar,Categories,CategoryBox,LatestComponent,HealthPreference} from "../components"
import { Box, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
const Feed = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("Breakfast");
  const [categoryBox, setCategoryBox] = useState([]);
  useEffect(() => {
    fetchFromAPI(`&mealType=${selectedCategory}`).then((data) =>
      setCategoryBox(data.hits)
    );
  }, [selectedCategory]);

  return (
    <Stack>
      <Box>
        <SearchBar />
        <Categories
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <CategoryBox categoryBox={categoryBox} count={12} />
        <Box textAlign="center" marginTop="10px">
          <Button
            variant="contained" className="btn"
            sx={{ color: "white", background: "#d50000", borderRadius: "8px" }}
            onClick={()=> navigate(`/more/${selectedCategory}`)}
          >
            Show more
          </Button>
        </Box>
        <LatestComponent Cuisine="American" />
        <LatestComponent Cuisine="Indian" />
        <LatestComponent Cuisine="Chinese" />
        <HealthPreference />
      </Box>
    </Stack>
  );
};

export default Feed;
