/**
 * @Author : amintado@gmail.com | Learniba TM
 * @Date: 2021
 *
 **/

import sequelize from "../../helpers/DBSequelize.js"; // Provide your own sequelize instance.
import DataTypes from "sequelize";
import Model from "sequelize/lib/model.js";
export const BaseModuleQuestionChoiceAttributes = {
  id: "id",
  choice_text: "choice_text",
  is_correct: "is_correct",
  question_id: "question_id",
  media_id: "media_id",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
  deletedAt: "deletedAt",
};

/**
 * This is Base model
 * @module
 * @return {Promise<Model|BaseModuleUserAttributes>}
 */
export const BaseModuleQuestionChoice = sequelize.define(
  "ModuleQuestionChoice",
  {
    id: {
      field: "id",
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,

      autoIncrement: true,
    },

    choice_text: {
      field: "choice_text",
      type: DataTypes.STRING(255),
      allowNull: false,
    },

    is_correct: {
      field: "is_correct",
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },

    question_id: {
      field: "question_id",
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    media_id: {
      field: "media_id",
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
    tableName: "module_question_choices",
    timestamps: true,
    paranoid: true, //soft delete and restore is active
  }
);

//
