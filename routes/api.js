const getRecipes = require("./recipe/getRecipes");
const updateDB = require("./recipe/updateDB");

const router = require("express").Router();

router.get("/",getRecipes);
router.get("/update", (req, res) => {
  const { source } = req.query;
  updateDB(source).then((response) => res.json(response));
});

module.exports = router;
