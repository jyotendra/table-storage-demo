import personRoute from "./person.route";
import * as express from "express";

const allRoutes = [personRoute];
const apiRoute = express.Router();

apiRoute.use("/api", allRoutes);

export default apiRoute;