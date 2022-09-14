const { Router } = require('express')
const router = Router()
const { Recipe } = require('../db')
const testGet = async(req, res)=>{
    try{
        const recipe = await Recipe.findAll()
        res.status(200).json(recipe)
    }catch(error){
        console.log(error + 'falla function')
    }
}

router.get('/', testGet)
module.exports = router