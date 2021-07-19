import sequelize from "../helpers/sequelize.js"; // Provide your own sequelize instance.
import DataTypes from "sequelize";
export default sequelize.define(
  "ModuleUser",
  {
    id: {
      field: "id",
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: "true",

      autoIncrement: "true",
    },

    username: {
      field: "username",
      type: DataTypes.STRING(255),
      allowNull: false,
    },

    first_name: {
      field: "first_name",
      type: DataTypes.STRING(255),
      allowNull: true,
    },

    last_name: {
      field: "last_name",
      type: DataTypes.STRING(255),
      allowNull: true,
    },

    auth_key: {
      field: "auth_key",
      type: DataTypes.STRING(60),
      allowNull: true,
    },

    password_hash: {
      field: "password_hash",
      type: DataTypes.STRING(60),
      allowNull: true,
    },

    status: {
      field: "status",
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    ssn: {
      field: "ssn",
      type: DataTypes.STRING(50),
      allowNull: true,
    },

    email: {
      field: "email",
      type: DataTypes.STRING(255),
      allowNull: true,
    },

    date_of_birth: {
      field: "date_of_birth",
      type: DataTypes.DATEONLY,
      allowNull: true,
    },

    mobile: {
      field: "mobile",
      type: DataTypes.STRING(50),
      allowNull: false,
    },

    gender: {
      field: "gender",
      type: DataTypes.STRING(50),
      allowNull: true,
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
    tableName: "module_user",
  }
);

//
