import express from "express";
import { config } from "dotenv";
import paymentroutes from "./routes/paymentroutes.js";
import cors from "cors";

config({ path: "./config/config.env" });

export const app = express();

// cors ka use ham kisi or origin se kisi or origin me karte hai
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extends:true }))

app.use("/api", paymentroutes);

app.get("/api/getkey",(req,res)=>
    res.status(200).json({ key: process.env.RAZORPAY_API_KEY })
);