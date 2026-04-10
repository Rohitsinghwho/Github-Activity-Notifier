import express from "express";
import webhookRouter from "./routes/webhook.route";
const app = express();


app.use(express.raw({ type: "application/json" }));

// apis
app.use("/api/v1/webhook",webhookRouter);


app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})