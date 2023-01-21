import z from 'zod'
import { FIFTEEN_MINUTES_IN_SECONDS, ONE_MINUTE_IN_SECONDS } from './constants'

const configSchema = z.object({
  WEBSITE_URL: z.string(),
  ACCESS_TOKEN: z.object({
    SECRET: z.string(),
    EXPIRES_IN_SECONDS: z.number()
  }),
  REFRESH_TOKEN: z.object({
    SECRET: z.string(),
    EXPIRES_IN_SECONDS: z.number(),
    PATH: z.string(),
    HTTPONLY: z.boolean(),
    SAMESITE: z.enum(['none', 'lax', 'strict']),
    SECURE: z.boolean()
  })
})

export const config = configSchema.parse({
  WEBSITE_URL: process.env.NEXT_PUBLIC_WEBSITE_URL as string,
  ACCESS_TOKEN: {
    SECRET: process.env.NEXT_PUBLIC_ACCESS_TOKEN_SECRET as string,
    EXPIRES_IN_SECONDS: ONE_MINUTE_IN_SECONDS
  },
  REFRESH_TOKEN: {
    SECRET: process.env.NEXT_PUBLIC_REFRESH_TOKEN_SECRET as string,
    EXPIRES_IN_SECONDS: FIFTEEN_MINUTES_IN_SECONDS,
    PATH: '/',
    HTTPONLY: true,
    SECURE: true,
    SAMESITE: 'lax'
  }
})
