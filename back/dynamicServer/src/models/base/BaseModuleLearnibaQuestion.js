import sequelize from "../helpers/sequelize.js"; // Provide your own sequelize instance.
import DataTypes from "sequelize";
export default sequelize.define(
  "ModuleLearnibaQuestion",
  {
    id: {
      field: "id",
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: "true",

      autoIncrement: "true",
    },

    question_text: {
      field: "question_text",
      type: DataTypes.TEXT,
      allowNull: true,
    },

    media_id: {
      field: "media_id",
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    media_tip_id: {
      field: "media_tip_id",
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    reference_index_id: {
      field: "reference_index_id",
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    question_time_limit_sec: {
      field: "question_time_limit_sec",
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    difficulty_score: {
      field: "difficulty_score",
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    book_page_no: {
      field: "book_page_no",
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "module_learniba_question",
  }
);

//
