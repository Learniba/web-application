/*
 *
 *  * Copyright (c) 2021. Learniba Project, Interactive Education Platform
 *  * Programmed By: YiiMan amintado@gmail.com 09353466620
 *  * Author: Learniba TM
 *  *
 *
 */

import {BaseModuleSchoolTeacher, BaseModuleSchoolTeacherAttributes} from "./base/BaseModuleSchoolTeacher.js";
import {CreateUpdateUserByNationalCode, ModuleUser, ModuleUserConst} from "./ModuleUser.js";
import Model from "sequelize/lib/model.js"
import Variables from "../helpers/Variables.js";
import {Sequelize} from "sequelize";
import ExcelParser from "../helpers/ExcelParser.js";
import diff_json from "schema-inspector";

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
  include: [
    {
      model: ModuleUser,
      attributes: []
    }
  ]
});


export const ModuleSchoolTeacherAttributes = BaseModuleSchoolTeacherAttributes;

/**
 * Create new teacher if not exist
 * @author amintado@gmail.com Learniba
 * @param {{mobile, last_name, id, first_name, username: string, status}} data
 * @param {number|require} data.id
 * @param {string|require} data.username  user national id is as username
 * @param {string|require} data.first_name
 * @param {string|require} data.last_name
 * @param {string|require} data.mobile
 * @param {number|require} data.status
 * @param {number|require} data.status
 *
 *
 * @return {Promise<{model: Model<any, {teacher_id: *}>|null, errors: null|Array<object>, status: boolean}>}
 * @constructor
 */
export async function CreateUpdateTeacher(data) {
  let errors;
  let user = await CreateUpdateUserByNationalCode(data);
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


async function CreateUpdateTeacherWithSSN(){

}


/**
 * this will parse teachers excel and save errors in an temp file with name (teachers_excel_errors) that will be expire an 4 hour
 *
 * if any error exist in data, this function will generate another excel file with errors in temp folder with name (teachers_excel_errors.xls) that will expire after 4 hour
 * then save validate data to database
 *
 *
 * @param fileLocation
 * @return {Promise<{message: string, status: boolean}>}
 * @constructor
 */
export async function ParseTeachersExcel(fileLocation) {
  // < define variables >

  let excel;
  excel = new ExcelParser(fileLocation);
  excel = await excel.load_sheet(0, [
    'national_id',
    'name',
    'family',
    'mobile',
    'gender'
  ]);
  let summary_validation_output = {
    "error_rows": [],
    "count": 0
  };
  let validation_schema = {
    type: 'object',
    properties: {
      "mobile": {
        type: 'string',
        minLength: 11,
        maxLength: 14,
        roles: ['trim'],
        code: 'mobile'
      },
      "name": {
        type: 'string',
        minLength: 3,
        roles: ['trim'],
        code: 'name'
      },
      "family": {
        type: 'string',
        minLength: 3,
        roles: ['trim'],
        code: 'family'
      },
      "national_id":
        {
          type: 'string',
          minLength: 10,
          maxLength: 10,
          exec: function (schema, nation) {
            if (!Variables.isValidIranianNationalCode(nation)) {
              this.report('nation code is not validate')
            }
          },
          code: 'national_id'
        },
      "gender": {type: 'number', min: 1, max: 2, def: 1, code: 'gender'}
    }

  };

  // </ define variables >

  if (typeof excel === "object" && excel.length > 1) {

    // < check excel rows >

    await excel.forEach((value, index) => {
      if (index === 0) {
        return;
      }
      let result;
      result = diff_json.validate(validation_schema, value);
      if (!result.valid) {
        result.error.forEach((errorValue, errorIndex) => {
          let single_validate_output = {
            national_id: {
              "text": '',
              "status": "ok",
              "layout": "ltr"
            },
            name: {
              "text": '',
              "status": "ok",
              "layout": "rtl"
            },
            family: {
              "text": '',
              "status": "ok",
              "layout": "rtl"
            },
            mobile: {
              "text": '',
              "status": "ok",
              "layout": "ltr"
            },
            gender: {
              "text": '',
              "status": "ok",
              "layout": "rtl"
            }
          };
          let has_error = false;
          switch (true) {
            case errorValue.code === 'national_id':
              has_error = true;
              single_validate_output.national_id.text = errorValue.message;
              single_validate_output.national_id.status = 'error';
              break;
            case errorValue.code === 'name':
              has_error = true;
              single_validate_output.name.text = errorValue.message;
              single_validate_output.name.status = 'error';
              break;
            case errorValue.code === 'family':
              has_error = true;
              single_validate_output.family.text = errorValue.message;
              single_validate_output.family.status = 'error';
              break;
            case errorValue.code === 'mobile':
              has_error = true;
              single_validate_output.mobile.text = errorValue.message;
              single_validate_output.mobile.status = 'error';
              break;
            case errorValue.code === 'gender':
              has_error = true;
              single_validate_output.gender.text = errorValue.message;
              single_validate_output.gender.status = 'error';
              break;
          }

          if (has_error) {
            summary_validation_output.error_rows.push(single_validate_output);
            summary_validation_output.count++;
          }
        })
      }else{
        // < save in database >
            CreateUpdateTeacher({
              mobile:value.mobile,
              name:value.name,
              username:value.national_id,
              gender:value.gender
            })
        // </ save in database >
      }
    });

    // </ check excel rows >

    // < return result >

    if (summary_validation_output.count > 0) {
      Variables.create_temp_json('teachers_excel_errors', summary_validation_output, 4)
      return {status: false, message: 'some rows has error'}
    } else {
      return {status: true, message: ''}
    }

    // </ return result >


  } else {
    return {status: false, message: 'excel file is empty'}
  }
}

export let ModuleSchoolTeacher = BaseModuleSchoolTeacher;
