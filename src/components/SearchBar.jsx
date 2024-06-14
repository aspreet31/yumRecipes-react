import { Typography, Box, Paper, IconButton } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import bgSearchBox from "../assets/bgSearchBox.jpg";
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const onhandleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };
  return (
    <Box
      className="bgSearchBox"
      sx={{
        display: "flex",
        justifyContent: "center",
        backgroundImage: `url(${bgSearchBox})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: { xs: "30vh", sm: "40vh", md: "52vh" },
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h4" sx={{ color: "white" }}>
        Your Desired Dish?
      </Typography>
      <Paper
        onSubmit={onhandleSubmit}
        component="form"
        sx={{
          width: { xs: "260px", sm: "300", md: "350px" },
          marginTop: "20px",
          display: "flex",
          flexDirection: "row",
          height: "40px",
        }}
      >
        <input
          className="search-bar"
          type="text"
          value={searchTerm}
          placeholder="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <IconButton type="submit" sx={{ p: "0px", color: "blue" }}>
          <SearchIcon
            sx={{
              color: "white",
              height: "40px",
              width: "35px",
              background: "#d50000",
            }}
          />
        </IconButton>
      </Paper>
      <Typography variant="subtitle1" color="white">
        search any recipe
      </Typography>
    </Box>
  );
};

export default SearchBar;
