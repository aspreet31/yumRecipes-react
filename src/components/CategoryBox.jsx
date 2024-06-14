import React from "react";
import {Stack ,Box} from '@mui/material'
import CategoryCard from "./CategoryCard";
const CategoryBox = ({categoryBox,count}) => {
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      justifyContent="center"
      marginTop="40px"
      gap={2}
    >
      { categoryBox && categoryBox.slice(0,count).map((item, idx) => (
        <Box key={idx}  sx={{
          width: { xs: "100px", sm: "100px", md: "230px" }}} >
          <CategoryCard categoryDetail={item} sx={{display:"flex",flexWrap:"wrap"}}/>
        </Box>
      ))}
    </Stack>
  );
};

export default CategoryBox;
