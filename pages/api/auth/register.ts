import { NextApiRequest, NextApiResponse } from "next";
import { registerUser } from "../../../libs/prisma/Auth";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { user, error } = await registerUser(req.body);
    return res.status(200).json({ user });
  } catch (error) {
    console.log("Request error", error);
    return res
      .status(500)
      .json({ error: "Error registering user", success: false });
  }
}
