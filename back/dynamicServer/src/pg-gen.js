import {generate} from "pg-generator";
import chance from "chance"
import config from "./config/config.js"

if(config.db.force_sync){
console.log('\x1b[33m%s\x1b[0m','(force_sync) is enable in "./config/config.js"-> db  please disable it first and try again')
  throw '';
}

var c = chance.Chance();
const o2m = (r) => {
  const relation = r;
  const sourceTable = relation.sourceTable.name;
  const targetTable = relation.targetTable.name;
  return sourceTable + '->' + targetTable + '_' + c.integer({min: 1, max: 10000})
}
const m2o = (r) => {
  const relation = r;
  const sourceTable = relation.sourceTable.name;
  const targetTable = relation.targetTable.name;


  return sourceTable + '->' + targetTable + '_' + c.integer({min: 1, max: 10000})
}
const m2m = (r) => {
  const relation = r;
  const sourceTable = relation.sourceTable.name;
  const targetTable = relation.targetTable.name;
  const sourcePKColumn = relation.sourceTable.primaryKey.name;
  const targetPKColumn = relation.targetTable.primaryKey.name;


  return sourceTable + '(' + sourcePKColumn + ')' + '->' + targetTable + '(' + targetPKColumn + ')_' + c.integer({
    min: 1,
    max: 10000
  })
}

function gOptions(directory_name='',clear=true){
  return {
    outDir: "./models/"+directory_name,
    clear: clear,
    addSchemaName: false,
    relationNameFunctions: {
      o2m: (relation) => o2m(relation),
      m2o: (relation) => m2o(relation),
      m2m: (relation) => m2m(relation),
    },
    connection: {
      database: "learniba",
      host: "localhost",
      post: 5432,
      user: "postgres",
      password: null
    },
    schemas: [
      // 'production',
      // 'test',
      'development'
    ],
    targetDir: './model',
    templateDir: './model/temp'
  }
}
const template="./generators/pg/dist";
console.clear();
await generate(
  template,
  // "sequelize6",
  gOptions('base')
);
console.info('Base Models Created')
await generate(
  template,
  "models",
  gOptions('temp',false)
);
console.info('Models Created')

console.info('All Done');


console.log('\x1b[36m%s\x1b[0m', 'Please Node: For prevent replace your model files with generated version,we created two file for every table.');
console.log('\x1b[36m%s\x1b[0m', 'Master model file is under "./model/base/" directory.please dont touch this files,because this files will be replaced in every generation');
console.log('\x1b[36m%s\x1b[0m', 'Slave version of files that extended from Master model will generated under "./model/temp" directory. you can move this generated files to "./model" directory if need');
console.log('\x1b[36m%s\x1b[7m','If you dont need slave files, you must delete "./model/temp" directory')



