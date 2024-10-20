const getPokemonService = require("../../services/pokemon");

const getPokemonById = (req, res) => {
  try {
    const pokemons = getPokemonService.getPokemonById({
      pokemonId: req.params.id,
    });
    res.status(200).json(pokemons);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to retrieve pokemon" });
  }
};

module.exports = getPokemonById;
