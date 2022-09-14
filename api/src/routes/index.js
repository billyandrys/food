const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const allFood = require('./allFood')
const createRecipe = require('./createRecipe')
const testGet = require('./testGet')
const getTypeDiets = require('./getTypeDiets')
const getIdRecipe = require('./getIdRecipe')
const getQueryName = require('./getQueryName')

router.use("/food", allFood)
router.use('/recipe', createRecipe)
router.use('/testGet', testGet)
router.use('/types', getTypeDiets)
router.use('/recipe', getIdRecipe)
//router.use('/recipes', getQueryName)
module.exports = router
