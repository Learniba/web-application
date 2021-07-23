/**
 * @Author : amintado@gmail.com | Learniba TM
 * @Date: 2021
 *
 **/

import sequelize from "../../helpers/DBSequelize.js"; // Provide your own sequelize instance.
import DataTypes from "sequelize";
import Model from "sequelize/lib/model.js";
export const BaseModuleSchoolExerciseAttributes = {
  id: "id",
  question_id: "question_id",
  schedule_id: "schedule_id",
  exercise_type: "exercise_type",
  name: "name",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
  deletedAt: "deletedAt",
};

/**
 * This is Base model
 * @module
 * @return {Promise<Model|BaseModuleUserAttributes>}
 */
export const BaseModuleSchoolExercise = sequelize.define(
  "ModuleSchoolExercise",
  {
    id: {
      field: "id",
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,

      autoIncrement: true,
    },

    question_id: {
      field: "question_id",
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    schedule_id: {
      field: "schedule_id",
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    exercise_type: {
      field: "exercise_type",
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    name: {
      field: "name",
      type: DataTypes.STRING(50),
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
    tableName: "module_school_exercise",
    timestamps: true,
    paranoid: true, //soft delete and restore is active
  }
);

//
