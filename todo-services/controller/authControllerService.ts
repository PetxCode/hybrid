import { Request, Response } from "express";
import crypto from "crypto";
import moment from "moment";
import axios from "axios";

const url: string = "http://localhost:3666";

export const getUsers = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  try {
    const user = await axios.get(`${url}/api/auth`);

    console.log(user);

    return res.status(200).json({
      message: "Users successfully retrieved",
      data: user,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error fetching Users",
    });
  }
};
