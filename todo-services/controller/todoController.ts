import { Request, Response } from "express";
import crypto from "crypto";
import moment from "moment";
// import { db } from "../utils/db";
let db: iTask[] = [];
import { iTask } from "../utils/interfaces";

export const createTask = (req: Request, res: Response): Response => {
  try {
    const { title } = req.body;
    const date = Date.now();
    const ID = crypto.randomUUID();

    const newTask: iTask = {
      id: ID,
      title,
      date: moment(date).format("LLLL"),
      time: moment(date).fromNow(),
      complete: false,
    };

    db.push(newTask);

    return res.status(201).json({
      message: "Task created",
      data: newTask,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Task connot be created",
    });
  }
};

export const singleTask = (req: Request, res: Response): Response => {
  try {
    const { id } = req.params;

    const task = db.filter((el: iTask) => {
      return el.id === id;
    });

    return res.status(200).json({
      message: "Task created",
      data: task,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Task connot be created",
    });
  }
};

export const deleteTask = (req: Request, res: Response): Response => {
  try {
    const { id } = req.params;

    db = db.filter((el: iTask) => {
      return el.id !== id;
    });

    return res.status(200).json({
      message: "Task deleted",
      data: db,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Task connot be created",
    });
  }
};

export const updateTask = (req: Request, res: Response): Response => {
  try {
    const { id } = req.params;

    const task = db.filter((el: iTask) => {
      return el.id === id ? (el.complete = true) : null;
    });

    return res.status(201).json({
      message: "Task updated",
      data: task,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Task connot be created",
    });
  }
};

export const viewTask = (req: Request, res: Response): Response => {
  try {
    return res.status(200).json({
      message: "View Tasks",
      data: db,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Task connot be viewed",
    });
  }
};
