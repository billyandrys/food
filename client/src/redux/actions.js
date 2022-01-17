export const GET_ALL_RECIPES = 'GET_ALL_RECIPES';
const API_KEY = "a7a60c4cebe84d9da368cdfd1d422048";
const apiURL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&offset=0&number=100`

export const getAllRecipes = () => {
  return (dispatch) => {
      fetch(apiURL)
        .then(res => res.json()) // Javascript object notation
        .then(data => {
            dispatch({
                type: GET_ALL_RECIPES,
                payload: data
            })
        })
        .catch(err => console.log(err))
  }
}

// [object] {Object}
