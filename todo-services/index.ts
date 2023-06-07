import express, { Application } from "express";
import cors from "cors";
import todo from "./router/todoRouter";
import auth from "./router/authRouter";

const port: number = 2277;
const app: Application = express();

app
  .use(cors())
  .use(express.json())

  .use("/api/todo", todo)
  .use("/api/auth", auth);

const server = app.listen(port, () => {
  console.log("");
  console.log("todo server is ready to Rock🚀🚀🚀");
});

process.on("uncaughtException", (err: any) => {
  console.log("server is shutting down because of uncaught exception");

  console.log("uncaughtException: ", err);

  process.exit(1);
});

process.on("unhandledRejection", (reason: any) => {
  console.log("server is shutting down because of unhandled rejection");

  console.log("unhandledRejection: ", reason);

  server.close(() => {
    process.exit(1);
  });
});
