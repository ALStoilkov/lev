import app from "./server.js";
import mongoose from "mongoose";
import list from "express-list-endpoints";
import createError from "http-errors";

const port = process.env.PORT || 3030;
const mongoConnection = process.env.ATLAS_URL || process.env.MONGO_LOCAL;

if (!mongoConnection) {
  createError("No mongo URL found!");
}

mongoose
  .connect(mongoConnection, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Mongo connected");
    app.listen(port, () => {
      console.table(list(app));
      console.log("Server running on " + port);
    });
  });
