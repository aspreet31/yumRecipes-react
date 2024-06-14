import React, { useEffect, useState } from "react";
import { Box, Button, Card, CardMedia, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { fetchFromAPIRecipe } from "../utils/fetchFromAPI";
const RecipeDetail = () => {
  const { id } = useParams();
  const [Data, setData] = useState([]);
  const [Lines, setLines] = useState([]);
  useEffect(() => {
    fetchFromAPIRecipe(`${id}`).then((data) => {
      setData(data.recipe);
      setLines(data.recipe.ingredientLines);
    });
  }, [id]);

  return (
    <Box minHeight="76vh">
      <Box
        display="flex"
        sx={{ flexDirection: { xs: "column", sm: "column", md: "row" } }}
        justifyContent="center"
        marginTop="40px"
      >
        <Box
          sx={{
            justifyContent: { xs: "center", sm: "center" },
            display: "flex",
          }}
        >
          <Card
            sx={{
              display: "flex",
              width: { xs: "200px", sm: "200px", md: "330px" },
              height: { xs: 200, sm: 200, md: 300 },
              boxShadow: "none",
              borderRadius: 0,
            }}
          >
            <CardMedia
              image={Data.image}
              sx={{
                width: { xs: "200px", sm: "200px", md: "330px" },
                height: { xs: 200, sm: 200, md: 300 },
              }}
            />
          </Card>
        </Box>
        <Box marginLeft="20px"  textAlign="center">
          <Typography
            variant="h5"
            fontWeight="bold"
            marginBottom="10px"
          >
            {Data.label}
          </Typography>
          <Box>
            <Typography variant="body1"><b>Meal Type :</b> {Data.mealType}</Typography>
            <Typography variant="body1">
              <b>Cuisine Type :</b> {Data.cuisineType}
            </Typography>
            <Typography variant="body1"><b>Calories :</b> {Data.calories}</Typography>
            {/* <span>    Ingredients : {Data.ingredients.length}</span> */}
          </Box>
          <Box>
            {Data.dietLabels &&
              Data.dietLabels.map((item) => {
                return <Button className="btnDietLabels">{item}</Button>;
              })}
          </Box>
          <Typography variant="h5" fontWeight="bold" marginTop="10px">
            Ingredients
          </Typography>
          <Box>
            {Lines &&
              Lines.map((item) => {
                return <p>{item}</p>;
              })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default RecipeDetail;
