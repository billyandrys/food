const { Router } = require("express");
const router = Router();
const { apiJoinDataBase } = require("../controllers/getAllFood");

router.get("/", async (req, res) => {
    const search = (name, haSearchName) =>
        name.toLowerCase().includes(haSearchName.toLowerCase());

    try {
        const haSearchName = req.query.name;
        const data = await apiJoinDataBase();
        if (haSearchName) {
        let isrecipeName = await data.filter(({ name }) =>
            search(name, haSearchName)
        );
        isrecipeName.length
            ? res.status(200).json(isrecipeName)
            : res.status(404).json("Not recipe");
        } else {
        res.status(200).json(data);
        }
    } catch (e) {
        console.log(e);
        res.status(404).json({ error: "error found api" });
    }
});

module.exports = router;
