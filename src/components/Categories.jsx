import { categories } from "../utils/constant";
import React from "react";
import { Box, Button } from "@mui/material";
const Categories = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Box sx={{ textAlign: "center", marginTop: "30px" }}>
      {categories.map((category) => {
        return (
          <Button
          className="btn"
            key={category.name}
            onClick={() => setSelectedCategory(category.name)}
            sx={{
              borderRadius: "8px",
              color: category.name === selectedCategory ? "white" : "black",
              background:
                category.name === selectedCategory && "#d50000",
                marginRight:"5px"
            }}
          >
            <span>{category.name}</span>
            <span 
              style={{
                color: category.name === selectedCategory ? "white" : "#d50000",
              }}
            >
              {category.icon}
            </span>
          </Button>
        );
      })}
    </Box>
  );
};
export default Categories;
