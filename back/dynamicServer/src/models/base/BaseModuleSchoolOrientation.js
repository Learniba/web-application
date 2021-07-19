import sequelize from "../helpers/sequelize.js"; // Provide your own sequelize instance.
import DataTypes from "sequelize";
export default sequelize.define(
  "ModuleSchoolOrientation",
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
      allowNull: true,
    },

    name: {
      field: "name",
      type: DataTypes.STRING(255),
      allowNull: true,
    },

    description: {
      field: "description",
      type: DataTypes.STRING(255),
      allowNull: true,
    },

    created_at: {
      field: "created_at",
      type: DataTypes.DATE,
      allowNull: true,
    },

    created_by: {
      field: "created_by",
      type: DataTypes.STRING(255),
      allowNull: true,
    },

    updated_at: {
      field: "updated_at",
      type: DataTypes.DATE,
      allowNull: true,
    },

    updated_by: {
      field: "updated_by",
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  },
  {
    tableName: "module_school_orientation",
  }
);

//
