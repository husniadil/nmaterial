import { CssBaseline, MuiThemeProvider } from '@material-ui/core'
import { Theme } from '@material-ui/core'
import React from 'react'

import { dark, light } from './theme'

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

export const ThemeProvider: React.FC = ({ children }) => {
  const [selectedTheme, setSelectedTheme] = React.useState<SelectedTheme>({
    appliedTheme: dark,
    themeName: 'dark',
  })

  React.useEffect(() => {
    const theme = localStorage.getItem('theme')
    if (theme && theme === 'light') {
      setSelectedTheme({ appliedTheme: light, themeName: 'light' })
    }
  }, [])

  const toggleTheme = React.useCallback(() => {
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
