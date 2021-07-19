import sequelize from "../helpers/sequelize.js"; // Provide your own sequelize instance.
import DataTypes from "sequelize";
export default sequelize.define(
  "ModuleSchoolTeacher",
  {
    teacher_id: {
      field: "teacher_id",
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: "true",
    },

    supervisor_id: {
      field: "supervisor_id",
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "module_school_teacher",
  }
);

//
