import { z } from 'zod'

export const userSchema = z.object({
  FirstName: z.string().min(2, {
    message: 'First name must be at least 2 characters.',
  }),
  LastName: z.string().min(2, {
    message: 'Last name must be at least 2 characters.',
  }),
  Email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  Phone: z.string().regex(/^\d{11}$/, {
    message: 'Phone number must be exactly 11 digits.',
  }),
})

export type UserInformation = z.infer<typeof userSchema>
