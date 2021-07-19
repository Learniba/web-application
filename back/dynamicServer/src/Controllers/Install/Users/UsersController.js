import {ModuleUser,ModuleUserConst} from "../../../models/ModuleUser.js";
import chance from "chance";
import {ModuleAuthUser} from "../../../models/ModuleAuthUser.js";

export default function (fastify, db) {
  let c = chance.Chance();
  fastify.post('/v1/install/users', async (request, reply) => {
    let body = await request.body;
    let model = await ModuleUser.findOne({
      where: {
        username: body.national_id,
        // password: c.integer({min: 111111, max: 999999}),
      }
    })
    if (model === null) {
      model = await ModuleUser.create({
        username: body.national_id,
        password_hash: c.integer({min: 111111, max: 999999}),
        ssn: c.hash(),
        first_name: body.name,
        last_name: body.family,
        mobile: body.mobile,
        status: ModuleUserConst.STATUS_ACTIVE,
      });

      // < save user role  >
      let role = await ModuleAuthUser.create({
        uid: model.id,
        role: body.role
      });
      // </ save user role >

    }
    return {
      "id": model.id,
      "mobile": model.mobile,
      "name": model.first_name,
      "family": model.last_name,
      "national_id": model.username,
      "role": body.role,
      "synced": true
    }
  });


}
