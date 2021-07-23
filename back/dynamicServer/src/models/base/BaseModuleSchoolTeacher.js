/**
 * @Author : amintado@gmail.com | Learniba TM
 * @Date: 2021
 *
 **/

import sequelize from "../../helpers/DBSequelize.js"; // Provide your own sequelize instance.
import DataTypes from "sequelize";
import Model from "sequelize/lib/model.js";
export const BaseModuleSchoolTeacherAttributes = {
  teacher_id: "teacher_id",
  supervisor_id: "supervisor_id",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
  deletedAt: "deletedAt",
};

/**
 * This is Base model
 * @module
 * @return {Promise<Model|BaseModuleUserAttributes>}
 */
export const BaseModuleSchoolTeacher = sequelize.define(
  "ModuleSchoolTeacher",
  {
    teacher_id: {
      field: "teacher_id",
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },

    supervisor_id: {
      field: "supervisor_id",
      type: DataTypes.INTEGER,
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
    tableName: "module_school_teacher",
    timestamps: true,
    paranoid: true, //soft delete and restore is active
  }
);

//
