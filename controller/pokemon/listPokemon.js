const pokemonService = require("../../services/pokemon");

// Function to handle the listPokemons request
const listPokemons = async (req, res) => {
  try {
    const pokemons = await pokemonService.listPokemons();
    res.json(pokemons);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = listPokemons;
