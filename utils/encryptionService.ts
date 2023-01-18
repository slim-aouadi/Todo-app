import crypto from 'crypto'
import bcrypt from 'bcrypt'

const SALT_ROUNDS = 10
export const randomHash = () => crypto.randomBytes(10).toString('hex')

export const comparePassword = (password: string, hash: string) =>
  bcrypt.compareSync(password, hash)

export const hashPassword = (password: string) =>
  bcrypt.hashSync(password, SALT_ROUNDS)
