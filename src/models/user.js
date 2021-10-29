import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  groups: { type: Array, required: true },
});

export default mongoose.model("User", UserSchema);
