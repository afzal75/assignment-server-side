import { z } from 'zod';

const create = z.object({
  body: z.object({
    userId: z.string({
      required_error: 'userId is required',
    }),
    serviceId: z.string({
      required_error: 'serviceId is required',
    }),
    review: z.string({
      required_error: 'review is required',
    }),
    rating: z.number({
      required_error: 'rating is required',
    }),
  }),
});

export const ReviewValidation = { create };
