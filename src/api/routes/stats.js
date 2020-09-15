import { Router } from "express";
import StatsService from "../../services/stats";
import logger from "../../loaders/logger";

const route = Router();

route.post("/dayData", async (req, res) => {
  logger.debug("Calling Day Data endpoint with body: %o", req.body);
  console.log("Hello World");
  try {
    const StatsServiceInstance = new StatsService();
    const result = await StatsServiceInstance.PoolDayData(
      "0xa478c2975ab1ea89e8196811f51a7b7ade33eb11"
    );
    return res.status(200).send(result);
  } catch (e) {
    logger.error("🔥 error: %o", e);
    return next(e);
  }
});

export default route;
