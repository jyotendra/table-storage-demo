import { Router } from "express";
import { addPerson } from "../controllers/person.controller";

const router = Router();

router.post("/create-person", addPerson);

export default router;
