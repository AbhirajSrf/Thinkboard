import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

// middleware
app.use(express.json()); // this middleware will parse JSON bodies: req.body
app.use(rateLimiter);

// custom middleware
// app.use((req, res, next) => {
//   console.log(`Req method is ${req.method} and req url is ${req.url}`)
//   next()
// })

app.use("/api/notes", notesRoutes);

connectDB().then(() => {
  app.listen(port, () => {
    console.log("Server connected at:", port);
  });
});
