import sequelize from "../helpers/sequelize.js"; // Provide your own sequelize instance.
import DataTypes from "sequelize";
export default sequelize.define(
  "ModuleMetadatum",
  {
    module: {
      field: "module",
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: "true",
    },

    module_key: {
      field: "module_key",
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: "true",
    },

    key: {
      field: "key",
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: "true",
    },

    value: {
      field: "value",
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    tableName: "module_metadata",
  }
);

//
