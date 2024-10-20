const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

// Use the cors middleware
app.use(cors());
app.use(bodyParser.json());

// Route for pokemons API
app.use("/api/pokemons", require("./routes"));

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
