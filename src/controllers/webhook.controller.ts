    import express from "express";
import verifyWebHookSignature from "../utils/verifyWebHookSignature";
import dotenv from "dotenv";
dotenv.config();
export const handleWebhookEvent = (
  req: express.Request,
  res: express.Response,
): any => {
  try {
      const rawBody = req.body as Buffer;
      const requestBody = JSON.parse(rawBody.toString());
      const eventType = req.headers["x-github-event"] as string;
      const signature = req.headers["x-hub-signature-256"] as string;
      const secret = process.env.WEBHOOK_SECRET as string;
    if (!signature || !secret) {
      return res.status(400).json({ message: "Missing signature or secret" });
    }
    if (!eventType) {
      return res.status(400).json({ message: "Missing event type" });
    }
    if (!verifyWebHookSignature(rawBody, signature, secret)) {
      return res.status(401).json({ message: "Invalid signature" });
    }
    // Process the webhook event based on the event type

    switch (eventType) {
      case "push":
        console.log(
          `Pushed by ${requestBody.pusher.name} to ${requestBody.repository.full_name}`,
        );
        requestBody.commits.forEach((commit: any) =>
          console.log(`- ${commit.message} (by ${commit.author.name})`),
        );
        break;
      case "pull_request":
        console.log(
          `Pull request ${requestBody.number}: "${requestBody.pull_request.title}" by ${requestBody.pull_request.user.login}`,
        );
        break;
      default:
        console.log(`Received event: ${eventType}`);
    }

    return res.status(200).json({ message: "Event processed successfully" });
  } catch (error) {
    console.error("Error handling webhook event:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
