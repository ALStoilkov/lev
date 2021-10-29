import express from "express";
import cors from "cors";
import userRouter from "./services/users/index.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", userRouter);

export default app;
