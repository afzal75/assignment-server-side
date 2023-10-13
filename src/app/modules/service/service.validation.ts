import { z } from 'zod';

const create = z.object({
  body: z.object({
    title: z.string({
      required_error: 'title is required',
    }),
    description: z.string({
      required_error: 'description is required',
    }),
    price: z.string({
      required_error: 'price is required',
    }),
  }),
});

export const ServiceValidation = { create };