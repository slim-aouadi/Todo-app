import { NextApiRequest, NextApiResponse } from 'next'
import { fetchUserById } from '../../../libs/prisma/User'
import { ACCESS_TOKEN_COOKIE } from '../../../utils/constants'
import { verifyToken } from './tokens'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const accessToken = req.cookies?.[ACCESS_TOKEN_COOKIE] as string

    const verification = await verifyToken(accessToken)

    if (!verification)
      return res.status(400).json({ message: 'token is corrupted' })

    const user = await fetchUserById(verification?.sub)

    if (user == null)
      return res
        .status(400)
        .json({ message: 'User associated with token not found' })

    return res.status(200).json(null)
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'Error authenticating this user', success: false })
  }
}
