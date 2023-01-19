import prisma from "../index";

export async function fetchUserById(userId: string) {
  return await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
}
