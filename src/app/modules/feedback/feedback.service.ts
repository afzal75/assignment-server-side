import { FeedBack } from '@prisma/client';
import prisma from '../../../shared/prisma';

const insertIntoDB = async (data: FeedBack): Promise<FeedBack> => {
  const result = await prisma.feedBack.create({
    data,
    include: { Service: true, User: true },
  });

  return result;
};

const getDataFromDB = async (): Promise<FeedBack[]> => {
  const result = await prisma.feedBack.findMany({
    include: { Service: true, User: true },
  });

  return result;
};

export const FeedbackService = {
  insertIntoDB,
  getDataFromDB
};
