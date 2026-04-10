import express from 'express';


export const handleWebhookEvent=(req:express.Request,res:express.Response):any=>{
        try {
            const requestBody=JSON.parse(req.body.toString());
            console.log("Received webhook event:", requestBody);
            res.status(200).json({ message: "Webhook event received successfully" });
        } catch (error) {
            console.error("Error handling webhook event:", error);
            res.status(500).json({ message: "Internal Server Error" });
        }
}