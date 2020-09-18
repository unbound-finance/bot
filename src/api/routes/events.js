import { Router } from "express";
import { getAllEvents } from "../../services/events";
import logger from "../../loaders/logger";

const route = Router();

route.get("/events", async (req, res, next) => {
  try {
    const result = await getAllEvents();
    return res.status(200).send(result);
  } catch (e) {
    logger.error("🔥 error: %o", e);
    return next(e);
  }
});

export default route;
