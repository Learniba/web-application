import {BaseModuleSchoolTeacher, BaseModuleSchoolTeacherAttributes} from "./base/BaseModuleSchoolTeacher.js";
import {CreateUpdateUser, ModuleUser, ModuleUserConst} from "./ModuleUser.js";
import Model from "sequelize/lib/model.js"
import Variables from "../helpers/Variables.js";
import {Sequelize} from "sequelize";

export const ModuleSchoolTeacherConst = {
  STATUS_ACTIVE: ModuleUserConst.STATUS_ACTIVE,
  STATUS_DE_ACTIVE: ModuleUserConst.STATUS_DE_ACTIVE,

  Scopes: {
    Public: 'publicS',
    Public_users: 'publicSU'
  }
};

BaseModuleSchoolTeacher.addScope(ModuleSchoolTeacherConst.Scopes.Public, {
  attributes: {
    exclude: Variables.excludeDb,
    include: [
      BaseModuleSchoolTeacherAttributes.teacher_id,
      BaseModuleSchoolTeacherAttributes.supervisor_id,
    ]
  }
});

BaseModuleSchoolTeacher.addScope(ModuleSchoolTeacherConst.Scopes.Public_users, {
  attributes: {
    exclude: Variables.excludeAnd(['teacher_id', 'supervisor_id']),
    include: [
      [Sequelize.col('ModuleUser.id'), 'id'],
      [Sequelize.col('ModuleUser.username'), 'national_id'],
      [Sequelize.col('ModuleUser.first_name'), 'name'],
      [Sequelize.col('ModuleUser.last_name'), 'family'],
      [Sequelize.col('ModuleUser.mobile'), 'mobile'],
      [Sequelize.col('ModuleUser.email'), 'email'],
      [Sequelize.col('ModuleUser.status'), 'status'],

    ]
  },
  include:[
    {
      model:ModuleUser,
      attributes:[]
    }
  ]
});


export const ModuleSchoolTeacherAttributes = BaseModuleSchoolTeacherAttributes;

/**
 * Create new teacher if not exist
 * @author amintado@gmail.com Learniba
 * @param {{mobile, last_name, id, first_name, username: string, status}} data
 * @param {number|require} data.id
 * @param {string|require} data.username
 * @param {string|require} data.first_name
 * @param {string|require} data.last_name
 * @param {string|require} data.mobile
 * @param {number|require} data.status
 *
 *
 * @return {Promise<{model: Model<any, {teacher_id: *}>|null, errors: null|Array<object>, status: boolean}>}
 * @constructor
 */
export async function CreateUpdateTeacher(data) {
  let errors;
  let user = await CreateUpdateUser(data);
  if (user.status && user.isNew) {
    let teacherTable = new ModuleSchoolTeacher({
      teacher_id: user.model.id
    });
    try {
      await teacherTable.validate();
    } catch (error) {
      return {status: false, errors: error.errors, model: null}
    }

    await teacherTable.save();
    return {status: true, errors: null, model: teacherTable}
  }

}

export let ModuleSchoolTeacher = BaseModuleSchoolTeacher;
