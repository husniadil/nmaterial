import '../styles/globals.css'

import { AppProps } from 'next/app'
import React, { ReactElement } from 'react'

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
  return <Component {...pageProps} />
}

export default MyApp
