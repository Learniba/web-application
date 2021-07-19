import sequelize from "../helpers/sequelize.js"; // Provide your own sequelize instance.
import DataTypes from "sequelize";
export default sequelize.define(
  "ModuleQuestionChoice",
  {
    id: {
      field: "id",
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: "true",

      autoIncrement: "true",
    },

    choice_text: {
      field: "choice_text",
      type: DataTypes.STRING(255),
      allowNull: false,
    },

    is_correct: {
      field: "is_correct",
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },

    question_id: {
      field: "question_id",
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    media_id: {
      field: "media_id",
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "module_question_choices",
  }
);

//
