import dotenv from "dotenv";
dotenv.config();
import express from "express";
import webhookRouter from "./routes/webhook.route";
const app = express();


// api level middlewares
app.use("/webhook",express.raw({ type: "application/json" }),webhookRouter);


// app level middlewares
app.use(express.json());

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})