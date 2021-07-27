/*
 *
 *  * Copyright (c) 2021. Learniba Project, Interactive Education Platform
 *  * Programmed By: YiiMan amintado@gmail.com 09353466620
 *  * Author: Learniba TM
 *  *
 *
 */
import {CreateUpdateTeacher, ModuleSchoolTeacher,ParseTeachersExcel, ModuleSchoolTeacherConst} from "../../models/ModuleSchoolTeacher.js";
import chance from "chance";
import {ModuleUser} from "../../models/ModuleUser.js";
import fs from "fs"
import util from "util"
import path from "path"
import {pipeline} from 'stream'
import ExcelParser from "../../helpers/ExcelParser.js";
import Variables from "../../helpers/Variables.js";
import diff_json from "schema-inspector"

const pump = util.promisify(pipeline)
//this is test comment
export default function (fastify, db) {
  let c = chance.Chance();
  /**
   * @input Data is Like :
   * {
        "id": 27,
        "mobile": "mobile number",
        "name": "name",
        "family": "family",
        "national_id": "nation code",
    }
   */
  fastify.post('/v1/install/teachers', async (req, res) => {
    let body = req.body;
    const model = await CreateUpdateTeacher({
      id: body.id,
      username: body.national_id,
      first_name: body.name,
      last_name: body.family,
      mobile: body.mobile,
      status: ModuleSchoolTeacherConst.STATUS_ACTIVE,
    });
    return {
      status: model.status,
      errors: model.errors
    }

  });

  fastify.get('/v1/install/teachers', async (req, res) => {
    let model;
    model = await ModuleSchoolTeacher.scope(ModuleSchoolTeacherConst.Scopes.Public_users).findAll({
      raw: true
    });
    console.log(model)
    Object.keys(model).map(
      function (object) {
        model[object]["synced"] = true
      });
    return model
  })

  fastify.get('/v1/install/teacher/:id', async (req, res) => {
    let model;
    model = (await ModuleSchoolTeacher.scope(ModuleSchoolTeacherConst.Scopes.Public_users).findOne({
      where: {
        teacher_id: req.params.id
      }
    })).toJSON();

    if (model === null) {
      res.callNotFound();
    } else {
      model.synced = 1;

    }
    return model
  })

  fastify.post('/v1/install/teachers/upload', async (req, res) => {

    const data = await req.file()

    data.filename = './test.xlsx'



    await pump(data.file, fs.createWriteStream(data.filename))

    await ParseTeachersExcel(data.filename)

    return {status: true}
  })
}
