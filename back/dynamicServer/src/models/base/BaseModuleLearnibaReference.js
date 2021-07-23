/**
 * @Author : amintado@gmail.com | Learniba TM
 * @Date: 2021
 *
 **/

import sequelize from "../../helpers/DBSequelize.js"; // Provide your own sequelize instance.
import DataTypes from "sequelize";
import Model from "sequelize/lib/model.js";
export const BaseModuleLearnibaReferenceAttributes = {
  id: "id",
  name: "name",
  description: "description",
  publish_date: "publish_date",
  publisher: "publisher",
  level: "level",
  subject_id: "subject_id",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
  deletedAt: "deletedAt",
};

/**
 * This is Base model
 * @module
 * @return {Promise<Model|BaseModuleUserAttributes>}
 */
export const BaseModuleLearnibaReference = sequelize.define(
  "ModuleLearnibaReference",
  {
    id: {
      field: "id",
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,

      autoIncrement: true,
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
      type: DataTypes.DATE(6),
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
    tableName: "module_learniba_reference",
    timestamps: true,
    paranoid: true, //soft delete and restore is active
  }
);

//
