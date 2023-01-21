import { useMutation } from '@tanstack/react-query'
import { refreshToken } from '../services/Auth/AuthService'
import useAuth from './useAuth'

const useRefreshToken = () => {
  const { setAuth } = useAuth()

  const refreshTokenMutation = useMutation(['refreshToken'], refreshToken, {
    onSuccess: data => {
      setAuth(prev => {
        return data.data
      })
    }
  })

  const refresh = () => {
    refreshTokenMutation.mutate()
  }

  return refresh
}

export default useRefreshToken
