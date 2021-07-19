import sequelize from "../helpers/sequelize.js"; // Provide your own sequelize instance.
import DataTypes from "sequelize";
export default sequelize.define(
  "ModuleLeanibaDifficultyHistory",
  {
    id: {
      field: "id",
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: "true",

      autoIncrement: "true",
    },

    student_id: {
      field: "student_id",
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    difficulty_score: {
      field: "difficulty_score",
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    calculated_at: {
      field: "calculated_at",
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "module_leaniba_difficulty_history",
  }
);

//
