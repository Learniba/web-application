import sequelize from "../helpers/sequelize.js"; // Provide your own sequelize instance.
import DataTypes from "sequelize";
export default sequelize.define(
  "ModuleSchoolCustodian",
  {
    parent_id: {
      field: "parent_id",
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: "true",
    },

    student_id: {
      field: "student_id",
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: "true",
    },
  },
  {
    tableName: "module_school_custodian",
  }
);

//
