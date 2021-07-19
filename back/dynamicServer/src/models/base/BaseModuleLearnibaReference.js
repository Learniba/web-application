import sequelize from "../helpers/sequelize.js"; // Provide your own sequelize instance.
import DataTypes from "sequelize";
export default sequelize.define(
  "ModuleLearnibaReference",
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
      type: DataTypes.STRING(500),
      allowNull: false,
    },

    publish_date: {
      field: "publish_date",
      type: DataTypes.DATE,
      allowNull: false,
    },

    publisher: {
      field: "publisher",
      type: DataTypes.STRING(255),
      allowNull: false,
    },

    level: {
      field: "level",
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    subject_id: {
      field: "subject_id",
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "module_learniba_reference",
  }
);

//
