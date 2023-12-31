import { Review } from '@prisma/client';
import prisma from '../../../shared/prisma';

const insertIntoDB = async (data: Review): Promise<Review> => {
  const result = await prisma.review.create({
    data,
    include: {
      user: true,
      service: true,
    },
  });
  return result;
};

const getAllData = async (): Promise<Review[]> => {
    const result = await prisma.review.findMany({
      include: {
        user: true,
        service: true,
      },
    });
    return result;
  };

  const deleteReview = async (id: string): Promise<Review> => {
    const result = await prisma.review.delete({
      where: { id },
      include: {
        user: true,
        service: true,
      },
    });
    return result;
  };

export const ReviewService = {
    insertIntoDB,
    getAllData,
    deleteReview
}