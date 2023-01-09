import { NextApiRequest, NextApiResponse } from 'next'
import { loginUser } from '../../../libs/prisma/Auth'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { serialize } from 'cookie'

const secret = process.env.NEXT_PUBLIC_ACCESS_TOKEN_SECRET

const refresh = process.env.NEXT_PUBLIC_REFRESH_TOKEN_SECRET

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { user } = await loginUser(req.body)

    if (user == null) return res.status(401).json({ message: 'User Not Found' })

    const match = await bcrypt.compare(req.body.password, user.password)

    if (!match) return res.status(401).json({ message: 'Unothorized' })

    const accessToken = jwt.sign(
      {
        UserInfo: {
          username: user.username
        }
      },
      secret,
      {
        expiresIn: '10s'
      }
    )

    const refreshToken = jwt.sign(
      {
        username: user.username
      },
      refresh,
      {
        expiresIn: '1d'
      }
    )
    const cookie = serialize('jwt', refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000,
      path: '/'
    })
    res.setHeader('Set-Cookie', cookie)

    return res.status(200).json({ accessToken })
  } catch (error) {
    console.log('Request error', error)
    return res
      .status(500)
      .json({ error: 'Error authenticating this user', success: false })
  }
}
