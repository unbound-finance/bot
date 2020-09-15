import express from "express";
import bodyParser from "body-parser";

import config from "./config";
import routes from "./api/index";
import Logger from "./loaders/logger";

async function startServer() {
  const app = express();

  // support parsing of application/json type post data
  app.use(bodyParser.json());

  //support parsing of application/x-www-form-urlencoded post data
  app.use(bodyParser.urlencoded({ extended: true }));

  //routes
  app.get("/", async (req, res) => {
    res.send("Welcome to unbound");
  });

  app.use("/", routes);

  app.listen(config.port, (err) => {
    if (err) {
      Logger.error(err);
      process.exit(1);
    }
    Logger.info(`
        ################################################
        🛡️  Server listening on port: ${config.port} 🛡️ 
        ################################################
      `);
  });
}

startServer();
