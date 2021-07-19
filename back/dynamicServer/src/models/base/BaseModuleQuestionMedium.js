import sequelize from "../helpers/sequelize.js"; // Provide your own sequelize instance.
import DataTypes from "sequelize";
export default sequelize.define(
  "ModuleQuestionMedium",
  {
    id: {
      field: "id",
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: "true",

      autoIncrement: "true",
    },

    media_link: {
      field: "media_link",
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    tableName: "module_question_media",
  }
);

//
