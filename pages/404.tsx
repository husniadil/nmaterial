import Head from 'next/head'
import React from 'react'

import { TopBar } from '../src/container'
import ErrorBox from '../src/container/ErrorBox'
import { APP_NAME } from '../src/types/constants'

const PAGE_TITLE = 'Not Found'

export const ErrorPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>
          {PAGE_TITLE} | {APP_NAME}
        </title>
        <meta name="robots" content="noindex" />
      </Head>
      <TopBar title={PAGE_TITLE} actionHamburger={false} />
      <ErrorBox statusCode={404} />
    </>
  )
}

export default ErrorPage
