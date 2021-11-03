import { Router } from "express";
import createError from "http-errors";

import UserModel from "../../models/user.js";

const usersRouter = Router();

usersRouter.post("/login", async (req, res, next) => {
  try {
    const newUser = new UserModel(req.body);
    const { _id } = await newUser.save();

    res.status(201).send(_id);
  } catch (error) {
    console.log(error);
    res.send(createError(500));
  }
});

usersRouter.get("/:id", async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.params.id);
    if (!user) next(createError(404, `ID ${req.params.id} was not found`));
    else res.status(200).send(user);
  } catch (error) {
    next(error);
  }
});

usersRouter.put("/:id", async (req, res, next) => {
  try {
    const updateUser = await UserModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        runValidators: true,
        new: true,
      }
    );
    res.status(201).send(updatedUser);
  } catch (error) {
    next(error);
  }
});

usersRouter.delete("/:id", async (req, res, next) => {
  try {
    const deleteUser = await UserModel.findByIdAndDelete(req.params.id);
    if (deleteUser) res.status(204).send("Profile deleted");
    else next(createError(400, "Bad Request"));
  } catch (error) {
    next(error);
  }
});

export default usersRouter;
