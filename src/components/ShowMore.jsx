import React, { useEffect,useState } from 'react'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import CategoryBox from './CategoryBox';
import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
const Recipes = () => {
    const {selectedCategory}= useParams();
const [categoryBox, setCategoryBox] = useState([]);
useEffect(()=>{
    fetchFromAPI(`&mealType=${selectedCategory}`).then((data)=>{
setCategoryBox(data.hits)
    })
})
  return (
   <Box minHeight="95vh" >
   <Typography variant='h5' marginLeft="15px">More results have shown :</Typography>
     <CategoryBox categoryBox={categoryBox} count={20}/>
   </Box>
  )
}

export default Recipes
