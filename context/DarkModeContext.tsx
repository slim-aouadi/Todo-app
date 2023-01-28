import { createContext, Dispatch, SetStateAction, useContext } from 'react'
import { useTheme } from '../hooks/useTheme'

const DarkModeContext = createContext<string>('light')
const SetDarkModeContext = createContext<Dispatch<SetStateAction<string>>>(
  value => {
    console.log('Default function:', value)
  }
)

export function useDarkModeContext() {
  return useContext(DarkModeContext)
}

export function useSetDarkModeContext() {
  return useContext(SetDarkModeContext)
}

export function DarkModeContextProvider({ children }) {
  const [theme, setTheme] = useTheme()
  return (
    <DarkModeContext.Provider value={theme}>
      <SetDarkModeContext.Provider value={setTheme}>
        {children}
      </SetDarkModeContext.Provider>
    </DarkModeContext.Provider>
  )
}
