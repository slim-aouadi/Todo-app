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
  if (theme === 'dark') {
    return (
      <button type={'button'} onClick={handleThemeSwitch}>
        <SunIcon className="" />
      </button>
    )
  } else {
    return (
      <button type={'button'} onClick={handleThemeSwitch}>
        <MoonIcon className="" />
      </button>
    )
  }
}
