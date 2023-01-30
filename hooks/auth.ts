import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import { AuthService } from '../services/Auth'

export const useLogin = () => {
  const router = useRouter()
  return useMutation({
    mutationKey: ['login'],
    mutationFn: AuthService.loginUser,
    onSuccess: async () => {
      toast.success('Successfully authenticated')
      return await router.push('/home')
    },
    onError: () => {
      return toast.error('Check your credentials !')
    }
  })
}

export const useRegister = () => {
  const router = useRouter()
  return useMutation({
    mutationKey: ['register'],
    mutationFn: AuthService.registerUser,
    onSuccess: async () => {
      toast.success('Successfully registered')
      return await router.push('/')
    },
    onError: () => {
      return toast.error('This username / password already exists ')
    }
  })
}
