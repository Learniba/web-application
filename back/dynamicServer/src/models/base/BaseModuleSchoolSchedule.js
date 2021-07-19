import sequelize from "../helpers/sequelize.js"; // Provide your own sequelize instance.
import DataTypes from "sequelize";
export default sequelize.define(
  "ModuleSchoolSchedule",
  {
    id: {
      field: "id",
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: "true",

      autoIncrement: "true",
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

    starttime: {
      field: "starttime",
      type: DataTypes.DATE,
      allowNull: true,
    },

    endtime: {
      field: "endtime",
      type: DataTypes.DATE,
      allowNull: true,
    },

    teacher_id: {
      field: "teacher_id",
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    assistant_id: {
      field: "assistant_id",
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    subject_id: {
      field: "subject_id",
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    class_id: {
      field: "class_id",
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    reference_index_id: {
      field: "reference_index_id",
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "module_school_schedule",
  }
);

//
