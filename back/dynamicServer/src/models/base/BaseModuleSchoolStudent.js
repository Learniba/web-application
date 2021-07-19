import sequelize from "../helpers/sequelize.js"; // Provide your own sequelize instance.
import DataTypes from "sequelize";
export default sequelize.define(
  "ModuleSchoolStudent",
  {
    student_id: {
      field: "student_id",
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: "true",
    },

    class_id: {
      field: "class_id",
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    difficulty_score: {
      field: "difficulty_score",
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "module_school_student",
  }
);

//
