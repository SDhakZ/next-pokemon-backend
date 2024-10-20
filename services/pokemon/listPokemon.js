const db = require("../../models");

// Function to list all Pokemon from the database
const listPokemons = async () => {
  try {
    // Fetch all pokemons from the database
    const pokemons = await db.Pokemon.findAll();

    // Transform the data to match the desired structure
    const transformedPokemons = pokemons.map((pokemon) => {
      return {
        id: pokemon.id,
        name: {
          english: pokemon.name_english,
          japanese: pokemon.name_japanese,
          chinese: pokemon.name_chinese,
          french: pokemon.name_french,
        },
        type: JSON.parse(pokemon.type), // Parse JSON string to array
        species: pokemon.species,
        description: pokemon.description,
        evolution: JSON.parse(pokemon.evolution), // Parse JSON string to object
        profile: {
          height: pokemon.height,
          weight: pokemon.weight,
          gender: pokemon.gender,
          egg: JSON.parse(pokemon.egg), // Parse JSON string to array
          ability: JSON.parse(pokemon.abilities), // Parse JSON string to array
        },
        image: JSON.parse(pokemon.image), // Parse JSON string to object
      };
    });

    return transformedPokemons;
  } catch (error) {
    throw new Error("Could not retrieve pokemons from the database.");
  }
};

module.exports = listPokemons;
