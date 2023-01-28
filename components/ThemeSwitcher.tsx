import { MoonIcon } from '../assets/MoonIcon'
import { SunIcon } from '../assets/SunIcon'
import {
  useDarkModeContext,
  useSetDarkModeContext
} from '../context/DarkModeContext'
import toggleTheme from '../utils/toggleTheme'

export const ThemeSwitcher = () => {
  const theme = useDarkModeContext()
  const setStoredMode = useSetDarkModeContext()

  const handleThemeSwitch = () => {
    setStoredMode(toggleTheme(theme))
  }

  return (
    <button
      type={'button'}
      onClick={handleThemeSwitch}
      className="border-2 rounded p-1"
    >
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </button>
  )
}
