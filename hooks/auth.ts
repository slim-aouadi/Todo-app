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
