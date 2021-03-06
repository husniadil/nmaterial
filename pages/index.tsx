import Head from 'next/head'
import React from 'react'

import Home from '../src/components/Home'
import { TopBar } from '../src/container'
import { APP_DESCRIPTION, APP_NAME } from '../src/types/constants'

const PAGE_TITLE = 'Home'

export const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>{APP_NAME}</title>
        <meta name="description" content={APP_DESCRIPTION} />
      </Head>
      <TopBar title={PAGE_TITLE} actionHamburger={true} />
      <Home />
    </>
  )
}

export default HomePage
