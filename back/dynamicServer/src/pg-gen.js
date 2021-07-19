import {generate} from "pg-generator";
import chance from "chance"


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

console.info('All Done')



