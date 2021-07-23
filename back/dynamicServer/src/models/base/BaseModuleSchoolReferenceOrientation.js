/**
 * @Author : amintado@gmail.com | Learniba TM
 * @Date: 2021
 *
 **/

import sequelize from "../../helpers/DBSequelize.js"; // Provide your own sequelize instance.
import DataTypes from "sequelize";
import Model from "sequelize/lib/model.js";
export const BaseModuleSchoolReferenceOrientationAttributes = {
  reference_id: "reference_id",
  orientation_id: "orientation_id",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
  deletedAt: "deletedAt",
};

/**
 * This is Base model
 * @module
 * @return {Promise<Model|BaseModuleUserAttributes>}
 */
export const BaseModuleSchoolReferenceOrientation = sequelize.define(
  "ModuleSchoolReferenceOrientation",
  {
    reference_id: {
      field: "reference_id",
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },

    orientation_id: {
      field: "orientation_id",
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
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
    tableName: "module_school_reference_orientation",
    timestamps: true,
    paranoid: true, //soft delete and restore is active
  }
);

//
