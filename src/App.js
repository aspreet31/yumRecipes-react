// import { BrowserRouter,Routes,Route } from 'react-router-dom';
import "./App.css";
import { Box } from "@mui/material";
import {NavBar,Feed,Footer,Recipes,SearchFeed,RecipeDetail,ShowMore} from "./components"
import { BrowserRouter,Routes,Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Box>
      <NavBar />
      <Routes>
        <Route index element={<Feed/>}/>
        <Route path="/feed" element={<Feed/>}/>
      <Route path='/search/:searchTerm'  element={<SearchFeed/>}/>
      <Route path='/recipes'  element={<Recipes/>}/>
      <Route path='/more/:selectedCategory'  element={<ShowMore/>}/>
      <Route exact path="/recipeDetail/:id" element={<RecipeDetail/>}/>
      </Routes>
      <Footer/>
    </Box>
    </BrowserRouter>
  );
}

export default App;
