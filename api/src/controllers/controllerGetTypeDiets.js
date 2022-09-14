const { getAllFood } = require("../controllers/getAllFood");
const { Typesdiets } = require("../db");

const controllerGetTypesDiets = async () => {
  const typesDiet = await Typesdiets.findAll();
  if (typesDiet.length) {
    return typesDiet;
  } else {
    const apiUrl = await getAllFood();

    const apiDiets = await apiUrl.map((data) => data.diets);
    const diets = [];

    apiDiets.forEach((list) => {
      list.forEach((diet) => {
        diets.push(diet);
      });
    });

    diets.forEach((diet) => {
      Typesdiets.findOrCreate({
        where: { name: diet },
      });
    });
    const dietsDatabase = await Typesdiets.findAll();
  
    return dietsDatabase;
  }
};

module.exports = {
  controllerGetTypesDiets,
};


