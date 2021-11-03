import mongoose from "mongoose";

export const expenseSchema = new mongoose.Schema({
  value: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    enum: [
      "Entertainment",
      "Food and Drink",
      "Home",
      "Life",
      "Transportation",
      "Uncategorised",
      "Utilities",
    ],
    required: true,
  },
  spender: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  ],
  splitters: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: [],
      required: true,
    },
  ],
});

export default mongoose.model("Expense", expenseSchema);
