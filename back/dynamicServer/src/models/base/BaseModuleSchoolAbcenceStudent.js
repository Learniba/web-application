import sequelize from "../helpers/sequelize.js"; // Provide your own sequelize instance.
import DataTypes from "sequelize";
export default sequelize.define(
  "ModuleSchoolAbcenceStudent",
  {
    id: {
      field: "id",
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: "true",

      autoIncrement: "true",
    },

    schedule_id: {
      field: "schedule_id",
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    student_id: {
      field: "student_id",
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    description: {
      field: "description",
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    tableName: "module_school_abcence_student",
  }
);

//
