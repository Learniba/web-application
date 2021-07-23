/**
 * @Author : amintado@gmail.com | Learniba TM
 * @Date: 2021
 *
 **/

import sequelize from "../../helpers/DBSequelize.js"; // Provide your own sequelize instance.
import DataTypes from "sequelize";
import Model from "sequelize/lib/model.js";
export const BaseModuleSchoolOrientationAttributes = {
  id: "id",
  code: "code",
  name: "name",
  description: "description",
  created_at: "created_at",
  created_by: "created_by",
  updated_at: "updated_at",
  updated_by: "updated_by",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
  deletedAt: "deletedAt",
};

/**
 * This is Base model
 * @module
 * @return {Promise<Model|BaseModuleUserAttributes>}
 */
export const BaseModuleSchoolOrientation = sequelize.define(
  "ModuleSchoolOrientation",
  {
    id: {
      field: "id",
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,

      autoIncrement: true,
    },

    code: {
      field: "code",
      type: DataTypes.STRING(255),
      allowNull: true,
    },

    name: {
      field: "name",
      type: DataTypes.STRING(255),
      allowNull: true,
    },

    description: {
      field: "description",
      type: DataTypes.STRING(255),
      allowNull: true,
    },

    created_at: {
      field: "created_at",
      type: DataTypes.DATE(6),
      allowNull: true,
    },

    created_by: {
      field: "created_by",
      type: DataTypes.STRING(255),
      allowNull: true,
    },

    updated_at: {
      field: "updated_at",
      type: DataTypes.DATE(6),
      allowNull: true,
    },

    updated_by: {
      field: "updated_by",
      type: DataTypes.STRING(255),
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
    tableName: "module_school_orientation",
    timestamps: true,
    paranoid: true, //soft delete and restore is active
  }
);

//
