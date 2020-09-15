import { Router } from "express";
import stats from "./routes/stats";

// guaranteed to get dependencies
export default () => {
  const app = Router();
  stats();

  return app;
};
