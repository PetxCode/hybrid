import express, { Router } from "express";
import {
  createTask,
  deleteTask,
  singleTask,
  updateTask,
  viewTask,
} from "../controller/todoController";

const router: Router = express.Router();

router.route("/").get(viewTask);
router.route("/single/:id").get(singleTask);
router.route("/create").post(createTask);
router.route("/update/:id").patch(updateTask);
router.route("/delete/:id").delete(deleteTask);

export default router;
