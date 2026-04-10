import express from "express";
import crypto from "crypto";

export default function verifyWebHookSignature(
  rawBody: Buffer,
  signature: string,
  secret: string,
): boolean {
  const hmac = crypto.createHmac("sha256", secret);
  
  hmac.update(rawBody);
  const digest = "sha256=" + hmac.digest("hex");
  const sigBuffer = Buffer.from(signature);
  const digestBuffer = Buffer.from(digest);

  if (sigBuffer.length !== digestBuffer.length) {
    return false; // ← was missing or not working correctly
  }
  return crypto.timingSafeEqual(sigBuffer, digestBuffer);
}
