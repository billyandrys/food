const Router = require("express");
const router = Router();
const axios = require("axios");
const { Recipe } = require("../db");
const {API_KEY} = process.env
//[ ] GET /recipes?name="..."
const Op = require("Sequelize").Op;

router.get("/", async (req, res) => {
  try {
    
    const name = req.query.name;
    const recipesDataBase = await Recipe.findAll({
      where: {
        name: {
          [Op.like]: `${name}%`,
        },
      },
    });
    
    const recipeTheApi = await axios.get(
      `https://api.spoonacular.com/recipes/autocomplete?apiKey=${API_KEY}&query=${name}`
    );

    
    
    
    const resultsFilterforName = recipesDataBase.concat(recipeTheApi.data);
    if(!resultsFilterforName.length){
      res.status(204).json({message:'related information is not in control'});
    }

    res.status(200).json(resultsFilterforName);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
