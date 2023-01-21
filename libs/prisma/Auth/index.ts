import { FormLogin, FormRegister } from '../../../types/User'
import prisma from '../index'
import bcrypt from 'bcrypt'

export async function registerUser(user: FormRegister) {
  try {
    user.password = bcrypt.hashSync(user.password, 10)
    const newUser = await prisma.user.create({ data: user })
    return { user: newUser }
  } catch (error) {
    return { error }
  }
}

export async function loginUser(user: FormLogin) {
  try {
    const foundUser = await prisma.user.findUnique({
      where: {
        username: user.username
      }
    })
    return { user: foundUser }
  } catch (error) {
    return { error }
  }
}
