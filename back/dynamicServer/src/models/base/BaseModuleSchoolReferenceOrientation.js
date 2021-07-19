import sequelize from "../helpers/sequelize.js"; // Provide your own sequelize instance.
import DataTypes from "sequelize";
export default sequelize.define(
  "ModuleSchoolReferenceOrientation",
  {
    reference_id: {
      field: "reference_id",
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: "true",
    },

    orientation_id: {
      field: "orientation_id",
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: "true",
    },
  },
  {
    tableName: "module_school_reference_orientation",
  }
);

//
