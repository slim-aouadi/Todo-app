import { NextApiRequest, NextApiResponse } from 'next'
import { registerUser } from '../../../libs/prisma/Auth'
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    await registerUser(req.body)
    return res.status(200).json('User Successfully Registered !')
  } catch (error) {
    console.log('Request error', error)
    return res
      .status(500)
      .json({ error: 'Error registering user', success: false })
  }
}
