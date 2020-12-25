import Head from 'next/head'
import React from 'react'

import HomeJSS from '../../src/components/HomeJSS'
import { TopBar } from '../../src/container'
import { APP_DESCRIPTION, APP_NAME } from '../../src/types/constants'

const PAGE_TITLE = 'Home with JSS'

export const HomeWithJSS: React.FC = () => {
  return (
    <>
      <Head>
        <title>
          {PAGE_TITLE} | {APP_NAME}
        </title>
        <meta name="description" content={APP_DESCRIPTION} />
      </Head>
      <TopBar title={PAGE_TITLE} actionHamburger={false} />
      <HomeJSS />
    </>
  )
}

export default HomeWithJSS
