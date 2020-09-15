import { Router } from "express";
import StatsService from "../../services/stats";

const route = Router();

export default () => {
  route.use("/", route);

  route.post("/dayData", async (req, res) => {
    logger.debug("Calling Day Data endpoint with body: %o", req.body);
    try {
      const StatsServiceInstance = new StatsService();
      const result = StatsServiceInstance.PoolDayData(
        "0xa478c2975ab1ea89e8196811f51a7b7ade33eb11"
      );
      return res.status(200).json({ result });
    } catch (e) {
      logger.error("🔥 error: %o", e);
      return next(e);
    }
  });
};
