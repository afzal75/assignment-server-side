import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { ReviewController } from './review.controller';
import { ReviewValidation } from './review.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(ReviewValidation.create),
  ReviewController.insertIntoDB
);

router.get('/', ReviewController.getAllData);

router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), ReviewController.deleteReview);

export const ReviewRoutes = router;
