/**
 * @Author : amintado@gmail.com | Learniba TM
 * @Date: 2021
 *
 **/

import sequelize from "../../helpers/DBSequelize.js"; // Provide your own sequelize instance.
import DataTypes from "sequelize";
import Model from "sequelize/lib/model.js";
export const BaseModuleUserAttributes = {
  id: "id",
  username: "username",
  first_name: "first_name",
  last_name: "last_name",
  auth_key: "auth_key",
  password_hash: "password_hash",
  status: "status",
  ssn: "ssn",
  email: "email",
  date_of_birth: "date_of_birth",
  mobile: "mobile",
  gender: "gender",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
  deletedAt: "deletedAt",
};

/**
 * This is Base model
 * @module
 * @return {Promise<Model|BaseModuleUserAttributes>}
 */
export const BaseModuleUser = sequelize.define(
  "ModuleUser",
  {
    id: {
      field: "id",
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,

      autoIncrement: true,
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
      type: DataTypes.DATE(6),
      allowNull: true,
    },

    updatedAt: {
      field: "updatedAt",
      type: DataTypes.DATE(6),
      allowNull: true,
    },

    deletedAt: {
      field: "deletedAt",
      type: DataTypes.DATE(6),
      allowNull: true,
    },
  },
  {
    tableName: "module_user",
    timestamps: true,
    paranoid: true, //soft delete and restore is active
  }
);

//
