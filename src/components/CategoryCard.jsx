import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
const CategoryCard = ({
  categoryDetail: {
    recipe: { label, image,uri },_links: {self :{href}}}
}) => {
  const navigate = useNavigate();

  const pattern = /\/api\/recipes\/v2\/([a-f0-9]+)\?/;
  const match = href.match(pattern);
  const extractedValue = match[1];

  return (
    <Card
      sx={{
        width: { xs: "100px", sm: "100px", md: "230px" },
        boxShadow: "none",
        borderRadius: 0,
      }}
      className="card-hover"
      onClick={()=>{
        navigate(`/recipeDetail/${extractedValue}`);
      }}
    >
    
        <CardMedia
          image={image}
          sx={{ width: { xs: "100px", sm: "100px", md: "230px" }, height: {xs:100,sm:100,md:180} }}
        />
   
      <CardContent>
        <Typography variant="body2">{label.slice(0,25)}..</Typography>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
