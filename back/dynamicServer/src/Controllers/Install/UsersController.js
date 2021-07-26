/*
 *
 *  * Copyright (c) 2021. Learniba Project, Interactive Education Platform
 *  * Programmed By: YiiMan amintado@gmail.com 09353466620
 *  * Author: Learniba TM
 *  *
 *
 */

import {
  CreateUpdateUserByID,
  CreateUpdateUserByNationalCode,
  ModuleUser,
  ModuleUserConst
} from "../../models/ModuleUser.js";
import chance from "chance";
import {ModuleAuthUser} from "../../models/ModuleAuthUser.js";
import {ModuleAuthRole} from "../../models/ModuleAuthRole.js";
import diff_json from "schema-inspector"

export default function (fastify, db) {
  let c = chance.Chance();
  /**
   * update user with id
   */
  fastify.post('/v1/install/user/:id', async (request, reply) => {
    // < check parameters >
    let body = await request.body;

    const validation_data = {
      type: 'object',
      properties: {
        "id": {type: 'number'},
        "mobile": {type: 'string', minLength: 11, maxLength: 14},
        "name": {type: 'string', minLength: 3},
        "family": {type: 'string', minLength: 3},
        "national_id": {type: 'string', minLength: 10, maxLength: 10},
        "role": {type: 'number'}
      }

    };
    let validation_result = await diff_json.validate(validation_data, body);
    if (!validation_result.valid) {
      reply.code(400).send(validation_result.format());
      return;
    }
    // </ check parameters >


    // < Create Or Update Exist User >
    let model = await CreateUpdateUserByID({
      id: body.id,
      username: body.national_id,
      first_name: body.name,
      last_name: body.family,
      mobile: body.mobile,
      status: ModuleUserConst.STATUS_ACTIVE,
      role: body.role,
      synced: {optional: true, type: 'boolean'}
    });
    // </ Create Or Update Exist User >

    if (model.status) {
      return {
        status: true,
        error: model.errors,
        was_new: model.isNew
      }
    } else {
      return {
        status: false,
        error: model.errors,
        was_new: model.isNew
      }
    }
  })

  /**
   * add or update user with username (national id)
   */
  fastify.post('/v1/install/users', async (request, reply) => {
    // < check parameters >
    let body = await request.body;

    const validation_data = {
      type: 'object',
      properties: {
        "id": {type: 'number'},
        "mobile": {type: 'string', minLength: 11, maxLength: 14},
        "name": {type: 'string', minLength: 3},
        "family": {type: 'string', minLength: 3},
        "national_id": {type: 'string', minLength: 10, maxLength: 10},
        "role": {type: 'number'}
      }

    };
    let validation_result = await diff_json.validate(validation_data, body);
    if (!validation_result.valid) {
      reply.code(400).send(validation_result.format());
      return;
    }
    // </ check parameters >

    // < Create Or Update Exist User >
    let model = await CreateUpdateUserByNationalCode({
      id: body.id,
      username: body.national_id,
      first_name: body.name,
      last_name: body.family,
      mobile: body.mobile,
      status: ModuleUserConst.STATUS_ACTIVE,
      role: body.role,
      synced: {optional: true, type: 'boolean'}
    });
    // </ Create Or Update Exist User >

    if (model.status) {
      return {
        status: true,
        error: model.errors,
        was_new: model.isNew
      }
    } else {
      return {
        status: false,
        error: model.errors,
        was_new: model.isNew
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
      let deleted=await model.destroy();
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
