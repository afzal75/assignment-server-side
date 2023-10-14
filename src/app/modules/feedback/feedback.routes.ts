import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { FeedbackController } from './feedback.controller';

const router = express.Router();

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  FeedbackController.deleteFeedback
);
router.post('/', FeedbackController.insertIntoDB);
router.get('/', FeedbackController.getDataFromDB);

export const FeedbackRouter = router;
