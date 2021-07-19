import sequelize from "../helpers/sequelize.js"; // Provide your own sequelize instance.
import DataTypes from "sequelize";
export default sequelize.define(
  "ModuleLearnibaReferenceIndex",
  {
    id: {
      field: "id",
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: "true",

      autoIncrement: "true",
    },

    name: {
      field: "name",
      type: DataTypes.STRING(255),
      allowNull: false,
    },

    description: {
      field: "description",
      type: DataTypes.TEXT,
      allowNull: false,
    },

    parent_id: {
      field: "parent_id",
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    reference_id: {
      field: "reference_id",
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    type: {
      field: "type",
      type: DataTypes.STRING(255),
      allowNull: false,

      comment: "section\nchapter\nsub-chapter\npage",
    },
  },
  {
    tableName: "module_learniba_reference_index",
  }
);

//
