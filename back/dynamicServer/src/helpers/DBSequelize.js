import {Sequelize} from "sequelize";
import configs from '../config/config.js'

export default new Sequelize(configs.db.db_name, configs.db.db_user, configs.db.db_password,{
  schema: configs.db.db_schema,
  port: configs.db.db_port,
  dialect: 'postgres',// 'mysql'|'mariadb'|'sqlite'|'postgres'|'mssql',
  // omitNull: true
  logging:configs.db.log
});

