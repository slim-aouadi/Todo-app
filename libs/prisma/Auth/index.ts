import { FormLogin, FormRegister } from '../../../types/User'
import { prisma } from '../index'
import bcrypt from 'bcrypt'

export async function registerUser(user: FormRegister) {
  user.password = bcrypt.hashSync(user.password, 10)
  const newUser = await prisma.user.create({ data: user })
  return { user: newUser }
}

export async function loginUser(user: FormLogin) {
  const foundUser = await prisma.user.findUnique({
    where: {
      username: user.username
    }
  })
  return { user: foundUser }
}
