import { z } from "zod";

export const FormSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters long." }),
  surname: z
    .string()
    .min(2, { message: "Surname must be at least 2 characters long." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  // password: z
  //   .string()
  //   .min(8, { message: "Password must be at least 8 characters long." })
  //   .regex(/[a-z]/, {
  //     message: "Password must contain at least 1 lowercase letter.",
  //   })
  //   .regex(/[A-Z]/, {
  //     message: "Password must contain at least 1 uppercase letter.",
  //   })
  //   .regex(/[0-9]/, { message: "Password must contain at least 1 number." })
  //   .regex(/[@$!%*?&#]/, {
  //     message: "Password must contain at least 1 special character.",
  //   }),
  // birthday: z.date(),
  // gender: z.enum(["male", "female", "other"]),
});

export type FormSchema = z.infer<typeof FormSchema>;
