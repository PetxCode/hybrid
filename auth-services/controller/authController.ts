import { Request, Response } from "express";
import { iUser } from "../utils/interfaces";
import crypto from "crypto";

let data: iUser[] = [];

export const register = (req: Request, res: Response): Response => {
  try {
    const { name, email, password } = req.body;

    const ID: string = crypto.randomUUID();
    const newUser = { id: ID, name, email, password };
    data.push(newUser);

    return res.status(201).json({
      message: "created successfully",
      data: newUser,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Not Found",
      data: error.message,
    });
  }
};

export const getUsers = (req: Request, res: Response): Response => {
  try {
    return res.status(200).json({
      message: "view users",
      data,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Not Found",
      data: error,
    });
  }
};

export const singleUser = (req: Request, res: Response): Response => {
  try {
    const { id } = req.params;

    const singleUser = data.filter((el: iUser) => {
      return el.id === id;
    });

    return res.status(200).json({
      message: "view users",
      data: singleUser,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Not Found",
      data: error,
    });
  }
};

export const loginUser = (req: Request, res: Response): Response => {
  try {
    const { email, password } = req.body;

    data.filter((el) => {
      if (el.email === email) {
        return res.status(201).json({
          message: "login user",
          data: el,
        });
      } else {
        return res.status(404).json({
          message: "user not found",
        });
      }
    });

    return res.status(200).json({
      message: "LOGIN",
    });
  } catch (error) {
    return res.status(404).json({
      message: "Not Found",
      data: error,
    });
  }
};
