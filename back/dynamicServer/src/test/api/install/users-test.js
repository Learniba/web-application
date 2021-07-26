/*
 * Copyright (c) 2021. Learniba Project, Interactive Education Platform
 * Programmed By: YiiMan amintado@gmail.com 09353466620
 * Author: Learniba TM
 *
 */
import chance from "chance";

let response, temp;
let c = chance.Chance();


export default async (app, tap) => {
  await tap.test('( Create Or Update Users By National Code ) API test', async t => {

    response = await app.inject({
      method: 'POST',
      url: '/v1/install/users',
      payload: {
        "id": c.integer({min: 1, max: 9999}),
        "mobile": c.integer({min: 11111111111, max: 99999999999}).toString(),
        "name": c.first(),
        "family": c.last(),
        "national_id": c.integer({min: 1111111111, max: 9999999999}).toString(),
        "role": 2,
        "synced": true
      }
    });


    t.equal(response.statusCode, 200, 'returns a status code of 200')
    temp = JSON.parse(response.body);


    // < test json validation on server >
    t.test('( test json validation on server )', async tt => {
      response=await app.inject({
        method: 'POST',
        url: '/v1/install/users',
        payload: {
          "id": c.integer({min: 1, max: 9999}).toString(),
          "mobile": c.integer({min: 11111111111, max: 99999999999}).toString(),
          "name": c.first(),
          "family": c.last(),
          "national_id": c.integer({min: 1111111111, max: 9999999999}).toString(),
          "role": 2,
          "synced": true
        }
      });
      tt.equal(response.statusCode, 400, 'validate id type')

      response=await app.inject({
        method: 'POST',
        url: '/v1/install/users',
        payload: {
          "id": c.integer({min: 1, max: 9999}),
          "mobile": c.integer({min: 11111111111, max: 99999999999}),
          "name": c.first(),
          "family": c.last(),
          "national_id": c.integer({min: 1111111111, max: 9999999999}).toString(),
          "role": 2,
          "synced": true
        }
      });
      tt.equal(response.statusCode, 400, 'validate mobile type')

      response=await app.inject({
        method: 'POST',
        url: '/v1/install/users',
        payload: {
          "id": c.integer({min: 1, max: 9999}),
          "mobile": c.integer({min: 11111111111, max: 99999999999}).toString(),
          "name": c.first(),
          "family": c.last(),
          "national_id": c.integer({min: 1111111111, max: 9999999999}),
          "role": 2,
          "synced": true
        }
      });
      tt.equal(response.statusCode, 400, 'validate national id type')

      response=await app.inject({
        method: 'POST',
        url: '/v1/install/users',
        payload: {
          "id": c.integer({min: 1, max: 9999}),
          "mobile": c.integer({min: 11111111111, max: 99999999999}).toString(),
          "name": c.first(),
          "family": c.last(),
          "national_id": c.integer({min: 11111111111, max: 99999999999}).toString(),
          "role": 2,
          "synced": true
        }
      })
      tt.equal(response.statusCode, 400, 'validate national id length')

      response=await app.inject({
        method: 'POST',
        url: '/v1/install/users',
        payload: {
          "id": c.integer({min: 1, max: 9999}),
          "mobile": c.integer({min: 1111111111, max: 9999999999}).toString(),
          "name": c.first(),
          "family": c.last(),
          "national_id": c.integer({min: 1111111111, max: 9999999999}).toString(),
          "role": 2,
          "synced": true
        }
      });
      tt.equal(response.statusCode, 400, 'validate mobile length')


    })


    // </ test json validation on server >

    t.equal(temp.status, true, 'user saved in database');


    response = await app.inject({
      method: 'POST',
      url: '/v1/install/users',
      payload: {
        "id": c.integer({min: 1, max: 9999}),
        "mobile": c.integer({min: 11111111111, max: 99999999999}).toString(),
        "name": c.first(),
        "family": c.last(),
        "national_id": c.integer({min: 1111111111, max: 9999999999}).toString(),
        "role": 2,
        "synced": true
      }
    });
    t.equal(response.statusCode, 200, 'returns a status code of 200')
    temp = JSON.parse(response.body);
    t.equal(temp.status, true, 'user saved in database');

  })


  await tap.test('( Create Or Update Users By ID ) API test', async t => {
    // < get list of saved users >
    response = await app.inject({
      method: 'GET',
      url: '/v1/install/users'
    })
    let tmp;
    tmp=await response.body;
    // </ get list of saved users >
    response = await app.inject({
      method: 'POST',
      url: '/v1/install/user/'+tmp[0].id,
      payload: {
        "id": c.integer({min: 1, max: 9999}),
        "mobile": c.integer({min: 11111111111, max: 99999999999}).toString(),
        "name": c.first(),
        "family": c.last(),
        "national_id": c.integer({min: 1111111111, max: 9999999999}).toString(),
        "role": 2,
        "synced": true
      }
    });


    t.equal(response.statusCode, 200, 'returns a status code of 200 with valid data')
    temp = JSON.parse(response.body);


    // < test json validation on server >
    t.test('( test json validation on server )', async tt => {
      response=await app.inject({
        method: 'POST',
        url: '/v1/install/user/'+tmp[0].id,
        payload: {
          "id": c.integer({min: 1, max: 9999}).toString(),
          "mobile": c.integer({min: 11111111111, max: 99999999999}).toString(),
          "name": c.first(),
          "family": c.last(),
          "national_id": c.integer({min: 1111111111, max: 9999999999}).toString(),
          "role": 2,
          "synced": true
        }
      });
      tt.equal(response.statusCode, 400, 'validate id type')

      response=await app.inject({
        method: 'POST',
        url: '/v1/install/user/'+tmp[0].id,
        payload: {
          "id": c.integer({min: 1, max: 9999}),
          "mobile": c.integer({min: 11111111111, max: 99999999999}),
          "name": c.first(),
          "family": c.last(),
          "national_id": c.integer({min: 1111111111, max: 9999999999}).toString(),
          "role": 2,
          "synced": true
        }
      });
      tt.equal(response.statusCode, 400, 'validate mobile type')

      response=await app.inject({
        method: 'POST',
        url: '/v1/install/user/'+tmp[0].id,
        payload: {
          "id": c.integer({min: 1, max: 9999}),
          "mobile": c.integer({min: 11111111111, max: 99999999999}).toString(),
          "name": c.first(),
          "family": c.last(),
          "national_id": c.integer({min: 1111111111, max: 9999999999}),
          "role": 2,
          "synced": true
        }
      });
      tt.equal(response.statusCode, 400, 'validate national id type')

      response=await app.inject({
        method: 'POST',
        url: '/v1/install/user/'+tmp[0].id,
        payload: {
          "id": c.integer({min: 1, max: 9999}),
          "mobile": c.integer({min: 11111111111, max: 99999999999}).toString(),
          "name": c.first(),
          "family": c.last(),
          "national_id": c.integer({min: 11111111111, max: 99999999999}).toString(),
          "role": 2,
          "synced": true
        }
      })
      tt.equal(response.statusCode, 400, 'validate national id length')

      response=await app.inject({
        method: 'POST',
        url: '/v1/install/user/'+tmp[0].id,
        payload: {
          "id": c.integer({min: 1, max: 9999}),
          "mobile": c.integer({min: 1111111111, max: 9999999999}).toString(),
          "name": c.first(),
          "family": c.last(),
          "national_id": c.integer({min: 1111111111, max: 9999999999}).toString(),
          "role": 2,
          "synced": true
        }
      });
      tt.equal(response.statusCode, 400, 'validate mobile length')


    })


    // </ test json validation on server >

    t.equal(temp.status, true, 'user saved in database');


    response = await app.inject({
      method: 'POST',
      url: '/v1/install/user/'+tmp[0].id,
      payload: {
        "id": c.integer({min: 1, max: 9999}),
        "mobile": c.integer({min: 11111111111, max: 99999999999}).toString(),
        "name": c.first(),
        "family": c.last(),
        "national_id": c.integer({min: 1111111111, max: 9999999999}).toString(),
        "role": 2,
        "synced": true
      }
    });
    t.equal(response.statusCode, 200, 'returns a status code of 200')
    temp = JSON.parse(response.body);
    t.equal(temp.status, true, 'user saved in database');

  })




  await tap.test('( List of Users ) API test', async t => {

    response = await app.inject({
      method: 'GET',
      url: '/v1/install/users'
    })

    t.equal(response.statusCode, 200, 'returns a status code of 200');
    t.equal(JSON.parse(response.body).length>2,true , 'users saved correctly');


  })

  await tap.test('( Delete User ) API test', async t => {

    response = await app.inject({
      method: 'GET',
      url: '/v1/install/users'
    })
    temp = JSON.parse(response.body);
    const count = temp.length;
    response = await app.inject({
      method: 'DELETE',
      url: '/v1/install/user/' + temp[0].id
    })

    temp = JSON.parse(response.body);
    t.equal(response.statusCode, 200, 'returns a status code of 200')
    t.equal(temp.status, true, 'Success From Server');

    response = await app.inject({
      method: 'GET',
      url: '/v1/install/users'
    })
    temp = JSON.parse(response.body);

    t.equal(count - 1, temp.length, 'Data checked and deleted correctly');
  })

  await tap.test('( Get User ) API test', async t => {
    response = await app.inject({
      method: 'GET',
      url: '/v1/install/users'
    });

    temp = await JSON.parse(response.body);

    response = await app.inject({
      method: 'GET',
      url: '/v1/install/user/' + temp[0].id
    })
    temp = await JSON.parse(response.body);
    if (temp.id) {
      t.pass('Get Single User Passed')
    }
  })

  // await tap.test('( Update User',async t=>{
  //   response = await app.inject({
  //     method: 'PUT',
  //     url: '/v1/install/user/'
  //   });
  //
  //   temp =await JSON.parse(response.body);
  //
  // })
}
