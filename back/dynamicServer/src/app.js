import Sequelize from './helpers/DBSequelize.js';
import configs from './config/config.js';
import RoutersHandler from "./routs/RoutersHandler.js";
import fastify from 'fastify'
import buildRelations from "./models/base/relations.js";
import fastifyMultipart from "fastify-multipart"
let app = fastify({
  logger: configs.server.log
})
// Declare a route

export class db{}
// Create REST resource
RoutersHandler(app, Sequelize);
app.addHook('onRequest', (request, reply, done) => {
  reply.headers({
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin':'http://localhost:8080',
    'origin':'*',
    'Author':'Larniaba'
  });
  // Some code
  done()
})
//parse option request from vuejs
app.options('*', async (req, res) => {
  return null;
})
//accept uploaded file
// app.addContentTypeParser('*', function (req, done) {
//   done()
// })
app.register(fastifyMultipart)
const server=await Sequelize
  .sync(
    {
      force: configs.db.force_sync ? configs.db.force_sync : false,
      // match: /_test$/
      logging: false,
      // raw:true,
      // nest:false,
      truncate:false
    }
  );
buildRelations();
export default app;

// Create database and listen







