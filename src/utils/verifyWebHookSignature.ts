import express from "express";
import crypto from "crypto";

export default function verifyWebHookSignature(req:express.Request):boolean{
    const signature=req.headers['x-hub-signature-256'] as string;
    const secret=process.env.WEBHOOK_SECRET as string;

    const hmac=crypto.createHmac('sha256',secret);
    const digest='sha256'+hmac.update(JSON.stringify(req.body)).digest('hex');
    return crypto.timingSafeEqual(Buffer.from(signature),Buffer.from(digest));
}