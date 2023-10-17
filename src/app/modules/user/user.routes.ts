import express from 'express';
import { UserController } from './user.controller';
// import { UserValidation } from './user.validation';

const router = express.Router();

router.post(
  '/',
  // validateRequest(UserValidation.create),
  UserController.insertIntoDb
);
router.patch(
  '/:id',
  // validateRequest(UserValidation.update),
  UserController.updateUser
);
router.delete('/:id', UserController.deleteUser);
router.get('/:id', UserController.getSingleData);
router.get('/', UserController.getUserFromDb);

export const UserRouter = router;
