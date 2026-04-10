import express from "express";
import crypto from "crypto";



export default function verifyWebHookSignature(rawBody: Buffer, signature: string, secret: string): boolean {
    const hmac = crypto.createHmac('sha256', secret);
    hmac.update(rawBody);
    const digest='sha256='+hmac.digest('hex');
    return crypto.timingSafeEqual(Buffer.from(signature),Buffer.from(digest));
}