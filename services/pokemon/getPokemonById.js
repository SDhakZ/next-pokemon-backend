const fs = require("fs");
const path = require("path");

const getPokemonById = ({ pokemonId }) => {
  try {
    const filePath = path.join(__dirname, "../../sample.json");
    const data = fs.readFileSync(filePath, "utf-8");
    const pokemons = JSON.parse(data);

    // Convert pokemonId to integer
    const parsedId = parseInt(pokemonId, 10);

    // Find the main Pokémon with the matching ID
    const pokemon = pokemons.find((pokemon) => pokemon.id === parsedId);

    if (!pokemon) {
      throw new Error("Pokemon not found");
    }

    // Recursive function to fetch previous evolutions
    const getPreviousEvolutions = (currentPokemon) => {
      const prevEvolutions = [];

      if (currentPokemon.evolution && currentPokemon.evolution.prev) {
        const [prevId] = currentPokemon.evolution.prev;
        const prevPokemon = pokemons.find((p) => p.id === parseInt(prevId, 10));
        if (prevPokemon) {
          prevEvolutions.push({
            id: prevPokemon.id,
            name: prevPokemon.name,
            type: prevPokemon.type,
            image: prevPokemon.image,
          });
          // Recursively fetch earlier evolutions
          prevEvolutions.unshift(...getPreviousEvolutions(prevPokemon));
        }
      }

      return prevEvolutions;
    };

    // Recursive function to fetch next evolutions
    const getNextEvolutions = (currentPokemon) => {
      const evolutions = [];

      if (currentPokemon.evolution && currentPokemon.evolution.next) {
        currentPokemon.evolution.next.forEach(([evolutionId]) => {
          const evolvedPokemon = pokemons.find(
            (p) => p.id === parseInt(evolutionId, 10)
          );
          if (evolvedPokemon) {
            evolutions.push({
              id: evolvedPokemon.id,
              name: evolvedPokemon.name,
              type: evolvedPokemon.type,
              image: evolvedPokemon.image,
            });

            // Recursively fetch further evolutions and append to the same array
            evolutions.push(...getNextEvolutions(evolvedPokemon));
          }
        });
      }

      return evolutions;
    };

    // Get previous evolutions for the main Pokémon
    const previousEvolutions = getPreviousEvolutions(pokemon);

    // Get next evolutions for the main Pokémon
    const nextEvolutions = getNextEvolutions(pokemon);

    // Combine previous evolutions, current Pokémon, and next evolutions
    const fullEvolutionChain = [
      ...previousEvolutions,
      {
        id: pokemon.id,
        name: pokemon.name,
        type: pokemon.type,
        image: pokemon.image,
      },
      ...nextEvolutions,
    ];

    // Return the main Pokémon along with the full evolution chain
    return { ...pokemon, evolutions: fullEvolutionChain };
  } catch (error) {
    console.error("Error reading or parsing file:", error.message);
    throw new Error("Failed to retrieve Pokemon");
  }
};

module.exports = getPokemonById;
