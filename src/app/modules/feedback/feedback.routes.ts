import express from 'express';
import { FeedbackController } from './feedback.controller';

const router = express.Router();

router.post('/', FeedbackController.insertIntoDB);
router.get('/', FeedbackController.getDataFromDB);

export const FeedbackRouter = router;
