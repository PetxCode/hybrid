import express, { Application, Request, Response } from "express";
import cors from "cors";
import { iUser } from "./utils/interfaces";
import auth from "./router/authRouter";

const port: number = 3666;
const app: Application = express();

let data: iUser[] = [];
app
  .use(cors())
  .use(express.json())

  .get("/", (req: Request, res: Response): Response => {
    try {
      return res.status(200).json({
        message: "You just hit the Auth-Service Endpoint",
      });
    } catch (error) {
      return res.status(404).json({
        message: "Not Found",
        data: error,
      });
    }
  })

  .use("/api/auth", auth);

const server = app.listen(port, () => {
  console.log("server is live");
});

process.on("uncaughtException", (err: any) => {
  console.log("server is shutting down becuase of uncaught exception");

  console.log("uncaughtException: ", err);

  process.exit(1);
});

process.on("unhandledRejection", (reason: any) => {
  console.log("server is shutting down becuase of unhandled-Rejection");

  console.log("unhandledRejection: ", reason);
  server.close(() => {
    process.exit(1);
  });
});
