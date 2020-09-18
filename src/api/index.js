import { Router } from "express";
import stats from "./routes/stats";
import events from "./routes/events";

const route = Router();

route.use("/test", stats);
route.use("/", events);

export default route;
