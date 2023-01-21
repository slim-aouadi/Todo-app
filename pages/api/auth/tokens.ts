import { serialize } from 'cookie'
import { config } from '../../../utils/config'
import {
  ACCESS_TOKEN_COOKIE,
  REFRESH_TOKEN_COOKIE
} from '../../../utils/constants'
import { SignJWT, jwtVerify } from 'jose'
import { nanoid } from 'nanoid'

export const generateTokens = async (userId: string) => {
  return {
    refreshToken: await new SignJWT({})
      .setProtectedHeader({ alg: 'HS256' })
      .setJti(nanoid())
      .setIssuedAt()
      .setExpirationTime('2h')
      .sign(new TextEncoder().encode(config.REFRESH_TOKEN.SECRET)),
    accessToken: await new SignJWT({ sub: userId })
      .setProtectedHeader({ alg: 'HS256' })
      .setJti(nanoid())
      .setIssuedAt()
      .setExpirationTime('2h')
      .sign(new TextEncoder().encode(config.ACCESS_TOKEN.SECRET))
  }
}

export const generateCookies = (tokens: {
  accessToken: string
  refreshToken: string
}) => {
  return [
    serialize(ACCESS_TOKEN_COOKIE, tokens.accessToken, {
      httpOnly: false,
      secure: config.REFRESH_TOKEN.SECURE,
      sameSite: config.REFRESH_TOKEN.SAMESITE,
      maxAge: config.REFRESH_TOKEN.EXPIRES_IN_SECONDS,
      path: config.REFRESH_TOKEN.PATH
    }),
    serialize(REFRESH_TOKEN_COOKIE, tokens.refreshToken, {
      httpOnly: config.REFRESH_TOKEN.HTTPONLY,
      secure: config.REFRESH_TOKEN.SECURE,
      sameSite: config.REFRESH_TOKEN.SAMESITE,
      maxAge: config.REFRESH_TOKEN.EXPIRES_IN_SECONDS,
      path: config.REFRESH_TOKEN.PATH
    })
  ]
}

export const verifyToken = async (token: string) => {
  const verified = await jwtVerify(
    token,
    new TextEncoder().encode(config.ACCESS_TOKEN.SECRET)
  )

  return verified.payload
}
