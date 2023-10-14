import { AddToCart } from '@prisma/client';
import prisma from '../../../shared/prisma';

const insertIntoDB = async (data: AddToCart): Promise<AddToCart> => {
  const result = await prisma.addToCart.create({
    data,
    include: { Service: true, User: true },
  });

  return result;
};

const getAllData = async (): Promise<AddToCart[]> => {
  const result = await prisma.addToCart.findMany({
    include: { Service: true, User: true },
  });

  return result;
};

const getSingleData = async (id: string): Promise<AddToCart | null> => {
  const result = await prisma.addToCart.findUnique({
    where: { id },
    include: { Service: true, User: true },
  });

  return result;
};

export const AddToCartService = {
  insertIntoDB,
  getAllData,
  getSingleData,
};
