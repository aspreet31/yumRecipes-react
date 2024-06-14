import React, { useState } from "react";
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import { AppBar, Toolbar,Box,Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
const NavBar = () => {
  const navigate = useNavigate();
  const [Icon, setIcon] = useState("Home");
  return (
    <React.Fragment>
      <AppBar sx={{ background: "#fff" }}  position="sticky" elevation={0}>
        <Toolbar sx={{display:"flex",flexDirection:{xs:"column",sm:"row",md:"row"},justifyContent:"space-between",marginRight:"40px"}} >
        <Typography color="black" variant="h5" sx={{fontWeight:"bold"}}>
      <LocalDiningIcon sx={{color:"#d50000"}}/>
      YumRecipes
    </Typography>
          <Box
          sx={{color:"black",fontWeight:"bold"}}
          >
           <Button className="btn" onClick={()=> {setIcon("Home"); navigate("/")}} sx={{background:Icon==="Home" &&"#d50000",marginRight:"5px",color:Icon==="Home" ?"#fff":"black",borderRadius:"25px"}} >Home</Button>
           <Button className="btn" onClick={()=>{setIcon("Recipes"); navigate("/recipes")}} sx={{background:Icon==="Recipes"&&"#d50000" ,color:Icon==="Recipes"?"#fff":"black",borderRadius:"25px"}}>Recipes</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default NavBar;
