import sequelize from "../helpers/sequelize.js"; // Provide your own sequelize instance.
import DataTypes from "sequelize";
export default sequelize.define(
  "ModuleAuthUser",
  {
    id: {
      field: "id",
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: "true",

      autoIncrement: "true",
    },

    uid: {
      field: "uid",
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    role: {
      field: "role",
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    createdAt: {
      field: "createdAt",
      type: DataTypes.DATE,
      allowNull: false,
    },

    updatedAt: {
      field: "updatedAt",
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "module_auth_users",
  }
);

//
