import sequelize from "../helpers/sequelize.js"; // Provide your own sequelize instance.
import DataTypes from "sequelize";
export default sequelize.define(
  "ModuleAuthRole",
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
  },
  {
    tableName: "module_auth_roles",
  }
);

//
