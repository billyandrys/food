import axios from "axios";
import { servicesGetAllRecipes } from "../services";
import { servicesRecipeName, getDiets, pathRecipes } from "../services";
export const GET_ALL_RECIPES = "GET_ALL_RECIPES";
export const GET_RECIPES_NAME = "GET_RECIPES_NAME";
export const FILTER_BY_HEALTHSCORE = "FILTER_BY_HEALTHSCORE";
export const FILTER_BY_CREATED = "FILTER_BY_CREATED";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const GET_NAME_RECIPE = "GET_NAME_RECIPE";
export const GET_TYPE_DIETS = 'GET_TYPE_DIETS'
export const CREATE_RECIPE = 'CREATE_RECIPE'
export const GET_ID_RECIPE = 'GET_ID_RECIPE'
export const MESSAGE_ERROR = 'MESSAGE_ERROR'


export const getAllRecipes = () => {
  return (dispatch) => {
    fetch(servicesGetAllRecipes)
      .then((res) => res.json()) // Javascript object notation
      .then((data) => {
        dispatch({
          type: GET_ALL_RECIPES,
          payload: data,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const search = (name) => {
  return async (dispatch) => {
    try {
      const data = await axios(`${servicesRecipeName}${name}`);

      dispatch(setTypeData(data.data, GET_RECIPES_NAME));
    } catch (err) {
      console.log(err.response);
    }
  };
};


const setTypeData = (data, type) => {
  return {
    type: type,
    payload: data,
  };
};

export const filterRecipesByHealthScores = (payload) => {
  return {
    type: FILTER_BY_HEALTHSCORE,
    payload: payload,
  };
};

export function filterByCreatedAt(payload) {
  return {
    type: FILTER_BY_CREATED,
    payload: payload,
  };
}

export function orderByName(payload) {
  return {
    type: ORDER_BY_NAME,
    payload: payload,
  };
}

export function getNameRecipes(name, setErrorHandle) {
  return async (dispatch) => {
    try {
      const data = await axios.get(`${servicesRecipeName}${name}`);
      console.log(data.data);
      return dispatch(setTypeData(data.data, GET_NAME_RECIPE));
      
    } catch (error) {
      console.log(error.response.statusText )
       //.statusText);
      if(error.response.statusText){
        dispatch({
          type: MESSAGE_ERROR,
          payload: error.response.statusText,
        })
      }
      setErrorHandle({hasError:true, message: `Not found Recipes ${name}`})

     
    } 
  };
}

export function getTypeDiets (){
return async (dispatch)=>{
  try{
    const diets = await axios.get(getDiets)
    return dispatch(setTypeData(diets.data, GET_TYPE_DIETS))


  }catch (e){
    console.log(e)
  }
}

}


export const postRecipes = (payload)=>{
  return async function (dispatch){
    const response = await axios.post(pathRecipes,payload)
    
    
    return response
  }
  
}

export const getDetail = (id)=>{
  return async function (dispatch){
    try{
      const data = await axios.get(`${pathRecipes}/${id}`)
      return dispatch(setTypeData(data.data, GET_ID_RECIPE))

    }catch(e){
      console.log((e))
    }
  }

}




/**
 *  (dispatch)=>{
    //postPathRecipes
    const responsePost = await axios.post('http://localhost:3005/recipe', payload)
    console.log(responsePost)
    return responsePost
*/