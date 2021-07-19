import sequelize from "../helpers/sequelize.js"; // Provide your own sequelize instance.
import DataTypes from "sequelize";
export default sequelize.define(
  "ModuleSchoolSupervisor",
  {
    supervisor_id: {
      field: "supervisor_id",
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: "true",
    },
  },
  {
    tableName: "module_school_supervisor",
  }
);

//
