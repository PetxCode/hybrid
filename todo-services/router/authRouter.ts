import express, { Router } from "express";
import { getUsers } from "../controller/authControllerService";

const router: Router = express.Router();

router.route("/").get(getUsers);

export default router;
