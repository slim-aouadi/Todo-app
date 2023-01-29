import { useMutation } from '@tanstack/react-query'
import { refreshToken } from '../services/Auth/AuthService'

const useRefreshToken = () => {
  const refreshTokenMutation = useMutation(['refreshToken'], refreshToken, {
    onSuccess: data => {}
  })

  const refresh = () => {
    refreshTokenMutation.mutate()
  }

  return refresh
}

export default useRefreshToken
