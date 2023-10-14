import { Blog } from '@prisma/client';
import httpStatus from 'http-status';
import { Secret } from 'jsonwebtoken';
import config from '../../../config';
import ApiError from '../../../errors/ApiError';
import { jwtHelpers } from '../../../helpers/jwtHelpers';
import prisma from '../../../shared/prisma';

const insertIntoDB = async (data: Blog, token: string): Promise<Blog> => {
  const user = jwtHelpers.verifyToken(token, config.jwt.secret as Secret);

  const isExist = await prisma.user.findFirst({
    where: {
      id: user.userId,
    },
  });

  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, "user doesn't exist!");
  }

  if (!data.authorId) {
    data.authorId = user.userId;
  }

  const result = await prisma.blog.create({
    data,
    include: {
      author: true,
    },
  });
  return result;
};

export const BlogService = {
    insertIntoDB
}