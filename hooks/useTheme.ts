import { APP_THEME } from '../utils/constants'
import { useLocalStorage } from './useLocalStorage'

export function useTheme() {
  return useLocalStorage<string>(APP_THEME, 'light')
}
