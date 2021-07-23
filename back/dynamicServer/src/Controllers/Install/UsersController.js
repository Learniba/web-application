import {CreateUpdateUser, ModuleUser, ModuleUserConst} from "../../models/ModuleUser.js";
import chance from "chance";
import {ModuleAuthUser} from "../../models/ModuleAuthUser.js";
import buildRelations from "../../models/base/relations.js";
import {ModuleAuthRole} from "../../models/ModuleAuthRole.js";


export default function (fastify, db) {
  let c = chance.Chance();
  fastify.post('/v1/install/users', async (request, reply) => {
    let body = await request.body;
    // < find Saved User  >
    let model = await CreateUpdateUser({
      id: body.id,
      username: body.national_id,
      first_name: body.name,
      last_name: body.family,
      mobile: body.mobile,
      status: ModuleUserConst.STATUS_ACTIVE,
      role: body.role
    });
    if (model.status){
      return {
        status:true,
        error:model.errors,
        was_new:model.isNew
      }
    }else{
      return {
        status:false,
        error:model.errors,
        was_new:model.isNew
      }
    }
  });

  fastify.get('/v1/install/users', async (req, res) => {

    let users;

    users = await ModuleUser.findAll({
      raw: true,
      nest: true,
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
      attributes: [
        'id',
        ['first_name', 'name'],
        ['last_name', 'family'],
        ['username', 'national_id'],
        'mobile',
        [db.col('ModuleAuthUsers.ModuleAuthRole.id'), 'role']
      ]
    });
    Object.keys(users).map(
      function (object) {
        users[object]["synced"] = true
      });
    /**
     * {
        "id": 26,
        "mobile": "number",
        "name": "name",
        "family": "family",
        "national_id": "number",
        "role": 2,
        "synced": true
      },
     */
    return users;
  })

  fastify.delete('/v1/install/user/:id', async (req, res) => {
    const params = req.params;
    let model = await ModuleUser.findOne({where: {id: params.id}});
    if (model) {
      model.destroy();
    }
    return {status: true}
  })

  fastify.get('/v1/install/user/:id', async (req, res) => {
    let id = req.params.id;

    let model = await ModuleUser.scope(ModuleUserConst.Scopes.public_scope, ModuleUserConst.Scopes.include_roles).findOne(
      {
        where: {
          id: id
        }
      }
    );
    if (model) {
      return model;
    } else {
      res.callNotFound();
    }
  })

}
