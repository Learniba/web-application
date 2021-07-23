import {CreateUpdateTeacher, ModuleSchoolTeacher, ModuleSchoolTeacherConst} from "../../models/ModuleSchoolTeacher.js";
import chance from "chance";
import {CreateUpdateUser, ModuleUser} from "../../models/ModuleUser.js";
import fs from "fs"
import util from "util"
import path from "path"
import { pipeline } from 'stream'
const pump = util.promisify(pipeline)

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

  fastify.get('/v1/install/teachers',async (req, res) => {
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

  fastify.get('/v1/install/teacher/:id',async (req,res)=>{
    let model;
    model = (await ModuleSchoolTeacher.scope(ModuleSchoolTeacherConst.Scopes.Public_users).findOne({
      where: {
        teacher_id: req.params.id
      }
    })).toJSON();

    if(model ===null){
      res.callNotFound();
    }else{
      model.synced=1;

    }
    return model
  })

  fastify.post('/v1/install/teachers/upload',async (req,res)=>{

    const data = await req.file()

    // data.file // stream
    // data.fields // other parsed parts
    // data.fieldname
    data.filename='./test.xlsx'
    // data.encoding
    // data.mimetype

    // to accumulate the file in memory! Be careful!
    //
    // await data.toBuffer() // Buffer
    //
    // or

    await pump(data.file, fs.createWriteStream(data.filename))

    // be careful of permission issues on disk and not overwrite
    // sensitive files that could cause security risks

    // also, consider that if the file stream is not consumed, the promise will never fulfill


    return {status:true}
  })
}
