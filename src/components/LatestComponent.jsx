import React, { useEffect, useState } from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import CategoryCard from "./CategoryCard";
import { useNavigate } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
const LatestComponent = ({ Cuisine }) => {
  const [Latest, setLatest] = useState([]);
  useEffect(() => {
    fetchFromAPI(`&cuisineType=${Cuisine}`).then((data) =>
      setLatest(data.hits)
    );
  }, [Cuisine]);
  const navigate = useNavigate();
  return (
    <Box>
      <Typography variant="h4" sx={{ marginLeft: "25px", fontSize: "bold" }}>
        Latest {Cuisine} Food
      </Typography>
      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        marginTop="40px"
        gap={2}
      >
        {Latest &&
          Latest.slice(0, 6).map((item, idx) => (
            <Box key={idx}>
              <CategoryCard categoryDetail={item} />
            </Box>
          ))}
      </Stack>
      <Box textAlign="center"   marginTop="10px">
      <Button
        className="btn"
        sx={{ color: "white", background: "#d50000", borderRadius: "8px" }}
        onClick={() => {
          navigate(`/search/${Cuisine}food`);
        }}
      >
        Show More
      </Button>
      </Box>
    </Box>
  );
};

export default LatestComponent;
