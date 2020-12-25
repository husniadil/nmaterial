import Head from 'next/head'
import React from 'react'

import About from '../src/components/About'
import { TopBar } from '../src/container'
import { APP_DESCRIPTION, APP_NAME } from '../src/types/constants'

const PAGE_TITLE = 'About'

export const AboutPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>
          {PAGE_TITLE} | {APP_NAME}
        </title>
        <meta name="description" content={APP_DESCRIPTION} />
      </Head>
      <TopBar title={PAGE_TITLE} actionHamburger={false} />
      <About />
    </>
  )
}

export default AboutPage
