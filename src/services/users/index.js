import { Router } from "express";
import createError from "http-errors";

import UserModel from "../../models/user.js";

const userRouter = Router();

userRouter.post("/", async (req, res, next) => {
  try {
    const newUser = new UserModel(req.body);
    const { _id } = await newUser.save();

    res.status(201).send(_id);
  } catch (error) {
    console.log(error);
    res.send(createError(500));
  }
});

// userRouter.post("/", async (req, res, next) => {
//   try {
//   } catch (error) {
//     console.log(error);
//     next(error);
//   }
// });

// userRouter.post("/", async (req, res, next) => {
//   try {
//   } catch (error) {
//     console.log(error);
//     next(error);
//   }
// });

// userRouter.post("/", async (req, res, next) => {
//   try {
//   } catch (error) {
//     console.log(error);
//     next(error);
//   }
// });

// userRouter.post("/", async (req, res, next) => {
//   try {
//   } catch (error) {
//     console.log(error);
//     next(error);
//   }
// });

export default userRouter;
