const toggleTheme = (theme: string): string => {
  console.log(theme)
  if (theme === 'dark') return 'light'
  return 'dark'
}

export default toggleTheme
