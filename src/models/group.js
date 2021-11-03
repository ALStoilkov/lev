import mongoose, { Schema } from "mongoose";
import { expenseSchema } from "./expenses";

const groupSchema = new Schema({
  name: { type: String, required: true },
  expenses: { type: [expenseSchema], default: [], required: true },
  members: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  ],
});
