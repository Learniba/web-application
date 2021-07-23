/**
 * @Author : amintado@gmail.com | Learniba TM
 * @Date: 2021
 *
 **/

import sequelize from "../../helpers/DBSequelize.js"; // Provide your own sequelize instance.
import DataTypes from "sequelize";
import Model from "sequelize/lib/model.js";
export const BaseModuleLearnibaQuestionAttributes = {
  id: "id",
  question_text: "question_text",
  media_id: "media_id",
  media_tip_id: "media_tip_id",
  reference_index_id: "reference_index_id",
  question_time_limit_sec: "question_time_limit_sec",
  difficulty_score: "difficulty_score",
  book_page_no: "book_page_no",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
  deletedAt: "deletedAt",
};

/**
 * This is Base model
 * @module
 * @return {Promise<Model|BaseModuleUserAttributes>}
 */
export const BaseModuleLearnibaQuestion = sequelize.define(
  "ModuleLearnibaQuestion",
  {
    id: {
      field: "id",
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,

      autoIncrement: true,
    },

    question_text: {
      field: "question_text",
      type: DataTypes.TEXT,
      allowNull: true,
    },

    media_id: {
      field: "media_id",
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    media_tip_id: {
      field: "media_tip_id",
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    reference_index_id: {
      field: "reference_index_id",
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    question_time_limit_sec: {
      field: "question_time_limit_sec",
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    difficulty_score: {
      field: "difficulty_score",
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    book_page_no: {
      field: "book_page_no",
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
    tableName: "module_learniba_question",
    timestamps: true,
    paranoid: true, //soft delete and restore is active
  }
);

//
