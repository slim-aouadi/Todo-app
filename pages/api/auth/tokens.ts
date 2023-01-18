import { serialize } from 'cookie'
import jwt from 'jsonwebtoken'
import { config } from '../../../utils/config'
import { REFRESH_TOKEN_COOKIE } from '../../../utils/constants'

export const generateTokens = (userId: string) => {
  return {
    accessToken: jwt.sign({ sub: userId }, config.ACCESS_TOKEN.SECRET, {
      expiresIn: config.ACCESS_TOKEN.EXPIRES_IN_SECONDS
    }),
    refreshToken: jwt.sign({ sub: userId }, config.REFRESH_TOKEN.SECRET, {
      expiresIn: config.REFRESH_TOKEN.EXPIRES_IN_SECONDS
    })
  }
}

export const generateCookie = (refreshToken: string) => {
  return {
    cookie: serialize(REFRESH_TOKEN_COOKIE, refreshToken, {
      httpOnly: config.REFRESH_TOKEN.HTTPONLY,
      secure: config.REFRESH_TOKEN.SECURE,
      sameSite: config.REFRESH_TOKEN.SAMESITE,
      maxAge: config.REFRESH_TOKEN.EXPIRES_IN_SECONDS,
      path: config.REFRESH_TOKEN.PATH
    })
  }
}

const verifyToken = (token: string, secret: string) => {
  try {
    return jwt.verify(token, secret, {
      complete: false
    })
  } catch {
    throw 'The access / refresh token in invalid or corrupted'
  }
}

export const verifyRefreshToken = (token: string) => {
  return verifyToken(token, config.REFRESH_TOKEN.SECRET)
}
