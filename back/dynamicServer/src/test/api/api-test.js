/*
 * Copyright (c) 2021. Learniba Project, Interactive Education Platform
 * Programmed By: YiiMan amintado@gmail.com 09353466620
 * Author: Learniba TM
 *
 */

import userTest from "./install/users-test.js";

export default async (app,tap)=>{
    await tap.test('( installer ) API\'s tests', async t => {

    await userTest(app,t);
    tap.pass('( user API unit Passed )')

  })

}
