import prisma from '../index'

export async function fetchUserById(userId: string) {
  try {
    const foundUser = await prisma.user.findUnique({
      where: {
        id: userId
      }
    })
    return { user: foundUser }
  } catch (error) {
    return { error }
  }
}
