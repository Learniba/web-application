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
      db_schema:'development',
      db_host:'localhost',
      db_name: 'learniba',
      db_user: 'postgres',
      db_password: '',
      db_port: 5432
    },
    host:'localhost',
  },

  test: {
    root: rootPath,
    app: {
      name: 'learniba-dynamic-server'
    },
    port: process.env.PORT || 3000,
    db: {
      db_schema:'test',
      db_host:'localhost',
      db_name: 'learniba',
      db_user: 'postgres',
      db_password: '',
      db_port: 5432
    },
    host:'localhost',
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
      db_port: 5432
    },
    host:'localhost',
  }
};

export default config[env];
