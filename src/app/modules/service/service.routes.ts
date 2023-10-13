import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ServiceController } from './service.controller';
import { ServiceValidation } from './service.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(ServiceValidation.create),
  ServiceController.insertIntoDB
);
router.patch(
  '/:id',
  validateRequest(ServiceValidation.update),
  ServiceController.updateService
);
router.delete('/:id', ServiceController.deleteService);
router.get('/:id', ServiceController.getSingleService);

router.get('/', ServiceController.getAllDataFromDB);

export const ServiceRoutes = router;
