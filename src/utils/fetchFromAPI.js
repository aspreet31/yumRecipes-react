const app_id = "a07ee136";
const app_key="1bba014dac8b38b74f1b970460483986	"
const Base_url = "https://api.edamam.com/api/recipes/v2";
export const fetchFromAPI = async (url) =>{
   const data= await fetch(`${Base_url}?type=public&app_id=${app_id}&app_key=${app_key}${url}`)
   const parseData = await data.json();
   return parseData;
};
export const fetchFromAPIRecipe = async (id) =>{
   const data= await fetch(`${Base_url}/${id}?type=public&app_id=${app_id}&app_key=${app_key}`)
   const parseData = await data.json();
   return parseData;
};
