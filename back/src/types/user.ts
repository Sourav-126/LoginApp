import z from "zod";

export const userSchema = z.object({
  UID: z.string(),
  password: z.string(),
});
