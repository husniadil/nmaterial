import { createMuiTheme, ThemeOptions } from '@material-ui/core'

export const paletteColorsDark = {
  primary: '#15202b',
  text: {
    primary: '#fff',
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)',
    hint: 'rgba(255, 255, 255, 0.5)',
  },
  divider: 'rgba(255, 255, 255, 0.12)',
  background: {
    paper: '#15202b',
    default: '#15202b',
  },
}

export const paletteColorsLight = {
  primary: '#fafafa',
  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'rgba(0, 0, 0, 0.54)',
    disabled: 'rgba(0, 0, 0, 0.38)',
    hint: 'rgba(0, 0, 0, 0.38)',
  },
  divider: 'rgba(0, 0, 0, 0.12)',
  background: {
    paper: '#fafafa',
    default: '#fafafa',
  },
}

const options = (dark: boolean): ThemeOptions => {
  const paletteColors = dark ? paletteColorsDark : paletteColorsLight
  return {
    palette: {
      type: dark ? 'dark' : 'light',
      primary: {
        main: paletteColors.primary,
      },
      text: paletteColors.text,
      divider: paletteColors.divider,
      background: paletteColors.background,
    },
    typography: {
      fontFamily: 'Lato, Helvetica, Arial, sans-serif',
      body1: {
        fontFamily: 'Open Sans, Helvetica, Arial, sans-serif',
      },
      body2: {
        fontFamily: 'Open Sans, Helvetica, Arial, sans-serif',
      },
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          html: {
            height: '100%',
            padding: 0,
            margin: 0,
            width: '100vw',
          },
          body: {
            height: '100%',
            padding: 0,
            margin: 0,
            width: '100vw',
            overflowX: 'hidden',
          },
          a: {
            textDecoration: 'none',
            color: paletteColors.text.primary,
          },
        },
      },
    },
  }
}

export const dark = createMuiTheme(options(true))
export const light = createMuiTheme(options(false))

export default dark
