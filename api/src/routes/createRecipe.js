const { Router } = require('express')
const router =  Router()
const { Recipe, Typesdiets } = require('../db')

router.post('/', async(req, res)=>{
    let {name, summary, healthScore, image, analyzedInstructions, typeDiets } = req.body
    let recipe = await Recipe.create({
        name,
        summary,
        healthScore,
        image,
        analyzedInstructions
    

    })
    
    let typesdiet =  await Typesdiets.findAll({
        where: {name:typeDiets}
    }) 
    recipe.addTypesdiets(typesdiet)
    res.status(200).json(recipe)

})

module.exports = router 