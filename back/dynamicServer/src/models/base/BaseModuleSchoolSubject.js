import sequelize from "../helpers/sequelize.js"; // Provide your own sequelize instance.
import DataTypes from "sequelize";
export default sequelize.define(
  "ModuleSchoolSubject",
  {
    id: {
      field: "id",
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: "true",

      autoIncrement: "true",
    },

    code: {
      field: "code",
      type: DataTypes.STRING(255),
      allowNull: false,
    },

    name: {
      field: "name",
      type: DataTypes.STRING(255),
      allowNull: false,
    },

    description: {
      field: "description",
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    tableName: "module_school_subject",
  }
);

//
