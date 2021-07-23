/**
 * @Author : amintado@gmail.com | Learniba TM
 * @Date: 2021
 *
 **/

import sequelize from "../../helpers/DBSequelize.js"; // Provide your own sequelize instance.
import DataTypes from "sequelize";
import Model from "sequelize/lib/model.js";
export const BaseModuleExamStudentAnswerAttributes = {
  id: "id",
  question_choice: "question_choice",
  student_id: "student_id",
  ask_time: "ask_time",
  answer_time_sec: "answer_time_sec",
  question_choices_id: "question_choices_id",
  exercise_id: "exercise_id",
  answer_score: "answer_score",
  down_time_sec: "down_time_sec",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
  deletedAt: "deletedAt",
};

/**
 * This is Base model
 * @module
 * @return {Promise<Model|BaseModuleUserAttributes>}
 */
export const BaseModuleExamStudentAnswer = sequelize.define(
  "ModuleExamStudentAnswer",
  {
    id: {
      field: "id",
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,

      autoIncrement: true,
    },

    question_choice: {
      field: "question_choice",
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    student_id: {
      field: "student_id",
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    ask_time: {
      field: "ask_time",
      type: DataTypes.DATE(6),
      allowNull: false,
    },

    answer_time_sec: {
      field: "answer_time_sec",
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    question_choices_id: {
      field: "question_choices_id",
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    exercise_id: {
      field: "exercise_id",
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    answer_score: {
      field: "answer_score",
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    down_time_sec: {
      field: "down_time_sec",
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
    tableName: "module_exam_student_answer",
    timestamps: true,
    paranoid: true, //soft delete and restore is active
  }
);

//
