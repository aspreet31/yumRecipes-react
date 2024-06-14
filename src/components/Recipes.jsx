import React, { useEffect,useState } from 'react'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import CategoryBox from './CategoryBox';
import { Box, Typography } from '@mui/material';

const Recipes = () => {
const [categoryBox, setCategoryBox] = useState([]);
useEffect(()=>{
    fetchFromAPI(`&q=recipes`).then((data)=>{
setCategoryBox(data.hits)
    })
})
  return (
   <Box minHeight="95vh" >
   <Typography variant='h5' marginLeft="15px">All Recipes</Typography>
     <CategoryBox categoryBox={categoryBox} count={20}/>
   </Box>
  )
}

export default Recipes
