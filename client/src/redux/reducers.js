import {
  FILTER_BY_CREATED,
  FILTER_BY_HEALTHSCORE,
  GET_ALL_RECIPES,
  ORDER_BY_NAME,
  GET_NAME_RECIPE,
  CREATE_RECIPE,
  GET_TYPE_DIETS,
  GET_ID_RECIPE,
  MESSAGE_ERROR
} from "redux/actions.js";
import { GET_RECIPES_NAME } from "redux/actions.js";
import { notcreated } from '../services'

const ALLRECIPES = "All";
const ORDER_ASC = "asc";
const FILTERCREATEDDB = "created";

const initialState = {
  recipes: [],
  allRecipesCopy: [],
  searchRecipe: [],
  typeDiests:[],
  detail: [],
  error:''
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_RECIPES:
      return {
        ...state,
        recipes: action.payload,
        allRecipesCopy: action.payload,
      };

    case GET_RECIPES_NAME: {
      return {
        ...state,
        recipes: action.payload,
      };
    }
    case FILTER_BY_HEALTHSCORE: {
      const allRecipes = state.allRecipesCopy;

      console.log(action.payload + "payload");

      const scoresFilter =
        action.payload === ALLRECIPES
          ? allRecipes
          : allRecipes.filter(
              ({ healthScore }) => healthScore === Number(action.payload)
            );
      console.log(scoresFilter + " payload filter");

      return {
        ...state,
        recipes: scoresFilter,
      };
    }

    case FILTER_BY_CREATED: {
      const allRecipes = state.allRecipesCopy;
      let createdFilter =
        action.payload === FILTERCREATEDDB
          ? allRecipes.filter(({ createdAt }) => createdAt)
          : allRecipes;
          if(!createdFilter.length){ createdFilter = notcreated }
      return {
        ...state,
        recipes: createdFilter,
      };
    }
    case ORDER_BY_NAME: {
      const allRecipes = state.allRecipesCopy;
      let sortAsc =
        action.payload === ORDER_ASC
          ? allRecipes.sort((a, b) => {
              return a.name.localeCompare(b.name);
            })
          : allRecipes.sort((a, b) => {
              return  b.name.localeCompare(a.name);
            });
      return {
        ...state,
        recipes: sortAsc,
      };
    }
    case GET_NAME_RECIPE: { 
      return {
        ...state,
        recipes: action.payload,
      };
    }
    case CREATE_RECIPE:{
      return {
        ...state
      }
    }
    case GET_TYPE_DIETS:{
        return {
          ...state,
          typeDiests:action.payload
        }
    }

    case GET_ID_RECIPE:{
      return {
            ...state,
            detail:action.payload
      }
    }
    case MESSAGE_ERROR:{
      return{
        ...state,
        error:action.payload
      }
    }

    default:
      return state;
  }
};

export default rootReducer;
