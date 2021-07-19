import Sequelize from './helpers/sequelize.js';
import configs from './config/config.js';
import RoutersHandler from "./routs/RoutersHandler.js";
import fastify from 'fastify'

let app = fastify({logger: true})
// Declare a route


// Create REST resource
RoutersHandler(app,Sequelize);


// Create database and listen
Sequelize
  .sync(
    {
      force: true,
      // logging: console.log
    }
  )
  .then(function (e) {

    app.listen(configs.port)

  })
  .catch((error) => {
    console.error(error)
  });



