const { Router } = require('express')
const router = Router()
const axios = require('axios')
const { API_KEY } = process.env
const { Recipe, Typesdiets } = require('../db')

router.get('/:id', async(req, res)=>{
    const { id } = req.params
    console.log( req.params.id )
            
    try{
        if(id.includes('-')){
                const recipeDatabase = await Recipe.findOne({ 
                    where: {id },
                    include:[Typesdiets]
            })
            return res.json(recipeDatabase)
        }
            const recipeApi = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`)
            let  {  title, image, summary, healthScore, diets, dishTypes, analyzedInstructions } =  await recipeApi.data

            summary = summary.replace(/<[^>]+>/g,'')
            analyzedInstructions = analyzedInstructions[0]?.steps.map(step=>{
                return {
                    number : step.number,
                    step: step.step
                }
            })
            //analyzedInstructions = step
            return res.json({ id, title, image, summary, healthScore, diets, dishTypes, analyzedInstructions})
        
    }catch(err){ 
        console.log(err)
        res.status(404).json({message: 'not found , check your recipeid '}) 
    }
    
})
module.exports = router