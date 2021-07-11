import jsonServer from 'json-server';
const server = jsonServer.create();
const router = jsonServer.router('./db.json');
import routes from "./routes.json";
const middlewares = jsonServer.defaults();
import chance from "chance"
var c=chance.Chance();
const port = 2000;




server.use(jsonServer.bodyParser);
server.use(jsonServer.rewriter(routes));

import InstallRouters from "./Routes/Install.js";
InstallRouters(server,c);

server.use(middlewares);
server.use(router);//data saved in db.json


server.listen(port);