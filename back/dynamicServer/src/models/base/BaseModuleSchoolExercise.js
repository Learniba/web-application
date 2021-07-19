import sequelize from "../helpers/sequelize.js"; // Provide your own sequelize instance.
import DataTypes from "sequelize";
export default sequelize.define(
  "ModuleSchoolExercise",
  {
    id: {
      field: "id",
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: "true",

      autoIncrement: "true",
    },

    question_id: {
      field: "question_id",
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    schedule_id: {
      field: "schedule_id",
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    exercise_type: {
      field: "exercise_type",
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    name: {
      field: "name",
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    tableName: "module_school_exercise",
  }
);

//
