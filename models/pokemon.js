module.exports = (sequelize, DataTypes) => {
  const Pokemon = sequelize.define("Pokemon", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    name_english: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name_japanese: {
      type: DataTypes.STRING,
    },
    name_chinese: {
      type: DataTypes.STRING,
    },
    name_french: {
      type: DataTypes.STRING,
    },
    type: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    species: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    evolution: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    height: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    weight: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    egg: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    abilities: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    image: {
      type: DataTypes.JSON,
      allowNull: true,
    },
  });

  return Pokemon;
};
