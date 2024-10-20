const express = require("express");
const router = new express.Router();
const pokemonController = require("../controller/pokemon");

router.route("/").get(pokemonController.listPokemons);
router.route("/:id").get(pokemonController.getPokemonById);

module.exports = router;
