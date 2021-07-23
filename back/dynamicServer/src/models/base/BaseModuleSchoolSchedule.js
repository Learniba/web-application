/**
 * @Author : amintado@gmail.com | Learniba TM
 * @Date: 2021
 *
 **/

import sequelize from "../../helpers/DBSequelize.js"; // Provide your own sequelize instance.
import DataTypes from "sequelize";
import Model from "sequelize/lib/model.js";
export const BaseModuleSchoolScheduleAttributes = {
  id: "id",
  created_at: "created_at",
  created_by: "created_by",
  updated_at: "updated_at",
  updated_by: "updated_by",
  starttime: "starttime",
  endtime: "endtime",
  teacher_id: "teacher_id",
  assistant_id: "assistant_id",
  subject_id: "subject_id",
  class_id: "class_id",
  reference_index_id: "reference_index_id",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
  deletedAt: "deletedAt",
};

/**
 * This is Base model
 * @module
 * @return {Promise<Model|BaseModuleUserAttributes>}
 */
export const BaseModuleSchoolSchedule = sequelize.define(
  "ModuleSchoolSchedule",
  {
    id: {
      field: "id",
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,

      autoIncrement: true,
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

    starttime: {
      field: "starttime",
      type: DataTypes.DATE(6),
      allowNull: true,
    },

    endtime: {
      field: "endtime",
      type: DataTypes.DATE(6),
      allowNull: true,
    },

    teacher_id: {
      field: "teacher_id",
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    assistant_id: {
      field: "assistant_id",
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    subject_id: {
      field: "subject_id",
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    class_id: {
      field: "class_id",
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    reference_index_id: {
      field: "reference_index_id",
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
    tableName: "module_school_schedule",
    timestamps: true,
    paranoid: true, //soft delete and restore is active
  }
);

//
