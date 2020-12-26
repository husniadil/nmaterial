import CssBaseline from '@material-ui/core/CssBaseline'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import NextNprogress from 'nextjs-progressbar'
import React from 'react'

import AppContainer from '../src/container/AppContainer'
import { ThemeProvider } from '../src/theme'

export const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=0" />
      </Head>
      <NextNprogress color="#29D" startPosition={0.3} stopDelayMs={200} height={1} />
      <ThemeProvider>
        <CssBaseline />
        <AppContainer>
          <Component {...pageProps} />
        </AppContainer>
      </ThemeProvider>
    </React.Fragment>
  )
}

export default MyApp
