import express from 'express';
import { AddToCartController } from './addToCart.controller';

const router = express.Router();

router.post('/', AddToCartController.insertIntoDB);

export const AddToCartRouter = router;