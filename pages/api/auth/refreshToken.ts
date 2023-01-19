import { NextApiRequest, NextApiResponse } from "next";
import { fetchUserById } from "../../../libs/prisma/User";
import { REFRESH_TOKEN_COOKIE } from "../../../utils/constants";
import { generateTokens, verifyToken } from "./tokens";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    const reqCookie = req.cookies?.[REFRESH_TOKEN_COOKIE] as string;

    if (!reqCookie) return res.status(401).json({ message: "Unothorized" });

    const verification = await verifyToken(reqCookie);
    const user = await fetchUserById(verification?.sub as string);

    if (!user) {
      return res
        .status(401)
        .json({ message: "User not matching Refresh Token" });
    }

    const tokens = await generateTokens(user.id);

    return res.status(200).json(tokens.accessToken);
  } catch (error) {
    console.log("Request error", error);
    return res
      .status(500)
      .json({ error: "Error Refreshing Token", success: false });
  }
}
