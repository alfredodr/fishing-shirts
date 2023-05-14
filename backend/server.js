import express from "express";
import * as dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import mail from "@sendgrid/mail";

dotenv.config();

connectDB();

const app = express();

mail.setApiKey(process.env.SENDGRID_API_KEY);

app.use(express.json());

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
  })
);

app.use("/api/products", productRoutes);

app.use("/api/categories", categoryRoutes);

app.use("/api/mail", contactRoutes);

app.use(notFound);

app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("API is running");
});

const PORT = process.env.PORT;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
