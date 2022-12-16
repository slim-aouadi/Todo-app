import prisma from '../index';

export async function registerUser(user: any) {
    try {
        const newUser = await prisma.user.create({ data: user });
        return { user: newUser }
    } catch (error) {
        return { error }
    }
}