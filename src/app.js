import express from "express";
import { Router } from 'express'
import config from "./config";

import routes from './api/index'

import Logger from "./loaders/logger";

const router = Router()

async function startServer() {
  const app = express();

    //routes
    app.get('/', async (req, res) => {
      res.send('Welcome to bharatX');
    });

    app.use('/', routes);

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
