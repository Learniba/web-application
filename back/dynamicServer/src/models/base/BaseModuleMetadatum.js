/**
 * @Author : amintado@gmail.com | Learniba TM
 * @Date: 2021
 *
 **/

import sequelize from "../../helpers/DBSequelize.js"; // Provide your own sequelize instance.
import DataTypes from "sequelize";
import Model from "sequelize/lib/model.js";
export const BaseModuleMetadatumAttributes = {
  module: "module",
  module_key: "module_key",
  key: "key",
  value: "value",
};

/**
 * This is Base model
 * @module
 * @return {Promise<Model|BaseModuleUserAttributes>}
 */
export const BaseModuleMetadatum = sequelize.define(
  "ModuleMetadatum",
  {
    module: {
      field: "module",
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
    },

    module_key: {
      field: "module_key",
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },

    key: {
      field: "key",
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
    },

    value: {
      field: "value",
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    tableName: "module_metadata",
    timestamps: true,
    paranoid: true, //soft delete and restore is active
  }
);

//
