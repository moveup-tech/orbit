import * as z from "zod";

export const envSchema = z.object({
  VITE_APP_NAME: z.string(),
  VITE_API_BASE_URL: z.string().url(),
});

export const env = envSchema.parse(import.meta.env);
