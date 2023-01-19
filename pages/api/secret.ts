import { NextApiRequest, NextApiResponse } from "next";
import { ACCESS_TOKEN_COOKIE } from "../../utils/constants";
import { verifyToken } from "./auth/tokens";
import { fetchUserById } from "../../libs/prisma/User";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    const reqCookie = req.cookies[ACCESS_TOKEN_COOKIE];

    if (!reqCookie) {
      throw new Error("no acces token cookie");
    }
    const { sub } = await verifyToken(reqCookie);

    const user = await fetchUserById(sub as string);
    if (!user) {
      throw new Error("could not find user associated with access token");
    }

    return res.status(200).json({
      secret: `Hello ${user.username}, Just play Udyr ez climb`,
    });
  } catch (error) {
    console.log("Request error", error);
    return res.status(500).json({ error: "Get the fuck out", success: false });
  }
}
