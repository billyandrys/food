const GET_ALL_RECIPES = 'GET_ALL_RECIPES';
const API_KEY = env.API_KEY;
const apiURL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&offset=0&number=100`

export const getAllRecipes = () => {
  return (dispatch) => {
      fetch(apiURL)
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: GET_ALL_RECIPES,
                payload: data.results
            })
        })
        .catch(err => console.log(err))
  }
}
