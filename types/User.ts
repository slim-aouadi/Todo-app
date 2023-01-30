import z from 'zod'

export const User = z.object({
  username: z.string({
    required_error: 'username is required'
  }),
  password: z.string({
    required_error: 'password is required'
  })
})
export type UserType = z.infer<typeof User>

export const LoginForm = z.object({
  username: z.string({
    required_error: 'username is required'
  }),
  password: z.string({
    required_error: 'password is required'
  })
})
export type LoginFormType = z.infer<typeof LoginForm>

export const RegisterForm = z.object({
  username: z.string({
    required_error: 'username is required'
  }),
  password: z
    .string({
      required_error: 'password is required'
    })
    .min(6),
  email: z.string({
    required_error: 'email is required'
  })
})
export type RegisterFormType = z.infer<typeof RegisterForm>
