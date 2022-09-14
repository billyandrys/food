const axios = require('axios')
const {API_KEY, API_URL} = process.env
const { Recipe } = require('../db')

////https://api.spoonacular.com/recipes/complexSearch?
//apiKey=09dab76c76d341f88f9796fbf8c4028b
//&addRecipeInformation=true&number=100


const getAllFood = async(number=100, addRecipeInformation = true )=>{
    //The first 100 on APi
    try{
        const data = await axios.get(`${API_URL}${API_KEY}&addRecipeInformation=${addRecipeInformation}&number=${number}`)
         //return  data.data.results
         
         const resultsData = data.data.results.map((recipe)=>{
            return {
                id: recipe.id,
                name: recipe.title,
                image:recipe.image,
                summary: recipe.summary.replace(/<[^>]+>/g,''),
                healthScore: recipe.healthScore,
                diets: recipe.vegetarian === true ?
                        [...recipe.diets, 'vegetarian']:recipe.diets,
                dishTypes: recipe.dishTypes,
                steps:recipe.analyzedInstructions[0]?.steps.map(step=>{
                    return {
                        number : step.number,
                        step: step.step
                    }
                })

            }
            
         })
         



         return resultsData








    }catch(error){
        console.log(error)
    }
    
    
   
    

}
const baseDate = async()=>{
    try{
        let dataBase = await Recipe.findAll()
        return dataBase
        
    }catch(error){
        console.log(error + 'error dataBase') 
    }
}

const apiJoinDataBase = async()=>{
    let api = await getAllFood()
    let dataBase = await baseDate()
    let servicesFood = api?.concat(dataBase)
    return servicesFood
}

module.exports = {getAllFood, baseDate, apiJoinDataBase}