import express from 'express';
import { AddToCartController } from './addToCart.controller';

const router = express.Router();
router.get('/:id', AddToCartController.getSingleData);
router.post('/', AddToCartController.insertIntoDB);
router.get('/', AddToCartController.getAllData);

export const AddToCartRouter = router;