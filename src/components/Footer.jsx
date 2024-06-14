import React from 'react';
import { Container, Typography } from '@mui/material';
import LocalDining from '@mui/icons-material/LocalDining';
const Footer = () => {
  return (
    <footer sx={{ mt: 'auto', py: 6}}>
    <Container maxWidth="lg" sx={{marginTop:"20px"}} >
    <Typography color="black" variant="h5" sx={{fontWeight:"bold",textAlign:"center"}}>
      <LocalDining sx={{color:"#d50000"}}/>
      YumRecipes
    </Typography>
      <Typography variant="body2" color="text.secondary" align="center">
        © 2024 Aspreet kaur. All rights reserved.
      </Typography>
    </Container>
  </footer>
  )
}

export default Footer
