import { Router } from "express";
import * as testController from "../../../controllers/api/v1/testController.mjs";

const testRouter = Router();

testRouter.get("/", testController.testGet);

testRouter.post("/", testController.testPost);

export default testRouter;