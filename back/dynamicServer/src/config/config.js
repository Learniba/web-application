/*
 *
 *  * Copyright (c) 2021. Learniba Project, Interactive Education Platform
 *  * Programmed By: YiiMan amintado@gmail.com 09353466620
 *  * Author: Learniba TM
 *  *
 *
 */

import path from 'path';
const rootPath = path.normalize( '/..');
const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    root: rootPath,
    app: {
      name: 'learniba-dynamic-server'
    },
    port: process.env.PORT || 2000,
    db: {
      force_sync: false,//will delete all data in first execute from database
      db_schema:'development',
      db_host:'localhost',
      db_name: 'learniba',
      db_user: 'postgres',
      db_password: '',
      db_port: 5432,
      log:(l)=>{console.log(l)}
    },
    host:'localhost',
    server:{
      log:{
        level: 'info',
        prettyPrint: true
      }
    }
  },

  test: {
    root: rootPath,
    app: {
      name: 'learniba-dynamic-server'
    },
    port: process.env.PORT || 3000,
    db: {
      force_sync: true,//will delete all data in first execute from database
      db_schema:'test',
      db_host:'localhost',
      db_name: 'learniba',
      db_user: 'postgres',
      db_password: '',
      db_port: 5432,
      log:false
    },
    host:'localhost',
    server:{
      log:null
    }
  },

  production: {
    root: rootPath,
    app: {
      name: 'learniba-dynamic-server'
    },
    port: process.env.PORT || 3000,
    db: {
      db_schema:'production',
      db_host:'localhost',
      db_name: 'learniba',
      db_user: 'postgres',
      db_password: '',
      db_port: 5432,
      log:false
    },
    host:'localhost',
    server:{
      log:false
    }
  }
};

export default config[env];
