import { Router } from "express";
import createError from "http-errors";

import ExpensesModel from "../../models/expenses.js";

const expensesRouter = Router();

expensesRouter.post("/", async (req, res, next) => {
  try {
    const expense = new ExpensesModel(req.body);
    const newExpense = await expense.save();

    res.status(201).send(newExpense);
  } catch (error) {
    console.log(error);
    res.send(createError(500));
  }
});

expensesRouter.get("/:id", async (req, res, next) => {
  try {
    const expense = await ExpensesModel.findById(req.params.id);
    if (!expense) next(createError(404, `ID ${req.params.id} was not found`));
    else res.status(200).send(expense);
  } catch (error) {
    next(error);
  }
});

expensesRouter.get("/", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
}),
  expensesRouter.get("/:id", async (req, res, next) => {
    try {
      const expense = await ExpensesModel.findById(req.params.id);
      if (!expense) next(createError(404, `ID ${req.params.id} was not found`));
      else res.status(200).send(expense);
    } catch (error) {
      next(error);
    }
  });

expensesRouter.put("/:id", async (req, res, next) => {
  try {
    const updatedExpense = await ExpensesModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        runValidators: true,
        new: true,
      }
    );
    res.status(201).send(updatedExpense);
  } catch (error) {
    next(error);
  }
});

expensesRouter.delete("/:id", async (req, res, next) => {
  try {
    const expense = await ExpensesModel.findByIdAndDelete(req.params.id);
    if (expense) res.status(204).send("Profile deleted");
    else next(createError(400, "Bad Request"));
  } catch (error) {
    next(error);
  }
});

export default expensesRouter;
