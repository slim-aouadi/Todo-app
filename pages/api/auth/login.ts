import { NextApiRequest, NextApiResponse } from 'next'
import { loginUser } from '../../../libs/prisma/Auth'
import { generateCookies, generateTokens } from './tokens'
import { comparePassword } from '../../../utils/encryptionService'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { user } = await loginUser(req.body)

    if (user === null)
      return res.status(401).json({ message: 'User Not Found' })

    const match = comparePassword(req.body.password, user.password)

    if (!match) return res.status(401).json({ message: 'Unothorized' })

    const tokens = await generateTokens(user.id)

    const cookies = generateCookies(tokens)

    res.setHeader('Set-Cookie', cookies)

    return res.status(200).json(tokens.accessToken)
  } catch (error) {
    console.log('Request error', error)
    return res
      .status(500)
      .json({ error: 'Error authenticating this user', success: false })
  }
}
