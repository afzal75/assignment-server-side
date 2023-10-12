import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { UserController } from './user.controller';
import { UserValidation } from './user.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(UserValidation.create),
  UserController.insertIntoDb
);
router.get('/', UserController.getUserFromDb);

export const UserRouter = router;
