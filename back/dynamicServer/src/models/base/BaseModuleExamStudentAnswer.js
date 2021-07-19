import sequelize from "../helpers/sequelize.js"; // Provide your own sequelize instance.
import DataTypes from "sequelize";
export default sequelize.define(
  "ModuleExamStudentAnswer",
  {
    id: {
      field: "id",
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: "true",

      autoIncrement: "true",
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
      type: DataTypes.DATE,
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
  },
  {
    tableName: "module_exam_student_answer",
  }
);

//
