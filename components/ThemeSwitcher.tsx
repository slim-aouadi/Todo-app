import { useTheme } from 'next-themes'
import { MoonIcon } from '../assets/MoonIcon'
import { SunIcon } from '../assets/SunIcon'

export const ThemeSwitcher = () => {
  const { systemTheme, theme, setTheme } = useTheme()

  const currentTheme = theme === 'system' ? systemTheme : theme

  if (currentTheme === 'dark') {
    return (
      <button type={'button'} onClick={() => setTheme('light')}>
        <SunIcon className="" />
      </button>
    )
  } else {
    return (
      <button type={'button'} onClick={() => setTheme('dark')}>
        <MoonIcon className="" />
      </button>
    )
  }
}
