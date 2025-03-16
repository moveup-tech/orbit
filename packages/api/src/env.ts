import * as z from "zod";

export const envSchema = z.object({
  APP_NAME: z.string(),
  APP_PORT: z.string().transform((port) => Number(port)),
  APP_SECRET: z.string().cuid(),
  DATABASE_URL: z.string().url(),
  MONGODB_URL: z.string().url(),
  EMAIL_HOST: z.string(),
  EMAIL_USER: z.string(),
  EMAIL_PASSWORD: z.string(),
  EMAIL_PORT: z.string().transform((port) => Number(port)),
});

export const env = envSchema.parse(process.env);
