import { z } from "zod";

export const checkoutSchema = z.object({
  name: z.string().min(1, "Name is required"),
  password: z.string().min(4, "Password must be at least 4 characters long"),
});

export type TcheckoutSchema = z.infer<typeof checkoutSchema>;
