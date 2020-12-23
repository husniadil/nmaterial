import { CssBaseline, MuiThemeProvider } from '@material-ui/core'
import { Theme } from '@material-ui/core'
import React, { useCallback, useEffect, useState } from 'react'

import { dark, light } from './theme'

interface ThemeProviderProps {
  children: React.ReactNode
}

export const ToggleThemeContext = React.createContext({
  toggleTheme: () => {
    console.log()
  },
  isDark: false,
})

type SelectedTheme = {
  themeName: string
  appliedTheme: Theme
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }: ThemeProviderProps) => {
  const [selectedTheme, setSelectedTheme] = useState<SelectedTheme>({
    appliedTheme: dark,
    themeName: 'dark',
  })

  useEffect(() => {
    const theme = localStorage.getItem('theme')
    if (theme && theme === 'light') {
      setSelectedTheme({ appliedTheme: light, themeName: 'light' })
    }
  }, [])

  const toggleTheme = useCallback(() => {
    if (!selectedTheme || selectedTheme.themeName === 'dark') {
      setSelectedTheme({ appliedTheme: light, themeName: 'light' })
      localStorage.setItem('theme', 'light')
    } else {
      setSelectedTheme({ appliedTheme: dark, themeName: 'dark' })
      localStorage.setItem('theme', 'dark')
    }
  }, [selectedTheme, setSelectedTheme])

  return (
    <ToggleThemeContext.Provider
      value={{
        toggleTheme,
        isDark: !(selectedTheme.themeName === 'light'),
      }}
    >
      <MuiThemeProvider theme={selectedTheme.appliedTheme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ToggleThemeContext.Provider>
  )
}

export default ThemeProvider
