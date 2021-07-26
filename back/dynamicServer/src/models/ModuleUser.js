/*
 *
 *  * Copyright (c) 2021. Learniba Project, Interactive Education Platform
 *  * Programmed By: YiiMan amintado@gmail.com 09353466620
 *  * Author: Learniba TM
 *  *
 *
 */

import {BaseModuleUser, BaseModuleUserAttributes} from "./base/BaseModuleUser.js";
import Variables from "../helpers/Variables.js";
import {ModuleAuthRole} from "./ModuleAuthRole.js";
import {ModuleAuthUser} from "./ModuleAuthUser.js";
import {Sequelize} from "sequelize";
import chance from "chance"
import Model from "sequelize/lib/model.js";

export const ModuleUserAttributes = BaseModuleUserAttributes;
export const ModuleUserConst = {
  STATUS_ACTIVE: 1,
  STATUS_DE_ACTIVE: 0,
  Scopes: {
    public_scope: 'public',
    include_roles: 'with_rules'
  }
};
BaseModuleUser.addScope(ModuleUserConst.Scopes.public_scope, {
  attributes:
    {
      exclude: Variables.excludeAnd(['ssn', 'auth_key', 'password_hash', 'status']),
      include: [
        ModuleUserAttributes.id,
        ModuleUserAttributes.username,
        ModuleUserAttributes.first_name,
        ModuleUserAttributes.last_name,
        ModuleUserAttributes.email,
        ModuleUserAttributes.mobile,
        ModuleUserAttributes.date_of_birth,
        ModuleUserAttributes.gender
      ]
    }
});
BaseModuleUser.addScope(ModuleUserConst.Scopes.include_roles, {
  include: [
    {
      model: ModuleAuthUser,
      include: [
        {
          model: ModuleAuthRole,
          exclude: [],
          attributes: []
        }
      ],
      attributes: [],
      exclude: []
    },
  ],
  attributes: {
    include: [[Sequelize.col('ModuleAuthUsers.ModuleAuthRole.id'), 'role']]
  }


});

/**
 * @author amintado@gmail.com Learniba
 * @param {{mobile, last_name, id, first_name, username: string, status}} data
 * @param {number|require} data.id
 * @param {string|require} data.username
 * @param {string|require} data.first_name
 * @param {string|require} data.last_name
 * @param {string|require} data.mobile
 * @param {number|require} data.status
 * @param {number} data.role
 *
 * @return {Promise<{model: Model<any, {password_hash: Number, mobile: (string|require), last_name: (string|require), first_name: (string|require), username: (string|require|*), ssn, status: (number|require)}>|null, isNew: boolean, errors: null|Array<object>, status: boolean}>}
 * @constructor
 */
export async function CreateUpdateUserByNationalCode(data) {
  let c = chance.Chance();
  let model, isNewRecord;
  const password_hash = c.integer({min: 111111, max: 999999});
  const ssn = c.hash();


  model =await  ModuleUser.findOrBuild({
    where:{username:data.username},
    defaults:{
      username: data.username,
      password_hash: password_hash,
      ssn: ssn,
      first_name: data.first_name,
      last_name: data.last_name,
      mobile: data.mobile,
      status: data.status,
    }
  });
  try {
    await model[0].validate();
  } catch (error) {
    return {status: false, errors: error.errors,isNew:null};
  }
  isNewRecord = model[0].isNewRecord;

  await model[0].save();
  return {status: true, model: model[0],errors:null, isNew: isNewRecord};
}


/**
 * @author amintado@gmail.com Learniba
 * @param {{mobile, last_name, id, first_name, username: string, status}} data
 * @param {number|require} data.id
 * @param {string|require} data.username
 * @param {string|require} data.first_name
 * @param {string|require} data.last_name
 * @param {string|require} data.mobile
 * @param {number|require} data.status
 * @param {number} data.role
 *
 * @return {Promise<{model: Model<any, {password_hash: Number, mobile: (string|require), last_name: (string|require), first_name: (string|require), username: (string|require|*), ssn, status: (number|require)}>|null, isNew: boolean, errors: null|Array<object>, status: boolean}>}
 * @constructor
 */
export async function CreateUpdateUserByID(data) {
  let c = chance.Chance();
  let model, isNewRecord;
  const password_hash = c.integer({min: 111111, max: 999999});
  const ssn = c.hash();


  model =await  ModuleUser.findOrBuild({
    where:{id:data.id},
    defaults:{
      username: data.username,
      password_hash: password_hash,
      ssn: ssn,
      first_name: data.first_name,
      last_name: data.last_name,
      mobile: data.mobile,
      status: data.status,
    }
  });
  try {
    await model[0].validate();

  } catch (error) {
    return {status: false, errors: error.errors,isNew:null};
  }
  isNewRecord = model[0].isNewRecord;
  if (isNewRecord){
    model[0].setDataValue('id',null);
  }
  await model[0].save();
  return {status: true, model: model[0],errors:null, isNew: isNewRecord};
}



export let ModuleUser = BaseModuleUser;
