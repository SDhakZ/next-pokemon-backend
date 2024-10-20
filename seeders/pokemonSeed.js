const db = require("../models"); // Import Sequelize models

// Sample data (your JSON data)
const pokemonData = [
  {
    id: 1,
    name_english: "Bulbasaur",
    name_japanese: "フシギダネ",
    name_chinese: "妙蛙种子",
    name_french: "Bulbizarre",
    type: ["Grass", "Poison"],
    species: "Seed Pokémon",
    description: "Bulbasaur can be seen napping in bright sunlight...",
    evolution: { next: [["2", "Level 16"]] },
    height: "0.7 m",
    weight: "6.9 kg",
    gender: "87.5:12.5",
    egg: ["Monster", "Grass"],
    abilities: [
      ["Overgrow", "false"],
      ["Chlorophyll", "true"],
    ],
    image: {
      sprite:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/001.png",
      thumbnail:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/001.png",
      hires:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/001.png",
    },
  },
  // Add more Pokémon data...
];

// Function to seed data into the database
const seedPokemons = async () => {
  try {
    // Ensure the database and table structure is created
    await db.sequelize.sync({ alter: true }); // Use alter, so the table is not dropped

    // Insert the seed data
    await db.Pokemon.bulkCreate(pokemonData, { validate: true });
    console.log("Pokemons have been added successfully!");
  } catch (error) {
    console.error("Error while seeding pokemons:", error);
  } finally {
    // Close the database connection once seeding is done
    await db.sequelize.close();
  }
};

// Run the seed function
seedPokemons();
