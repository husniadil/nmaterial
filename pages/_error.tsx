import { NextPage } from 'next'
import type { AppContext } from 'next/app'
import Head from 'next/head'
import React from 'react'

import { TopBar } from '../src/container'
import ErrorBox from '../src/container/ErrorBox'
import { APP_NAME } from '../src/types/constants'

interface ErrorPageProps {
  statusCode: number
}

export const ErrorPage: NextPage<ErrorPageProps> = ({ statusCode }) => {
  let pageTitle: string
  switch (statusCode) {
    case 404:
      pageTitle = 'Not Found'
      break
    default:
      pageTitle = 'Error'
      break
  }
  return (
    <>
      <Head>
        <title>
          {pageTitle} | {APP_NAME}
        </title>
        <meta name="robots" content="noindex" />
      </Head>
      <TopBar title={pageTitle} actionHamburger={false} />
      <ErrorBox statusCode={statusCode} />
    </>
  )
}

ErrorPage.getInitialProps = async ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default ErrorPage
