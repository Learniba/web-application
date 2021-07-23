/**
 * @Author : amintado@gmail.com | Learniba TM
 * @Date: 2021
 *
 **/

import sequelize from "../../helpers/DBSequelize.js"; // Provide your own sequelize instance.
import DataTypes from "sequelize";
import Model from "sequelize/lib/model.js";
export const BaseModuleLearnibaReferenceIndexAttributes = {
  id: "id",
  name: "name",
  description: "description",
  parent_id: "parent_id",
  reference_id: "reference_id",
  type: "type",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
  deletedAt: "deletedAt",
};

/**
 * This is Base model
 * @module
 * @return {Promise<Model|BaseModuleUserAttributes>}
 */
export const BaseModuleLearnibaReferenceIndex = sequelize.define(
  "ModuleLearnibaReferenceIndex",
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
    tableName: "module_learniba_reference_index",
    timestamps: true,
    paranoid: true, //soft delete and restore is active
  }
);

//
