const { Router } = require("express");
const router = Router();
const { Typesdiets } = require("../db");
const { getAllFood } = require("../controllers/getAllFood")
const { controllerGetTypesDiets } = require("../controllers/controllerGetTypeDiets")
router.get("/", async (req, res) => {
  try {
        const typeDiets = await controllerGetTypesDiets()
        res.status(200).json(typeDiets) 
  }catch (e)
   {
    console.log(e);
     res.status(404).json({error: 'found types diets'})
    }
});

module.exports = router;
