import { Router } from "express";
import stats from "./routes/stats";

const route = Router()

route.use('/test', stats);

export default route;
