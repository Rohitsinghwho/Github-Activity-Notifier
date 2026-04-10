import express from 'express';
import { handleWebhookEvent } from '../controllers/webhook.controller';

const router=express.Router();

router.post("/",handleWebhookEvent);

export default router;