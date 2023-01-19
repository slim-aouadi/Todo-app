import { serialize } from "cookie";
import { SignJWT, jwtVerify } from "jose";
import { config } from "../../../utils/config";
import {
  ACCESS_TOKEN_COOKIE,
  REFRESH_TOKEN_COOKIE,
} from "../../../utils/constants";
import { nanoid } from "nanoid";

export const generateTokens = async (userId: string) => {
  return {
    refreshToken: await new SignJWT({})
      .setProtectedHeader({ alg: "HS256" })
      .setJti(nanoid())
      .setIssuedAt()
      .setExpirationTime("2h")
      .sign(new TextEncoder().encode(getJwtSecretKey())),
    accessToken: await new SignJWT({ sub: userId })
      .setProtectedHeader({ alg: "HS256" })
      .setJti(nanoid())
      .setIssuedAt()
      .setExpirationTime("2h")
      .sign(new TextEncoder().encode(getJwtSecretKey())),
  };
};

export const getJwtSecretKey = () => {
  const secret = process.env.NEXT_PUBLIC_REFRESH_TOKEN_SECRET;

  if (!secret || secret.length === 0) {
    throw new Error("The Env Var Is Not Set");
  }

  return secret;
};

export const generateCookies = (tokens: {
  accessToken: string;
  refreshToken: string;
}) => {
  return [
    serialize(ACCESS_TOKEN_COOKIE, tokens.accessToken, {
      httpOnly: false,
      secure: config.REFRESH_TOKEN.SECURE,
      sameSite: config.REFRESH_TOKEN.SAMESITE,
      maxAge: config.REFRESH_TOKEN.EXPIRES_IN_SECONDS,
      path: config.REFRESH_TOKEN.PATH,
    }),
    serialize(REFRESH_TOKEN_COOKIE, tokens.refreshToken, {
      httpOnly: config.REFRESH_TOKEN.HTTPONLY,
      secure: config.REFRESH_TOKEN.SECURE,
      sameSite: config.REFRESH_TOKEN.SAMESITE,
      maxAge: config.REFRESH_TOKEN.EXPIRES_IN_SECONDS,
      path: config.REFRESH_TOKEN.PATH,
    }),
  ];
};

export const verifyToken = async (token: string) => {
  const verified = await jwtVerify(
    token,
    new TextEncoder().encode(getJwtSecretKey())
  );

  return verified.payload;
};
