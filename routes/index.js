const pokemonRoute = require("./pokemons");

const router = require("express").Router();

router.use("/", pokemonRoute);

module.exports = router;
