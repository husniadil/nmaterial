import CssBaseline from '@material-ui/core/CssBaseline'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import Head from 'next/head'
import React from 'react'

import { ThemeProvider } from '../src/theme'

const MyApp = (props: AppProps): React.ReactNode => {
  const { Component, pageProps } = props

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
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  )
}

export default MyApp
