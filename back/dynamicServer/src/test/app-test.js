/*
 * Copyright (c) 2021. Learniba Project, Interactive Education Platform
 * Programmed By: YiiMan amintado@gmail.com 09353466620
 * Author: Learniba TM
 *
 */

import {test} from "tap"
import tap from "tap"
import app from "./../app.js"
import chance from "chance";
import config from "../config/config.js";
let response,temp;
let c=chance.Chance();

import apiTest from "./api/api-test.js"

switch (process.env.NODE_ENV) {
  case 'test':
    tap.equal(process.env.NODE_ENV,'test','system environment is under test')
    break
  case 'production':
    tap.equal(process.env.NODE_ENV,'production','system environment is under production')
    break
  case 'development':
    tap.equal(process.env.NODE_ENV,'development','system environment is under development')
    break
  default:
    console.log(process.env.NODE_ENV)
}

tap.equal(config.db.db_schema,'test','schema = test')

await test('( Test Learniba Core ) ', async t => {
   await apiTest(app,t);
})

tap.pass('( API unit Passed )')
//
// app.shutdown = function() { process.exit(0); }
// app.shutdown();
