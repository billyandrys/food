import { GET_ALL_RECIPES } from 'redux/actions.js';

const initialState = {
    recipes: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_RECIPES:
            // console.log(action.payload)
            return {
                ...state,
                recipes: action.payload.results.map(recipe => {
                    return {
                        id: recipe.id,
                        title: recipe.title,
                        image: recipe.image,
                        diets: recipe.diets,
                        summary: recipe.summary,
                        dishTypes: recipe.dishTypes,
                        healthScore: recipe.healthScore,
                        spoonacularScore: recipe.spoonacularScore,
                        analyzedInstructions: recipe.analyzedInstructions
                    }
                })
            }
        default:
            return { ...state };
    }
}

export default rootReducer;
