/**
 * @Author : amintado@gmail.com | Learniba TM
 * @Date: 2021
 *
 **/

import sequelize from "../../helpers/DBSequelize.js"; // Provide your own sequelize instance.
import DataTypes from "sequelize";
import Model from "sequelize/lib/model.js";
export const BaseModuleLeanibaDifficultyHistoryAttributes = {
  id: "id",
  student_id: "student_id",
  difficulty_score: "difficulty_score",
  calculated_at: "calculated_at",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
  deletedAt: "deletedAt",
};

/**
 * This is Base model
 * @module
 * @return {Promise<Model|BaseModuleUserAttributes>}
 */
export const BaseModuleLeanibaDifficultyHistory = sequelize.define(
  "ModuleLeanibaDifficultyHistory",
  {
    id: {
      field: "id",
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,

      autoIncrement: true,
    },

    student_id: {
      field: "student_id",
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    difficulty_score: {
      field: "difficulty_score",
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    calculated_at: {
      field: "calculated_at",
      type: DataTypes.DATE(6),
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
    tableName: "module_leaniba_difficulty_history",
    timestamps: true,
    paranoid: true, //soft delete and restore is active
  }
);

//
