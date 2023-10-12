import { z } from 'zod';

const create = z.object({
  body: z.object({
    email: z.string({
      required_error: 'email is required',
    }),
    password: z.string({
      required_error: 'password is required',
    }),

    contactNo: z.string({
      required_error: 'contactNo is required',
    }),
    fullName: z.string({
      required_error: 'fullName is required',
    }),
    address: z.string({
      required_error: 'address is required',
    }),
    profileImage: z.string().optional(),
  }),
});


export const UserValidation = { create };
