import express from "express";
import * as dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config()

connectDB()

const app=express();

app.use(cors({
    origin:process.env.FRONTEND_URL
}))

app.use("/api/products", productRoutes)

app.use(notFound)

app.use(errorHandler)

app.get("/", (req,res)=>{
    res.send("API is running")
});

const PORT=process.env.PORT;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))
















