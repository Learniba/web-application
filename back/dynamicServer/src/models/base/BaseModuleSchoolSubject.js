/**
 * @Author : amintado@gmail.com | Learniba TM
 * @Date: 2021
 *
 **/

import sequelize from "../../helpers/DBSequelize.js"; // Provide your own sequelize instance.
import DataTypes from "sequelize";
import Model from "sequelize/lib/model.js";
export const BaseModuleSchoolSubjectAttributes = {
  id: "id",
  code: "code",
  name: "name",
  description: "description",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
  deletedAt: "deletedAt",
};

/**
 * This is Base model
 * @module
 * @return {Promise<Model|BaseModuleUserAttributes>}
 */
export const BaseModuleSchoolSubject = sequelize.define(
  "ModuleSchoolSubject",
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
      allowNull: false,
    },

    name: {
      field: "name",
      type: DataTypes.STRING(255),
      allowNull: false,
    },

    description: {
      field: "description",
      type: DataTypes.STRING(255),
      allowNull: false,
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
    tableName: "module_school_subject",
    timestamps: true,
    paranoid: true, //soft delete and restore is active
  }
);

//
